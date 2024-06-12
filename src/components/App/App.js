import { CssBaseline, CssVarsProvider } from "@mui/joy";
import Cart from "../Cart/Cart";
import ProductGrid from "../ProductGrid/ProductGrid";
import OrderTracker from "../OrderTracker/OrderTracker";
import { CartProvider } from "../Cart/useCart";
import DriverTable from "../DriverTable/DriverTable";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline>
        <DriverTable />
        <CartProvider>
          <ProductGrid />
          <Cart />
        </CartProvider>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
