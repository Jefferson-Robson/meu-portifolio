import { ImageResponse } from "next/og";

export const alt = "Robson Lopes — Tecnologia, Processos e Automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "linear-gradient(120deg, #0a223c 0%, #0c3766 54%, #176cd7 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, fontWeight: 800, letterSpacing: "-1px" }}>
          RL<span style={{ color: "#7fb2ff" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "920px" }}>
          <div style={{ color: "#a9cdfd", display: "flex", fontSize: 20, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase" }}>
            Tecnologia aplicada · processos · automação
          </div>
          <div style={{ display: "flex", fontFamily: "serif", fontSize: 76, letterSpacing: "-4px", lineHeight: 1.04, marginTop: "28px" }}>
            Soluções digitais que partem de problemas reais.
          </div>
        </div>
        <div style={{ color: "#d5e1ef", display: "flex", fontSize: 24 }}>
          robsonlopes.tec.br
        </div>
      </div>
    ),
    size,
  );
}
