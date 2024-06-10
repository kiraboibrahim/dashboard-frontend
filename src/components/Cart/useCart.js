import { useReducer } from "react";

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...cart,
        {
          name: action.name,
          id: action.id,
          quantity: action.quantity,
        },
      ];
    case "REMOVE":
      return cart.filter((item) => item.id !== action.id);
    case "UPDATE_QUANTITY":
      return cart.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: action.quantity,
          };
        }
        return item;
      });
    default:
      throw new Error("Invalid action");
  }
}

export default function useCart() {
  const sampleCart = [
    {
      name: "Bathing Soap - Geisha Charcoal",
      price: 5500,
      quantity: 2,
      id: 1,
    },
    {
      name: "Washing Soap - Mukwano",
      price: 4500,
      quantity: 10,
      id: 2,
    },
    {
      name: "Samsung Galaxy A30",
      price: 455000,
      quantity: 8,
      id: 3,
    },
    {
      name: "Khaki Jeans - Black",
      price: 22000,
      quantity: 1,
      id: 4,
    },
  ];
  const [cart, dispatch] = useReducer(cartReducer, sampleCart);
  return [cart, dispatch];
}
