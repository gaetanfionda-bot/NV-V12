import { NextResponse } from "next/server";
import { createAdminOrder } from "@/lib/admin-db";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.items || !body.total)
      return NextResponse.json({ error: "Invalid order" }, { status: 400 });

    // Génère un ID unique pour la commande
    const orderId = "CMD-" + Date.now();

    createAdminOrder({
      id: orderId,
      items: body.items,
      total: body.total,
      customer: body.customer || "Invité",
      email: body.email || "",
      address: body.address || "",
      date: new Date().toISOString(),
      status: "En attente",
    });

    return NextResponse.json({
      success: true,
      id: orderId,
      total: body.total,
      email: body.email,
    });
  } catch (e) {
    console.error("Order API error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
