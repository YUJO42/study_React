import { selector } from "recoil";
import { destinations, inventory } from "../mock";
import { cartState, shippingState } from "./atoms";

export const totalState = selector({
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
