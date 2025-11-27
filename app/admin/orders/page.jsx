"use client";

import Link from "next/link";
import { getAdminOrders } from "@/lib/admin-db";

export default function AdminOrders() {
  const orders = getAdminOrders();

  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Commandes</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-white/10 bg-neutral-900 p-4 rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{order.id}</p>
              <p className="text-neutral-400">{order.items.length} article(s) — {order.total}€</p>
              <p className="text-sm text-neutral-500">{new Date(order.date).toLocaleString()}</p>
            </div>

            <Link
              href={`/admin/orders/${order.id}`}
              className="text-blue-400"
            >
              Voir
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
