export default function AdminPage() {
  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h1>Admin Panel</h1>
      <p>Accès libre — pas de mot de passe</p>

      <ul style={{ marginTop: "20px" }}>
        <li>
          <a href="/admin/products" style={{ color: "#0af" }}>
            Gérer les produits
          </a>
        </li>
        <li>
          <a href="/admin/orders" style={{ color: "#0af" }}>
            Voir les commandes
          </a>
        </li>
      </ul>
    </div>
  );
}
