import { useRecoilValue } from "recoil";
import { inventory } from "../mock";
import { cartState } from "../recoil/atoms";

export default function CartItems() {
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
