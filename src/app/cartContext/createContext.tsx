"use client";
import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem, quantity: number) => void;
  removeFromCart: (productId: number) => void;
};

const cartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setcart] = useState<CartItem[]>(() => {
  if (typeof window !== "undefined") {
    const savedData = localStorage.getItem("cart");
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (e) {
        console.error("Failed to parse cart data:", e);
        return []; 
      }
    }
  }
  return [];
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartItem, quantity: number) => {
   
    setcart((cartitem) => {
      const itemExist = cartitem.find((item) => item.id === product.id);
      console.log(itemExist);
      if (itemExist) {
        return cartitem.map((item) => {
          if (item.id === product.id) {
            console.log("id", item.id, product.id);
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        });
      }

      return [...cartitem, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setcart((cartItem) => {
      return cartItem.filter((item) => item.id !== productId);
    });
  };
  return (
    <>
      <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </cartContext.Provider>
    </>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export default CartProvider;
