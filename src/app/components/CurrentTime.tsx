"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="font-[Doto] text-center mb-6">
      <div className="text-xl font-bold">
        {day}, {date}
      </div>
      <div className="text-3xl tracking-widest font-mono">{time}</div>
    </div>
  );
}
