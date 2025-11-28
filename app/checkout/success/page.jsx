"use client";

export const dynamic = "force-dynamic"; // ⬅️ IMPORTANT POUR VERCEL

import { useSearchParams } from "next/navigation";

export default function CheckoutSuccessPage() {
  const params = useSearchParams();
  const orderId = params.get("orderId");

  return (
    <div className="p-10 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">🎉 Merci pour votre commande !</h1>

      <p className="text-xl text-neutral-300 mb-4">
        Votre commande a bien été enregistrée.
      </p>

      {orderId && (
        <p className="text-lg text-neutral-400 mb-6">
          Numéro de commande : <span className="font-semibold">{orderId}</span>
        </p>
      )}

      <a
        href="/shop"
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-300 transition"
      >
        Retourner à la boutique
      </a>
    </div>
  );
}
