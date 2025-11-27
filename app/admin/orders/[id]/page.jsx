"use client";

import { getAdminOrder, updateAdminOrder } from "@/lib/admin-db";
import { useRouter } from "next/navigation";

export default function OrderPage({ params }) {
  const order = getAdminOrder(params.id);
  const router = useRouter();

  if (!order) return <div className="p-10">Commande introuvable.</div>;

  function updateStatus(newStatus) {
    updateAdminOrder(order.id, { status: newStatus });
    router.refresh();
  }

  return (
    <div className="px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Commande {order.id}</h1>

      <p className="text-neutral-400 mb-4">
        Date : {new Date(order.date).toLocaleString()}
      </p>

      <h2 className="text-xl font-semibold mb-3">Articles :</h2>
      <div className="space-y-4 mb-10">
        {order.items.map((item) => (
          <div key={item.id} className="border border-white/10 rounded-xl p-4 bg-neutral-900">
            <p className="text-lg">{item.name}</p>
            <p className="text-neutral-400">
              {item.price}€ × {item.quantity}
            </p>
          </div>
        ))}
      </div>

      <p className="text-xl mb-6">Total : {order.total}€</p>

      <h2 className="text-xl font-semibold mb-3">Statut :</h2>
      <p className="text-neutral-400 mb-4">{order.status}</p>

      <div className="flex gap-4">
        {["En attente", "Payée", "Envoyée", "Terminée"].map((s) => (
          <button
            key={s}
            onClick={() => updateStatus(s)}
            className={`px-4 py-2 rounded ${
              order.status === s ? "bg-white text-black" : "bg-neutral-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
