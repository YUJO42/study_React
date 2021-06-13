import { useRecoilState } from "recoil";
import { inventory } from "../mock";
import { cartState } from "../recoil/atoms";

export default function AvailableItems() {
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
