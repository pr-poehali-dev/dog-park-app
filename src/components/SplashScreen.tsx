import { useEffect, useState } from "react";

const steps = ["Определяем локацию...", "Загружаем площадки...", "Почти готово..."];

export default function SplashScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 100;
        return p + 2;
      });
    }, 30);

    const s1 = setTimeout(() => setStep(1), 700);
    const s2 = setTimeout(() => setStep(2), 1400);
    const s3 = setTimeout(() => setFadeOut(true), 2000);
    const s4 = setTimeout(() => onDone(), 2400);

    return () => {
      clearInterval(interval);
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(s4);
    };
  }, [onDone]);

  return (
    <div
      className="mobile-container flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(160deg, #fff7ed 0%, #ffedd5 40%, #fed7aa 100%)",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.4s ease",
        position: "fixed",
        inset: 0,
        zIndex: 100,
        maxWidth: 430,
        margin: "0 auto",
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 220, height: 220, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: 80, left: -40,
        width: 180, height: 180, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)",
      }} />

      {/* Logo */}
      <div style={{ position: "relative", marginBottom: 28 }}>
        <div style={{
          width: 100, height: 100, borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(249,115,22,0.35), 0 4px 20px rgba(0,0,0,0.08)",
          animation: "float 3s ease-in-out infinite",
        }}>
          <img
            src="https://cdn.poehali.dev/projects/9bbef214-6211-4ea8-b61b-81dc6f25c80f/files/4ea18f57-217b-4716-a6c1-906d5425dfef.jpg"
            alt="ПёсПарк"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Pulse ring */}
        <div style={{
          position: "absolute", inset: -8,
          borderRadius: 36,
          border: "2px solid rgba(249,115,22,0.2)",
          animation: "pulse-ring 2s ease-in-out infinite",
        }} />
      </div>

      {/* Title */}
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 900,
        fontSize: 36,
        background: "linear-gradient(135deg, #f97316, #f59e0b)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        letterSpacing: -1,
        marginBottom: 4,
      }}>
        ПёсПарк
      </h1>
      <p style={{
        fontFamily: "'Golos Text', sans-serif",
        fontSize: 13,
        color: "#a16207",
        fontWeight: 500,
        marginBottom: 48,
        letterSpacing: 0.5,
      }}>
        площадки для выгула рядом
      </p>

      {/* Progress */}
      <div style={{ width: 200, marginBottom: 14 }}>
        <div style={{
          height: 4, borderRadius: 99,
          background: "rgba(249,115,22,0.15)",
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            borderRadius: 99,
            background: "linear-gradient(90deg, #f97316, #f59e0b)",
            width: `${progress}%`,
            transition: "width 0.1s linear",
          }} />
        </div>
      </div>

      <p style={{
        fontFamily: "'Golos Text', sans-serif",
        fontSize: 12,
        color: "#c2410c",
        fontWeight: 500,
        minHeight: 18,
        transition: "opacity 0.3s",
      }}>
        {steps[step]}
      </p>

      {/* Paw prints decoration */}
      <div style={{
        position: "absolute", bottom: 48,
        display: "flex", gap: 10, opacity: 0.18,
      }}>
        {["🐾", "🐾", "🐾"].map((p, i) => (
          <span key={i} style={{
            fontSize: 18,
            transform: i % 2 === 0 ? "rotate(-15deg)" : "rotate(15deg)",
          }}>{p}</span>
        ))}
      </div>

      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.06); opacity: 1; }
        }
      `}</style>
    </div>
  );
}