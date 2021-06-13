import CartItems from "./CartItems";
import Shipping from "./Shipping";
import Totals from "./Totals";

export default function Cart() {
  return (
    <div>
      <h2>Cart</h2>
      <CartItems />
      <Shipping />
      <Totals />
    </div>
  );
}
