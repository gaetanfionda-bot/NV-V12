"use client";

import { getAdminOrders } from "@/lib/admin-db.js";

import { useState, useEffect } from "react";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(getAdminOrders()); // lecture locale
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Liste des commandes</h1>

      {orders.length === 0 && (
        <p className="text-neutral-400">Aucune commande pour le moment.</p>
      )}

      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <a
            key={order.id}
            href={`/admin/orders/${order.id}`}
            className="border border-white/10 rounded p-4 hover:bg-neutral-900"
          >
            <p className="text-xl">
              <strong>{order.customer}</strong>
            </p>
            <p className="text-neutral-400">Total : {order.total}€</p>
            <p className="text-neutral-400">Status : {order.status}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
