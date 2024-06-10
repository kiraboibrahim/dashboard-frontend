import { CssBaseline, CssVarsProvider } from "@mui/joy";
import Cart from "../Cart/Cart";
import ProductGrid from "../ProductGrid/ProductGrid";
import OrderTracker from "../OrderTracker/OrderTracker";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline>
        <ProductGrid />
        <OrderTracker />
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
