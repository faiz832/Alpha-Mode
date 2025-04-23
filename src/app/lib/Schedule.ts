type ScheduleItem = {
  start: string;
  end: string;
  activity: string;
};

type DaySchedule = {
  [key: string]: ScheduleItem[];
};

// Contoh untuk Senin
export const weeklySchedule: DaySchedule = {
  Monday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    // dst...
  ],
  // Tuesday: [...], dll.
};

function getCurrentActivity(now: Date): { activity: string; nextAt: string } {
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const schedule = weeklySchedule[day] || [];

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  for (let i = 0; i < schedule.length; i++) {
    const [startH, startM] = schedule[i].start.split(":").map(Number);
    const [endH, endM] = schedule[i].end.split(":").map(Number);

    const startMin = startH * 60 + startM;
    const endMin = endH * 60 + endM;

    if (currentMinutes >= startMin && currentMinutes < endMin) {
      const nextAt = schedule[i + 1]?.start || "";
      return { activity: schedule[i].activity, nextAt };
    }
  }

  return { activity: "Waktu Bebas / Istirahat", nextAt: schedule[0]?.start || "" };
}

export { getCurrentActivity };
