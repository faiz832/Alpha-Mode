"use client";

import { useEffect, useState } from "react";

interface Props {
  startTime: Date;
  endTime: Date;
  size?: number; // default 150
}

export default function CircularCountdown({ startTime, endTime, size = 150 }: Props) {
  const radius = size / 2 - 8;
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
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#A6AAAD" strokeWidth="8" fill="none" />
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#57585A" strokeWidth="8" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" transform={`rotate(-90 ${size / 2} ${size / 2})`} />
    </svg>
  );
}
