"use client";

export default function AdminHome() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <div className="flex flex-col gap-4">
        <a
          href="/admin/orders"
          className="px-6 py-3 bg-white text-black rounded-lg inline-block"
        >
          📦 Voir les commandes
        </a>

        <a
          href="/admin/products"
          className="px-6 py-3 bg-white text-black rounded-lg inline-block"
        >
          🛒 Gérer les produits
        </a>

        <a
          href="/admin/stock"
          className="px-6 py-3 bg-white text-black rounded-lg inline-block"
        >
          📊 Gestion du stock
        </a>
      </div>
    </div>
  );
}
