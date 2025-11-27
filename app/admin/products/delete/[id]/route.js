import { deleteAdminProduct } from "@/lib/admin-db";
import { NextResponse } from "next/server";

export function GET(_, { params }) {
  deleteAdminProduct(params.id);
  return NextResponse.redirect("/admin/products");
}
