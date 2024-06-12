import { createContext, useContext, useEffect, useReducer } from "react";

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const SET_QUANTITY = "SET_QUANTITY";

const CART_STORAGE_KEY = "YOOKATALE_CART";
const CartContext = createContext();

class Cart extends Array {
  hasItem(itemId) {
    return this.getItem(itemId) !== undefined;
  }

  getItem(itemId) {
    return this.find((cartItem) => cartItem.id === itemId);
  }

  findItemIndex(itemId) {
    return this.findIndex((cartItem) => cartItem.id === itemId);
  }

  isEmpty() {
    return this.length === 0;
  }
}

function cartReducer(cart, action) {
  switch (action.type) {
    case ADD:
      const { type, ...item } = action;
      return addCartItem(item, cart);

    case REMOVE: {
      const { id: itemId } = action;
      return removeCartItem(itemId, cart);
    }
    case SET_QUANTITY: {
      const { id: itemId, quantity } = action;
      return setCartItemQuantity(itemId, quantity, cart);
    }
    default:
      throw new Error("Invalid action");
  }
}

function addCartItem(item, cart) {
  if (!cart.hasItem(item.id)) {
    return Cart.of(
      ...[item, ...cart.map((cartItem) => JSON.parse(JSON.stringify(cartItem)))]
    );
  }
  return cart.map((cartItem) => JSON.parse(JSON.stringify(cartItem)));
}

function removeCartItem(itemId, cart) {
  return cart.filter((cartItem) => cartItem.id !== itemId);
}

function setCartItemQuantity(itemId, quantity, cart) {
  if (cart.hasItem(itemId)) {
    const itemIndex = cart.findItemIndex(itemId);
    cart.splice(itemIndex, 1, { ...cart[itemIndex], quantity });
  }
  return cart.map((cartItem) => JSON.parse(JSON.stringify(cartItem)));
}

function saveCart(cart) {
  return localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  return cartItems.length !== 0 ? Cart.of(...cartItems) : new Cart();
}

export function CartProvider({ children }) {
  const savedCart = loadCart();
  const [cart, dispatch] = useReducer(cartReducer, savedCart);
  useEffect(() => {
    function saveCartBeforeExit() {
      saveCart(cart);
    }
    window.addEventListener("beforeunload", saveCartBeforeExit);
    return () => window.removeEventListener("beforeunload", saveCartBeforeExit);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default function useCart() {
  return useContext(CartContext);
}
