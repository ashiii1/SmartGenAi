
// //  "use client";
// // import Head from "next/head";
// // import { FlipWords } from "@/components/ui/flip-words";
// // import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
// // import { cn } from "@/utils/cn";
// // import { ModeToggle } from "@/components/ui/mode-toggle";
// // import { Button } from "@/components/ui/moving-border";
// // import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// // import { HeroParallax } from "@/components/ui/hero-parallax";
// // import { BackgroundGradient } from "@/components/ui/background-gradient";
// // import Footer from "./dashboard/_components/Footer";

// // // Product Items
// // const Items = [
// //   { title: "Blog Content", link: "./dashboard", thumbnail: "ss1.png" },
// //   { title: "Blog Title", link: "./dashboard", thumbnail: "ss2.png" },
// //   { title: "Blog Topic", link: "./dashboard", thumbnail: "ss3.png" },
// //   { title: "Rewrite Article", link: "./dashboard", thumbnail: "ss4.png" },
// //   { title: "Text Improver", link: "./dashboard", thumbnail: "ss5.png" },
// //   { title: "Youtube Description", link: "./dashboard", thumbnail: "ss6.png" },
// //   { title: "Youtube Tags", link: "./dashboard", thumbnail: "ss7.png" },
// //   { title: "Youtube SEO Title", link: "./dashboard", thumbnail: "ss8.png" },
// // ];

// // // Slide Content
// // const slideMoveContent = [
// //   {
// //     quote:
// //       "It was the best of times, it was the worst of times...",
// //     name: "Charles Dickens",
// //     title: "A Tale of Two Cities",
// //   },
// //   {
// //     quote: "To be, or not to be, that is the question...",
// //     name: "William Shakespeare",
// //     title: "Hamlet",
// //   },
// //   {
// //     quote: "All that we see or seem is but a dream within a dream.",
// //     name: "Edgar Allan Poe",
// //     title: "A Dream Within a Dream",
// //   },
// // ];
// // function Navbar({ className }: { className?: string }) {
// //   return (
// //     <div  className={cn("sticky top-0 left-0 z-50 px-4 sm:px-6 lg:px-8 shadow-md bg-white dark:bg-slate-900", className)}>
// //       <div className="flex justify-between py-4 items-center">
// //         <Button className="text-2xl font-bold bg-white dark:bg-slate-900 text-black dark:text-white border-none">
// //           GenAI
// //         </Button>
// //         <nav className="flex space-x-6">
// //           <a href="/https://startup-saas-documentation.vercel.app/" className="text-lg font-bold dark:text-white hover:underline">Docs</a>
// //           <a href="#pricing" className="text-lg font-bold dark:text-white hover:underline">Price</a>
// //           <a href="#features" className="text-lg font-bold dark:text-white hover:underline">Features</a>
// //           <a href="#about" className="text-lg font-bold dark:text-white hover:underline">About Us</a>
// //           <a href="#feedback" className="text-lg font-bold dark:text-white hover:underline">Feedback</a>

// //           <a href="#get-started" className="text-lg font-bold dark:text-white hover:underline">Get Started</a>
// //         </nav>
// //       </div>
// //     </div>
// //   );
// // }


// // export default function Home() {
// //   return (
// //     <div className="min-h-screen dark bg-gray-950 overflow-x-hidden">
// //       <Head>
// //         <title>GenAI - AI SaaS Platform</title>
// //         <meta name="description" content="GenAI - Your AI SaaS Platform" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       {/* Section 1: Navbar and Hero */}
// //       <section id="#" className="h-screen flex flex-col justify-center items-center relative">
// //         <Navbar />
// //         <HeroParallax products={Items} />
// //         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
// //       </section>

// //       {/* Section 2: Infinite Moving Cards */}
// //       <section id="feedback" className="h-screen flex flex-col justify-center items-center">
// //         <div className="bg-grid-gray-500/[0.1] dark:bg-grid-gray-500/[0.1]">
// //           <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
// //             <InfiniteMovingCards items={slideMoveContent} direction="right" speed="slow" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Section 3: Pricing */}
// //       <section id="pricing" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
// //         <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">Subscribe to Explore More</h1>
// //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-bold mb-2">Free</h2>
// //             <p className="text-2xl font-bold mb-1">0$</p>
// //             <span className="text-gray-500 mb-4">/month</span>
// //             <div className="flex flex-col items-center">
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>10,000 words/month
// //               </h3>
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>50+ Content Templates
// //               </h3>
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// //               </h3>
// //               <h3 className="mb-6 flex items-center">
// //                 <span className="mr-2">✔️</span>1 month of History
// //               </h3>
// //             </div>
// //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// //               <span>Currently Active Plan</span>
// //             </button>
// //           </BackgroundGradient>

// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-bold mb-2">Monthly</h2>
// //             <p className="text-2xl font-bold mb-1">9.99$</p>
// //             <span className="text-gray-500 mb-4">/month</span>
// //             <div className="flex flex-col items-center">
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>100,000 words/month
// //               </h3>
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>50+ Content Templates
// //               </h3>
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// //               </h3>
// //               <h3 className="mb-6 flex items-center">
// //                 <span className="mr-2">✔️</span>2 months of History
// //               </h3>
// //             </div>
// //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// //               <span>Get Started</span>
// //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">$9.99</span>
// //             </button>
// //           </BackgroundGradient>

// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-bold mb-2">Yearly</h2>
// //             <p className="text-2xl font-bold mb-1">99.99$</p>
// //             <span className="text-gray-500 mb-4">/year</span>
// //             <div className="flex flex-col items-center">
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>100,000,000 words/month
// //               </h3>
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>50+ Content Templates
// //               </h3>
// //               <h3 className="mb-2 flex items-center">
// //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// //               </h3>
// //               <h3 className="mb-6 flex items-center">
// //                 <span className="mr-2">✔️</span>1 year of History
// //               </h3>
// //             </div>
// //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// //               <span>Get Started</span>
// //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">$99.99</span>
// //             </button>
// //           </BackgroundGradient>
// //         </div>
// //       </section>

// //       {/* Section 4: Footer */}
// //       <section id="about" className="">
// //         <Footer />
// //       </section>
// //     </div>
// //   );
// // }
// "use client";
// import Head from "next/head";
// import { FlipWords } from "@/components/ui/flip-words";
// import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
// import { cn } from "@/utils/cn";
// import { ModeToggle } from "@/components/ui/mode-toggle";
// import { Button } from "@/components/ui/moving-border";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { HeroParallax } from "@/components/ui/hero-parallax";
// import { BackgroundGradient } from "@/components/ui/background-gradient";
// import Footer from "./dashboard/_components/Footer";

// // Product Items
// const Items = [
//   { title: "Blog Content", link: "./dashboard", thumbnail: "ss1.png" },
//   { title: "Blog Title", link: "./dashboard", thumbnail: "ss2.png" },
//   { title: "Blog Topic", link: "./dashboard", thumbnail: "ss3.png" },
//   { title: "Rewrite Article", link: "./dashboard", thumbnail: "ss4.png" },
//   { title: "Text Improver", link: "./dashboard", thumbnail: "ss5.png" },
//   { title: "Youtube Description", link: "./dashboard", thumbnail: "ss6.png" },
//   { title: "Youtube Tags", link: "./dashboard", thumbnail: "ss7.png" },
//   { title: "Youtube SEO Title", link: "./dashboard", thumbnail: "ss8.png" },
// ];

// // Slide Content
// const slideMoveContent = [
//   {
//     quote: "It was the best of times, it was the worst of times...",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote: "To be, or not to be, that is the question...",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
// ];

// function Navbar({ className }: { className?: string }) {
//   return (
//     <div className={cn("fixed top-0 left-0 z-50 w-full px-4 sm:px-6 lg:px-8 shadow-md bg-white dark:bg-slate-900", className)}>
//       <div className="flex justify-between py-4 items-center">
//         <Button className="text-2xl font-bold bg-white dark:bg-slate-900 text-black dark:text-white border-none">
//           GenAI
//         </Button>
//         <nav className="flex space-x-6">
//           <a href="/https://startup-saas-documentation.vercel.app/" className="text-lg font-bold dark:text-white hover:underline">Docs</a>
//           <a href="#pricing" className="text-lg font-bold dark:text-white hover:underline">Price</a>
//           <a href="#features" className="text-lg font-bold dark:text-white hover:underline">Features</a>
//           <a href="#about" className="text-lg font-bold dark:text-white hover:underline">About Us</a>
//           <a href="#feedback" className="text-lg font-bold dark:text-white hover:underline">Feedback</a>
//           <a href="#get-started" className="text-lg font-bold dark:text-white hover:underline">Get Started</a>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <div className="min-h-screen dark:bg-gray-950 overflow-x-hidden pt-[80px]">
//       <Head>
//         <title>GenAI - AI SaaS Platform</title>
//         <meta name="description" content="GenAI - Your AI SaaS Platform" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Section 1: Navbar and Hero */}
//       <section id="#" className="h-screen flex flex-col justify-center items-center relative">
//         <Navbar />
//         <HeroParallax products={Items} />
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       </section>

//       {/* Section 2: Infinite Moving Cards */}
//       <section id="feedback" className="h-screen flex flex-col justify-center items-center">
//         <div className="bg-grid-gray-500/[0.1] dark:bg-grid-gray-500/[0.1]">
//           <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
//             <InfiniteMovingCards items={slideMoveContent} direction="right" speed="slow" />
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Pricing */}
//       <section id="pricing" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
//         <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">Subscribe to Explore More</h1>
//         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
//           <BackgroundGradient className="rounded-[22px] max-w-md p-8 sm:p-12 bg-zinc-900">
//             <h2 className="text-2xl font-bold mb-2">Free</h2>
//             <p className="text-5xl font-bold mb-1">0$</p>
//             <span className="text-gray-500 mb-4 text-xl">/month</span>
//             <div className="flex flex-col items-start space-y-2">
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>10,000 words/month
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>50+ Content Templates
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>Unlimited Download and Copy
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>1 month of History
//               </h3>
//             </div>
//             <button className="w-full py-3 rounded-full bg-black text-white text-lg font-bold mt-4">
//               Currently Active Plan
//             </button>
//           </BackgroundGradient>

//           <BackgroundGradient className="rounded-[22px] max-w-md p-8 sm:p-12 bg-zinc-900">
//             <h2 className="text-2xl font-bold mb-2">Monthly</h2>
//             <p className="text-5xl font-bold mb-1">9.99$</p>
//             <span className="text-gray-500 mb-4 text-xl">/month</span>
//             <div className="flex flex-col items-start space-y-2">
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>100,000 words/month
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>50+ Content Templates
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>Unlimited Download and Copy
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>2 months of History
//               </h3>
//             </div>
//             <button className="w-full py-3 rounded-full bg-black text-white text-lg font-bold mt-4">
//               Get Started
//               <span className="bg-zinc-700 rounded-full text-lg px-4 py-1 text-white ml-2">$9.99</span>
//             </button>
//           </BackgroundGradient>

//           <BackgroundGradient className="rounded-[22px] max-w-md p-8 sm:p-12 bg-zinc-900">
//             <h2 className="text-2xl font-bold mb-2">Yearly</h2>
//             <p className="text-5xl font-bold mb-1">99.99$</p>
//             <span className="text-gray-500 mb-4 text-xl">/year</span>
//             <div className="flex flex-col items-start space-y-2">
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>1,000,000 words/month
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>50+ Content Templates
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>Unlimited Download and Copy
//               </h3>
//               <h3 className="flex items-center text-lg">
//                 <span className="mr-2 text-2xl">✔️</span>1 year of History
//               </h3>
//             </div>
//             <button className="w-full py-3 rounded-full bg-black text-white text-lg font-bold mt-4">
//               Get Started
//               <span className="bg-zinc-700 rounded-full text-lg px-4 py-1 text-white ml-2">$99.99</span>
//             </button>
//           </BackgroundGradient>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
"use client";
import Head from "next/head";
import { FlipWords } from "@/components/ui/flip-words";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/moving-border";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Footer from "./dashboard/_components/Footer";

// Product Items
const Items = [
  { title: "", link: "./dashboard", thumbnail: "ss1.png" },
  { title: "", link: "./dashboard", thumbnail: "ss2.png" },
  { title: "", link: "./dashboard", thumbnail: "ss3.png" },
  { title: "", link: "./dashboard", thumbnail: "ss4.png" },
  { title: "", link: "./dashboard", thumbnail: "ss5.png" },
  { title: "", link: "./dashboard", thumbnail: "ss6.png" },
  { title: "", link: "./dashboard", thumbnail: "ss7.png" },
  { title: "", link: "./dashboard", thumbnail: "ss8.png" },
];

// Slide Content
const slideMoveContent = [
  {
    quote: "It was the best of times, it was the worst of times...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be, that is the question...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
];

// Section Three Data
const sectionthreedata = [
  { title: "Blog Content", link: "./dashboard" },
  { title: "Blog Title", link: "./dashboard" },
  { title: "Blog Topic", link: "./dashboard" },
  { title: "Rewrite Article", link: "./dashboard" },
  { title: "Text Improver", link: "./dashboard" },
  { title: "Youtube Description", link: "./dashboard" },
  { title: "Youtube Tags", link: "./dashboard" },
  { title: "Youtube SEO Title", link: "./dashboard" },
];

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("fixed top-0 left-0 z-50 w-full px-4 sm:px-6 lg:px-8 shadow-md bg-black dark:bg-slate-900", className)}>
      <div className="flex justify-between py-1 items-center">
        <Button className="text-2xl font-bold bg-slate-800 dark:bg-slate-900 text-white dark:text-white border-none">
          GenAI
        </Button>
        <nav className="flex bg-black  space-x-6 p-8">
          <a href="/https://startup-saas-documentation.vercel.app/" className="pr-2 text-lg font-bold dark:text-white hover:underline">Docs</a>
          <a href="#pricing" className="pr-2 text-lg font-medium  dark:text-white hover:underline">Price</a>
          <a href="#features" className=" pr-2 text-lg font-medium  dark:text-white hover:underline">Features</a>
          <a href="#about" className="pr-2 text-lg font-medium  dark:text-white hover:underline">About Us</a>
          <a href="#feedback" className="pr-2 text-lg font-medium  dark:text-white hover:underline">Feedback</a>
          <a href="/dashboard" className="pr-2 text-lg font-medium bg-gray-800 rounded-lg dark:text-white hover:underline">Get Started</a>
        </nav>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-[80px]">
      <Head>
        <title>GenAI - AI SaaS Platform</title>
        <meta name="description" content="GenAI - Your AI SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Section 1: Navbar and Hero */}
<section id="#" className="h-screen flex flex-col justify-center items-center relative bg-slate-900 text-white">
  <Navbar className="text-white" />
  <HeroParallax products={Items} />
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none  bg-slate-900 opacity-70 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
</section>


   {/* Section 4: Features */}
<section id="features" className="bg-slate-800 py-12">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sectionthreedata.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className="bg-white rounded-lg p-6 shadow-lg flex items-center space-x-4 hover:bg-gray-100 transition duration-300"
        >
          <div className="text-3xl">
            {index === 0 && "📝"}
            {index === 1 && "🏷️"}
            {index === 2 && "🗂️"}
            {index === 3 && "🔄"}
            {index === 4 && "✍️"}
            {index === 5 && "📄"}
            {index === 6 && "🏷️"}
            {index === 7 && "📈"}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

{/* Section 3: Infinite Moving Cards */}
<section id="feedback" className="flex flex-col justify-center items-center py-6 bg-slate-900">
  <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden max-w-4xl w-full">
    <InfiniteMovingCards items={slideMoveContent} direction="right" speed="slow" />
  </div>
</section>


      {/* Section 4: Pricing */}
      <section id="pricing" className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">Subscribe to Explore More</h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
          <BackgroundGradient className="rounded-[22px] max-w-md p-8 sm:p-12 bg-zinc-900">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-5xl font-bold mb-1">0$</p>
            <span className="text-gray-500 mb-4 text-xl">/month</span>
            <div className="flex flex-col items-start space-y-2">
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>10,000 words/month
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>50+ Content Templates
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>Unlimited Download and Copy
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>1 month of History
              </h3>
            </div>
            <button className="w-full py-3 rounded-full bg-black text-white text-lg font-bold mt-4">
              Currently Active Plan
            </button>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] max-w-md p-8 sm:p-12 bg-zinc-900">
            <h2 className="text-2xl font-bold mb-2">Monthly</h2>
            <p className="text-5xl font-bold mb-1">9.99$</p>
            <span className="text-gray-500 mb-4 text-xl">/month</span>
            <div className="flex flex-col items-start space-y-2">
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>100,000 words/month
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>50+ Content Templates
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>Unlimited Download and Copy
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>1 month of History
              </h3>
            </div>
            <button className="w-full py-3 rounded-full bg-black text-white text-lg font-bold mt-4">
              Get Started
              <span className="bg-zinc-700 rounded-full text-lg px-4 py-1 text-white ml-2">$9.99</span>
            </button>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] max-w-md p-8 sm:p-12 bg-zinc-900">
            <h2 className="text-2xl font-bold mb-2">Yearly</h2>
            <p className="text-5xl font-bold mb-1">99.99$</p>
            <span className="text-gray-500 mb-4 text-xl">/year</span>
            <div className="flex flex-col items-start space-y-2">
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>1,000,000 words/month
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>50+ Content Templates
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>Unlimited Download and Copy
              </h3>
              <h3 className="flex items-center text-lg">
                <span className="mr-2 text-2xl">✔️</span>1 year of History
              </h3>
            </div>
            <button className="w-full py-3 rounded-full bg-black text-white text-lg font-bold mt-4">
              Get Started
              <span className="bg-zinc-700 rounded-full text-lg px-4 py-1 text-white ml-2">$99.99</span>
            </button>
          </BackgroundGradient>
        </div>
      </section>

      <Footer />
    </div>
  );
}
