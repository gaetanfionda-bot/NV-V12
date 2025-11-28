"use client";

import { getAdminProduct } from "@/lib/admin-db";
import { useRouter } from "next/navigation";

export default function DeleteProductPage({ params }) {
  const router = useRouter();
  const product = getAdminProduct(params.id);

  if (!product)
    return <div className="p-10">Produit introuvable.</div>;

  async function handleDelete() {
    await fetch(`/admin/products/delete/${product.id}`, {
      method: "DELETE"
    });

    router.push("/admin/products");
  }

  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Supprimer : {product.name}
      </h1>

      <p className="text-neutral-300 mb-6">
        Es-tu sûr de vouloir supprimer ce produit ?
        <br />
        <span className="text-red-400 font-semibold">
          Cette action est irréversible.
        </span>
      </p>

      <button
        className="w-full py-3 bg-red-600 text-white rounded mb-4"
        onClick={handleDelete}
      >
        Oui, supprimer
      </button>

      <button
        className="w-full py-3 bg-neutral-700 text-white rounded"
        onClick={() => router.push("/admin/products")}
      >
        Annuler
      </button>
    </div>
  );
}
