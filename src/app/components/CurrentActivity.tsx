"use client";

import { useEffect, useState } from "react";
import { getCurrentActivity, parseTime } from "../lib/schedule";
import CircularCountdown from "./CircularCountdown";

export default function CurrentActivity() {
  const [activity, setActivity] = useState("");
  const [nextTime, setNextTime] = useState("");
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const { activity, nextAt, start, end } = getCurrentActivity(now);
      setActivity(activity);
      setNextTime(nextAt);
      setStartTime(parseTime(start));
      setEndTime(parseTime(end));
    };

    update();
    const interval = setInterval(update, 30 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center mt-6 text-center">
      {startTime && endTime && (
        <div className="absolute -top-60">
          <CircularCountdown startTime={startTime} endTime={endTime} size={550} />
        </div>
      )}
      <h2 className="font-[doto] text-xl font-bold mb-2 relative z-10">Now Running</h2>
      <div className="max-w-sm text-center font-jersey-10 text-6xl tracking-tight leading-12 relative z-10">{activity}</div>
      <p className="font-[doto] text-sm text-muted-foreground mt-4 relative z-10">
        Next activity in <span className="font-semibold">{nextTime}</span>
      </p>
    </div>
  );
}
