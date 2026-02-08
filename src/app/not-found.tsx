import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      {/* Glow background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#3EE0CF]/10 via-transparent to-purple-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <h1 className="text-7xl md:text-9xl font-bold bg-linear-to-br from-[#3EE0CF] via-sky-500 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>

      <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-white">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-400">
        Looks like you followed a broken link or entered a URL that doesn’t
        exist. Let’s get you back home.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-md bg-[#3EE0CF] text-black font-medium shadow-lg hover:shadow-xl transition hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
