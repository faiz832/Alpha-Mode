"use client";

import { useEffect, useState } from "react";
import { getCurrentActivity } from "../lib/schedule";

export default function CurrentActivity() {
  const [activity, setActivity] = useState("");
  const [nextTime, setNextTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const { activity, nextAt } = getCurrentActivity(now);
      setActivity(activity);
      setNextTime(nextAt);
    };

    update();
    const interval = setInterval(update, 30 * 1000); // update tiap 30 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Sekarang</h2>
      <div className="text-4xl font-extrabold">{activity}</div>
      <p className="text-sm text-muted-foreground mt-2">
        Kegiatan berikutnya: <span className="font-semibold">{nextTime}</span>
      </p>
    </div>
  );
}
