import {
  atom,
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const inventory = {
  a: {
    name: "☕️ Americano",
    price: 10,
  },
  b: {
    name: "🥛 Latte",
    price: 16,
  },
  c: {
    name: "🍵 Tea",
    price: 7.5,
  },
};

const destinations = {
  US: 25,
  CA: 35,
  KO: 45,
};

const cartState = atom({
  key: "cartState",
  default: {},
});

const shippingState = atom({
  key: "shippingState",
  default: "US",
});

const totalState = selector({
  key: "totalState",
  get: ({ get }) => {
    const cart = get(cartState);
    const shipping = get(shippingState);

    const subtotal = Object.entries(cart)?.reduce(
      (acc, [id, quantity]) => acc + inventory[id].price * quantity,
      0
    );
    const shippingTotal = destinations[shipping];

    return {
      subtotal,
      shipping: shippingTotal,
      total: subtotal + shippingTotal,
    };
  },
});

function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <Cart />
    </RecoilRoot>
  );
}

function AvailableItems() {
  const [cart, setCart] = useRecoilState(cartState);

  return (
    <div>
      <h2>Available</h2>
      <ul>
        {Object.entries(inventory).map(([id, { name, price }]) => (
          <li key={id}>
            {name} @ ${price.toFixed(2)}
            <button
              onClick={() => {
                setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
              }}
            >
              add
            </button>
            {cart[id] && (
              <button
                onClick={() => {
                  const copy = { ...cart };

                  if (copy[id] === 1) {
                    delete copy[id];
                    setCart(copy);
                  } else {
                    setCart({ ...copy, [id]: copy[id] - 1 });
                  }
                }}
              >
                rem
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <CartItems />
      <Shipping />
      <Totals />
    </div>
  );
}

function CartItems() {
  const cart = useRecoilValue(cartState);

  if (!Object.entries(cart).length) {
    return <p>no items</p>;
  }

  return (
    <ul>
      {Object.entries(cart).map(([id, quantity]) => (
        <li>
          {inventory[id].name} X {quantity}
        </li>
      ))}
    </ul>
  );
}

function Shipping() {
  const [shipping, setShipping] = useRecoilState(shippingState);

  return (
    <div>
      <h2>Shipping</h2>
      {Object.entries(destinations).map(([country, price]) => (
        <button onClick={() => setShipping(country)}>
          {country} @ {price}
          {country === shipping ? <span>🚀</span> : ""}
        </button>
      ))}
    </div>
  );
}

function Totals() {
  const totals = useRecoilValue(totalState);

  return (
    <div>
      <h2>Totals</h2>
      <p>SubTotal : ${totals.subtotal.toFixed(2)}</p>
      <p>Shipping : ${totals.shipping.toFixed(2)}</p>
      <p>
        <strong>Total : ${totals.total.toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default App;
