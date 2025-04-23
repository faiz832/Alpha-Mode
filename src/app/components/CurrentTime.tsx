"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update(); // Set initial time
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!now) return null; // Avoid hydration mismatch

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="relative font-[doto] text-center mb-6 z-10">
      <div className="text-xl font-bold">
        {day}, {date}
      </div>
      <div className="text-3xl tracking-widest font-mono">{time}</div>
    </div>
  );
}
