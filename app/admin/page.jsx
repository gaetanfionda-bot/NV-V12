export default function AdminPage() {
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Dashboard Admin</h1>
      <p>Accès temporaire sans mot de passe.</p>

      <ul style={{ marginTop: "20px" }}>
        <li><a href="/admin/orders" style={{ color: "lightgreen" }}>Commandes</a></li>
        <li><a href="/admin/products" style={{ color: "lightgreen" }}>Produits</a></li>
      </ul>
    </div>
  );
}
