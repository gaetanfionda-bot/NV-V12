// Base locale temporaire (memory based)

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

export function getAdminProducts() {
  return adminProducts;
}

export function getAdminProduct(id) {
  return adminProducts.find((p) => p.id === id);
}

export function addAdminProduct(product) {
  adminProducts.push(product);
}

export function updateAdminProduct(id, data) {
  adminProducts = adminProducts.map((p) =>
    p.id === id ? { ...p, ...data } : p
  );
}

export function deleteAdminProduct(id) {
  adminProducts = adminProducts.filter((p) => p.id !== id);
}
