import { BackgroundBeams } from "@/components/ui/background-beams";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased p-4">
      <div className="max-w-2xl w-full mx-auto text-center">
        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold mb-4">
          Welcome Back to VOOM
        </h1>
        <p className="text-neutral-500 text-sm md:text-lg mb-8">
          The Ultimate Ai Studio
        </p>
      </div>
      <BackgroundBeams />
      <div className="relative top-16 w-full max-w-md mx-auto">
        <SignIn />
      </div>
    </div>
  );
}
