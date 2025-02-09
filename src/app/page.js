export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">
        Hello, I'm <span className="text-red-500">Vivan.</span>
      </h1>
      <p className="text-xl mb-6">I'm a full stack web developer.</p>
      <a
        href="#projects"
        className="mt-4 px-6 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
      >
        View my work <span className="ml-2">↓</span>
      </a>
    </main>
  );
}
