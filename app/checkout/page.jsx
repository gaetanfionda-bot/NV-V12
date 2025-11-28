"use client";

import { getCart, clearCart } from "@/lib/cart";
import { useState } from "react";

export default function CheckoutPage() {
  const cart = getCart();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  if (cart.length === 0)
    return (
      <div className="px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">Checkout</h1>
        <p>Votre panier est vide.</p>
      </div>
    );

  async function submitOrder() {
    const orderData = {
      items: cart,
      total,
      customer: name || "Invité",
      email,
      address,
    };

    await fetch("/api/orders/new", {
      method: "POST",
      body: JSON.stringify(orderData),
    });

    alert("Commande enregistrée !");
    clearCart();
    location.href = "/cart";
  }

  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Checkout</h1>

      <div className="space-y-6">
        <div>
          <label className="block mb-1">Nom complet</label>
          <input
            className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block mb-1">Adresse</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Adresse complète"
          />
        </div>

        <p className="text-xl font-semibold mt-4">Total : {total}€</p>

        <button
          className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-300 transition"
          onClick={submitOrder}
        >
          Confirmer la commande
        </button>
      </div>
    </div>
  );
}
