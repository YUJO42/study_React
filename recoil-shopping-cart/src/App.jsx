import { RecoilRoot } from "recoil";
import AvailableItems from "./components/AvailableItems";
import Cart from "./components/Cart";

function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <Cart />
    </RecoilRoot>
  );
}

export default App;
