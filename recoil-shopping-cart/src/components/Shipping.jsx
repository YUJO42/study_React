import { useRecoilState } from "recoil";
import { destinations } from "../mock";
import { shippingState } from "../recoil/atoms";

export default function Shipping() {
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
