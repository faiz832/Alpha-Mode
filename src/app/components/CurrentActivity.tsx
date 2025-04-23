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
      setStartTime(start);
      setEndTime(end);
    };

    update();
    const interval = setInterval(update, 30 * 1000); // update tiap 30 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center mt-6 text-center">
      {startTime && endTime && (
        <div className="absolute">
          <CircularCountdown startTime={parseTime(startTime)} endTime={parseTime(endTime)} />
        </div>
      )}
      <h2 className="text-2xl font-bold mb-2 relative z-10">Sekarang</h2>
      <div className="text-4xl font-extrabold relative z-10">{activity}</div>
      <p className="text-sm text-muted-foreground mt-2 relative z-10">
        Kegiatan berikutnya: <span className="font-semibold">{nextTime}</span>
      </p>
    </div>
  );
}
