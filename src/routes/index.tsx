import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thiago Saraiva | Gestão de Tráfego Pago para Empresas" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/landing.html"
      title="Thiago Saraiva"
      style={{ border: 0, width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
