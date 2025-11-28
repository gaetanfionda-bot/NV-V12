// ------------------------------
// BASE LOCALE (IN-MEMORY DATABASE)
// ------------------------------

let adminProducts = [
  {
    id: "nv-hoodie",
    name: "NV Hoodie",
    price: 79,
    stock: 12,
    description: "Hoodie officiel NIGHT VISION — édition V12.",
    image: "https://images.unsplash.com/photo-1609851949984-f5c88c971e0e"
  },
  {
    id: "nv-cap",
    name: "NV Cap",
    price: 39,
    stock: 20,
    description: "Casquette NIGHT VISION — version limited.",
    image: "https://images.unsplash.com/photo-1528701800489-20be3c2a94e8"
  }
];

let adminOrders = [
  {
    id: "order-1",
    items: [
      { id: "nv-hoodie", name: "NV Hoodie", price: 79, quantity: 1 }
    ],
    total: 79,
    customer: "Client Test",
    status: "En attente",
    date: new Date().toISOString()
  }
];

// ------------------------------
// PRODUITS
// ------------------------------

export function getAdminProducts() {
  return [...adminProducts]; // copie sécurisée
}

export function getAdminProduct(id) {
  return adminProducts.find((p) => p.id === id) || null;
}

export function addAdminProduct(product) {
  if (!product || !product.id) return false;

  const already = adminProducts.find((p) => p.id === product.id);
  if (already) return false; // empêche doublon

  adminProducts.push(product);
  return true;
}

export function updateAdminProduct(id, data) {
  adminProducts = adminProducts.map((p) =>
    p.id === id ? { ...p, ...data } : p
  );
  return true;
}

export function deleteAdminProduct(id) {
  const before = adminProducts.length;
  adminProducts = adminProducts.filter((p) => p.id !== id);
  return adminProducts.length !== before;
}

// ------------------------------
// COMMANDES
// ------------------------------

export function getAdminOrders() {
  return [...adminOrders]; // copie sécurisée
}

export function getAdminOrder(id) {
  return adminOrders.find((o) => o.id === id) || null;
}

export function addAdminOrder(order) {
  if (!order || !order.id) return false;

  const exists = adminOrders.find((o) => o.id === order.id);
  if (exists) return false;

  adminOrders.push(order);
  return true;
}

export function updateAdminOrder(id, data) {
  adminOrders = adminOrders.map((o) =>
    o.id === id ? { ...o, ...data } : o
  );
  return true;
}
