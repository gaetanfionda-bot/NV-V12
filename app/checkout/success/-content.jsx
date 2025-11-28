"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const params = useSearchParams();
  const orderId = params.get("orderId");

  return (
    <div className="p-10 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Commande validée 🎉</h1>

      <p className="text-lg mb-4 text-neutral-300">
        Merci pour votre achat !
      </p>

      <p className="text-neutral-400">
        Numéro de commande : <strong>{orderId || "inconnu"}</strong>
      </p>

      <a
        href="/"
        className="mt-8 inline-block px-6 py-3 bg-white text-black rounded-lg"
      >
        Retour à l'accueil
      </a>
    </div>
  );
}
