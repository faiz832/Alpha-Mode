type ScheduleItem = {
  start: string;
  end: string;
  activity: string;
};

type DaySchedule = {
  [key: string]: ScheduleItem[];
};

export const weeklySchedule: DaySchedule = {
  Monday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
  Tuesday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
  Wednesday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
  Thursday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
  Friday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
  Saturday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
  Sunday: [
    { start: "03:00", end: "04:00", activity: "Salat Tahajjud & Witir" },
    { start: "04:00", end: "04:30", activity: "Salat Subuh & Baca Qur'an" },
    { start: "04:30", end: "06:00", activity: "Jogging / Sepedaan Pagi" },
    { start: "06:00", end: "07:00", activity: "Mandi & Sarapan" },
    { start: "07:00", end: "09:00", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "09:00", end: "11:30", activity: "Istirahat / Aktivitas Ringan" },
    { start: "11:30", end: "12:00", activity: "Salat Dhuhur" },
    { start: "12:00", end: "13:00", activity: "Makan Siang & Istirahat" },
    { start: "13:00", end: "14:30", activity: "Belajar Bahasa Inggris (TOEFL)" },
    { start: "14:30", end: "14:50", activity: "Istirahat" },
    { start: "14:50", end: "15:30", activity: "Salat Ashar" },
    { start: "15:30", end: "17:00", activity: "Workout / Olahraga Ringan" },
    { start: "17:00", end: "17:30", activity: "Istirahat" },
    { start: "17:30", end: "18:00", activity: "Salat Maghrib" },
    { start: "18:00", end: "18:40", activity: "Makan Malam & Istirahat" },
    { start: "18:40", end: "19:00", activity: "Salat Isya" },
    { start: "19:00", end: "22:00", activity: "Belajar Pemrograman (Frontend)" },
    { start: "22:00", end: "03:00", activity: "Tidur Malam" },
  ],
};

export function getCurrentActivity(now: Date): {
  activity: string;
  nextAt: string;
  start: string;
  end: string;
} {
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
      return {
        activity: schedule[i].activity,
        nextAt,
        start: schedule[i].start,
        end: schedule[i].end,
      };
    }
  }

  return {
    activity: "Waktu Bebas / Istirahat",
    nextAt: schedule[0]?.start || "",
    start: "",
    end: "",
  };
}

export function parseTime(time: string, baseDate = new Date()): Date {
  const [hours, minutes] = time.split(":").map(Number);
  const parsed = new Date(baseDate);
  parsed.setHours(hours, minutes, 0, 0);
  return parsed;
}
