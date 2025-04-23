import CurrentActivity from "./components/CurrentActivity";
import CurrentTime from "./components/CurrentTime";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <CurrentTime />
      <CurrentActivity />
      {/* Tombol Modal + Tema nanti di sini */}
    </main>
  );
}
