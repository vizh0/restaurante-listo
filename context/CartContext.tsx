"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export interface ItemCarrito {
  id: string;
  nombre: string;
  precio: number;
  categoria: string;
  cantidad: number;
}

interface CartContextType {
  carrito: ItemCarrito[];
  agregarAlCarrito: (producto: { id: string; nombre: string; precio: number; categoria: string }) => void;
  eliminarDelCarrito: (id: string) => void;
  vaciarCarrito: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const guardado = localStorage.getItem("carrito_listo");
    if (guardado) {
      try {
        setCarrito(JSON.parse(guardado));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Guardar en localStorage ante cada cambio
  useEffect(() => {
    localStorage.setItem("carrito_listo", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto: { id: string; nombre: string; precio: number; categoria: string }) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const eliminarDelCarrito = (id: string) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}