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
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
  ],
  Tuesday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
  ],
  Wednesday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
  ],
  Thursday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
  ],
  Friday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
  ],
  Saturday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
  ],
  Sunday: [
    { start: "03:00", end: "03:30", activity: "Sholat Tahajud + Witir" },
    { start: "04:00", end: "04:30", activity: "Sholat Subuh" },
    { start: "04:30", end: "05:00", activity: "Membaca Al-Qur'an" },
    { start: "05:00", end: "06:00", activity: "Belajar Bahasa Inggris" },
    { start: "06:00", end: "07:00", activity: "Jogging / Sepedaan" },
    { start: "07:00", end: "08:00", activity: "Sarapan & Persiapan" },
    { start: "08:00", end: "09:00", activity: "Belajar Bahasa Inggris" },
    { start: "09:00", end: "10:00", activity: "Belajar Bahasa Inggris" },
    { start: "10:00", end: "10:30", activity: "Sholat Dhuha" },
    { start: "10:30", end: "11:30", activity: "Belajar Bahasa Inggris" },
    { start: "11:30", end: "12:00", activity: "Istirahat" },
    { start: "12:00", end: "12:30", activity: "Sholat Dzuhur" },
    { start: "12:30", end: "14:00", activity: "Tidur Siang / Istirahat" },
    { start: "14:00", end: "15:30", activity: "Belajar Bahasa Inggris" },
    { start: "15:30", end: "16:00", activity: "Sholat Ashar" },
    { start: "16:00", end: "16:30", activity: "Menyapu Halaman" },
    { start: "16:30", end: "17:30", activity: "Workout / Angkat Beban" },
    { start: "17:30", end: "18:00", activity: "Sholat Maghrib" },
    { start: "18:00", end: "19:00", activity: "Makan Malam & Santai" },
    { start: "19:00", end: "19:30", activity: "Sholat Isya" },
    { start: "19:30", end: "21:00", activity: "Belajar Pemrograman" },
    { start: "21:00", end: "22:30", activity: "Belajar Pemrograman" },
    { start: "22:30", end: "03:00", activity: "Tidur Malam" },
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
