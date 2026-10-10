"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="brutal p-8 max-w-md w-full text-center space-y-4">
        <h1 className="font-pixel text-4xl text-gdg-blue">Neo-Brutalism</h1>
        <p className="font-mono2 text-lg text-gdg-red">
          This is the hero paragraph in Space Mono.
        </p>
        <p className="font-body text-base">
          This is the body text in Space Grotesk. The card has thick borders, hard offset shadows, and moves on hover.
        </p>
      </div>
    </main>
  );
}
