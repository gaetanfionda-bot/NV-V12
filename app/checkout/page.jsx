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
"use client";

import { getCart, clearCart } from "@/lib/cart";
import { useState } from "react";

export default function CheckoutPage() {
  const cart = getCart();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (cart.length === 0)
    return (
      <div className="px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">Paiement</h1>
        <p>Votre panier est vide.</p>
      </div>
    );

  async function handleOrder() {
    const order = {
      items: cart,
      total,
      customer: name || "Invité",
      email,
    };

    await fetch("/api/orders/new", {
      method: "POST",
      body: JSON.stringify(order),
    });

    alert("Commande enregistrée !");
    clearCart();
    window.location.href = "/shop";
  }

  return (
    <div className="px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Paiement</h1>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Informations client</h2>

        <input
          type="text"
          placeholder="Votre nom (optionnel)"
          className="w-full p-3 rounded bg-neutral-800 mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Votre e-mail (pour confirmation)"
          className="w-full p-3 rounded bg-neutral-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Votre commande</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border border-white/10 bg-neutral-900 p-4 rounded-xl"
            >
              <p className="text-lg">{item.name}</p>
              <p className="text-neutral-400">
                {item.price}€ × {item.quantity}
              </p>
            </div>
          ))}
        </div>

        <p className="text-xl mt-6">Total : {total}€</p>
      </div>

      <button
        onClick={handleOrder}
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-300 transition w-full"
      >
        Confirmer la commande
      </button>
    </div>
  );
}
