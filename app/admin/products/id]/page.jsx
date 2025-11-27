"use client";

import { useState } from "react";
import { getAdminProduct, updateAdminProduct } from "@/lib/admin-db";
import { useRouter } from "next/navigation";

export default function EditProduct({ params }) {
  const product = getAdminProduct(params.id);
  const router = useRouter();

  const [form, setForm] = useState(product);

  function updateField(field, value) {
    setForm({ ...form, [field]: value });
  }

  function handleSave() {
    updateAdminProduct(product.id, {
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      image: form.image,
      description: form.description
    });

    router.push("/admin/products");
  }

  if (!product)
    return <div className="p-10">Produit introuvable.</div>;

  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Modifier : {product.name}</h1>

      <div className="space-y-4">
        <input
          type="text"
          value={form.name}
          className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
          onChange={(e) => updateField("name", e.target.value)}
        />
        <input
          type="number"
          value={form.price}
          className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
          onChange={(e) => updateField("price", e.target.value)}
        />
        <input
          type="number"
          value={form.stock}
          className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
          onChange={(e) => updateField("stock", e.target.value)}
        />

        <input
          type="text"
          value={form.image}
          className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
          onChange={(e) => updateField("image", e.target.value)}
        />

        <textarea
          value={form.description}
          className="w-full p-3 bg-neutral-800 border border-white/10 rounded"
          onChange={(e) => updateField("description", e.target.value)}
        />

        <button
          className="w-full py-3 bg-white text-black rounded"
          onClick={handleSave}
        >
          Sauvegarder
        </button>
      </div>
    </div>
  );
}
