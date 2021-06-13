import { useRecoilValue } from "recoil";
import { totalState } from "../recoil/selectors";

export default function Totals() {
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
