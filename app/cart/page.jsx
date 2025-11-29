"use client";

import { getCart, removeFromCart } from "@/lib/cart";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Votre Panier</h1>

      {cart.length === 0 && <p>Votre panier est vide.</p>}

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg flex justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.price}€ — Quantité : {item.quantity}</p>
            </div>

            <button
              onClick={() => {
                removeFromCart(item.id);
                setCart(getCart());
              }}
              className="text-red-400"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-8">
          <p className="text-xl font-bold mb-4">
            Total : {total.toFixed(2)}€
          </p>

          <Link
            href="/checkout"
            className="px-6 py-3 bg-white text-black rounded-lg inline-block"
          >
            Procéder au paiement
          </Link>
        </div>
      )}
    </div>
  );
}
