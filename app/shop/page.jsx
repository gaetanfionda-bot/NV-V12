import Link from "next/link";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Boutique</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/shop/${p.slug}`}
            className="border border-white/10 rounded-xl p-4 bg-neutral-900 hover:bg-neutral-800 transition"
          >
            <img src={p.image} className="w-full h-56 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-neutral-400">{p.price}€</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
