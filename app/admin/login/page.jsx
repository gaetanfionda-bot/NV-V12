// app/admin/login/page.jsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLoginPage() {
  const router = useRouter();

  // AUTO-REDIRECT → /admin
  useEffect(() => {
    router.push("/admin");
  }, [router]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
      }}
    >
      Accès admin… Redirection…
    </div>
  );
}
