// import { BackgroundBeams } from "@/components/ui/background-beams";
// import { SignIn } from "@clerk/nextjs";

// export default function Page() {
//   return (
//     <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased p-4">
//       <div className="max-w-2xl w-full mx-auto text-center">
//         <h1 className="relative  text-4xl md:text-7xl bg-clip-text text-transparent text-white font-sans font-bold mb-4">
//           Welcome to GenAI
//         </h1>
//         <p className="text-neutral-500 text-sm md:text-lg mb-8">
//       Sign in to get started
//         </p>
//       </div>
//       <BackgroundBeams />
//       <div className="relative top-16 w-full max-w-md mx-auto">
//         <SignIn />
//       </div>
//     </div>
//   );
// }
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="min-h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased p-4"
      style={{
        backgroundImage: 'url(https://i.pinimg.com/originals/63/7a/4d/637a4d42e1738853b2f96ffbbd60622a.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        <h1 className="relative text-4xl md:text-7xl bg-clip-text text-transparent text-white font-sans font-bold mb-4">
          Welcome to GenAI
        </h1>
        <p className="text-neutral-200 text-sm md:text-lg mb-8">
          Sign in to get started
        </p>
      </div>
      <BackgroundBeams />
      <div className="relative top-16 w-full max-w-md mx-auto">
        <SignIn />
      </div>
    </div>
  );
}
