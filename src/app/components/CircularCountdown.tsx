"use client";

import { useEffect, useState } from "react";

interface Props {
  startTime: Date;
  endTime: Date;
}

export default function CircularCountdown({ startTime, endTime }: Props) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const start = startTime.getTime();
      const end = endTime.getTime();

      const total = end - start;
      const current = now - start;
      const ratio = Math.min(Math.max(current / total, 0), 1);

      setProgress(ratio);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime, endTime]);

  const offset = circumference * (1 - progress);

  return (
    <svg width="150" height="150" className="absolute">
      <circle
        cx="75"
        cy="75"
        r={radius}
        stroke="#e5e7eb" // gray-200
        strokeWidth="8"
        fill="none"
      />
      <circle
        cx="75"
        cy="75"
        r={radius}
        stroke="#facc15" // yellow-400
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 75 75)"
      />
    </svg>
  );
}
