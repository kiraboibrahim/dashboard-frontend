import { CssBaseline, CssVarsProvider, Sheet } from "@mui/joy";

import Cart from "../Cart/Cart";
import ProductGrid from "../ProductGrid/ProductGrid";
import { CartProvider } from "../Cart/useCart";
import DriverTable from "../DriverTable/DriverTable";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

function App() {
  return (
    <CssVarsProvider>
      <CssBaseline>
        <CartProvider>
          <Sheet sx={{ padding: 5 }}>
            <Header />
            <DriverTable />
            <ProductGrid />
            <Cart />
          </Sheet>
        </CartProvider>
      </CssBaseline>
    </CssVarsProvider>
  );
}

export default App;
