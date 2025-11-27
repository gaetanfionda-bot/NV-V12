"use client";

import { getCart, removeFromCart, clearCart } from "@/lib/cart";

export default function CartPage() {
  const cart = getCart();

  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Panier</h1>

      {cart.length === 0 && <p>Votre panier est vide.</p>}

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="border border-white/10 bg-neutral-900 p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p className="text-neutral-400">
                {item.price}€ × {item.quantity}
              </p>
            </div>

            <button
              className="text-red-400"
              onClick={() => {
                removeFromCart(item.id);
                location.reload();
              }}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-10">
          <p className="text-xl mb-4">Total : {total} €</p>
          <button
            className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-300 transition"
            onClick={() => {
              clearCart();
              alert("Commande confirmée !");
              location.reload();
            }}
          >
            Commander
          </button>
        </div>
      )}
    </div>
  );
}
