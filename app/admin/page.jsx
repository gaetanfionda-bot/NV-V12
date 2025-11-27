export default function AdminDashboard() {
  return (
    <div className="px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Dashboard Admin</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <a
          href="/admin/products"
          className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:bg-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-2">Produits</h2>
          <p className="text-neutral-400">Ajouter, éditer, gérer le stock.</p>
        </a>

        <a
          href="/admin/orders"
          className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:bg-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-2">Commandes</h2>
          <p className="text-neutral-400">Consulter et traiter les commandes.</p>
        </a>

        <a
          href="/admin/customers"
          className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:bg-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-2">Clients</h2>
          <p className="text-neutral-400">Liste et informations clients.</p>
        </a>

        <a
          href="/admin/promos"
          className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:bg-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-2">Codes Promo</h2>
          <p className="text-neutral-400">Créer et gérer les réductions.</p>
        </a>

        <a
          href="/admin/roulette"
          className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:bg-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-2">Roulette NV</h2>
          <p className="text-neutral-400">Gestion des récompenses & probabilités.</p>
        </a>

        <a
          href="/admin/calendar"
          className="p-6 rounded-xl border border-white/10 bg-neutral-900 hover:bg-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-2">Calendrier</h2>
          <p className="text-neutral-400">Événements, réservations, plannings.</p>
        </a>

      </div>
    </div>
  );
}
