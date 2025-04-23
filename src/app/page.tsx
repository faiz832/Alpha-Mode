"use client";

import CurrentActivity from "./components/CurrentActivity";
import CurrentTime from "./components/CurrentTime";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <SplashCursor />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#444"
        />
      </div>
      <CurrentTime />
      <CurrentActivity />
    </main>
  );
}
