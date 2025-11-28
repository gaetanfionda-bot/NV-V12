"use client";

import { getAdminOrder } from "@/lib/admin-db.js";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function OrderDetailPage() {
  const { id } = useParams();
  const order = getAdminOrders().find((o) => o.id === id);
  const [status, setStatus] = useState(order?.status);

  if (!order) {
    return <div className="p-10">Commande introuvable.</div>;
  }

  function changeStatus(newStatus) {
    setStatus(newStatus);
    updateAdminOrderStatus(id, newStatus);
    alert("Statut mis à jour !");
  }

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Commande : {order.id}</h1>

      <p className="mb-2 text-neutral-300">Client : {order.customer}</p>
      <p className="mb-2 text-neutral-300">Total : {order.total}€</p>

      <h2 className="text-xl font-semibold mt-6 mb-3">Produits :</h2>
      <ul className="mb-6">
        {order.items.map((item) => (
          <li key={item.id} className="text-neutral-400">
            {item.name} × {item.quantity}
          </li>
        ))}
      </ul>

      {/* STATUS */}
      <h2 className="text-xl font-semibold mb-3">Statut :</h2>

      <div className="flex gap-3">
        {["En attente", "Validée", "Expédiée", "Terminée"].map((st) => (
          <button
            key={st}
            onClick={() => changeStatus(st)}
            className={`px-4 py-2 rounded ${
              status === st ? "bg-white text-black" : "bg-neutral-700"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      <a href="/admin/orders" className="block mt-8 text-neutral-400">
        ← Retour aux commandes
      </a>
    </div>
  );
}
