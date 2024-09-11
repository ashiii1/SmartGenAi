// // "use client";
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

// // const Items = [
// //   {
// //     title: "Blog Content",
// //     link: "./dashboard",
// //     thumbnail: "ss1.png",
// //   },
// //   {
// //     title: "Blog Title",
// //     link: "./dashboard",
// //     thumbnail: "ss2.png",
// //   },
// //   {
// //     title: "Blog Topic",
// //     link: "./dashboard",
// //     thumbnail: "ss3.png",
// //   },

// //   {
// //     title: "Rewrite Article",
// //     link: "./dashboard",
// //     thumbnail: "ss4.png",
// //   },
// //   {
// //     title: "Text Improver",
// //     link: "./dashboard",
// //     thumbnail: "ss5.png",
// //   },
// //   {
// //     title: "Youtube Description",
// //     link: "./dashboard",
// //     thumbnail: "ss6.png",
// //   },

// //   {
// //     title: "Youtube Tags",
// //     link: "./dashboard",
// //     thumbnail: "ss7.png",
// //   },
// //   {
// //     title: "Youtube SEO Title",
// //     link: "./dashboard",
// //     thumbnail: "ss8.png",
// //   },
// //   {
// //     title: "Youtube SEO Title",
// //     link: "./dashboard",
// //     thumbnail: "ss8.png",
// //   },
// //   {
// //     title: "Blog Content",
// //     link: "./dashboard",
// //     thumbnail: "ss1.png",
// //   },
// //   {
// //     title: "Blog Title",
// //     link: "./dashboard",
// //     thumbnail: "ss2.png",
// //   },

// //   {
// //     title: "Blog Topic",
// //     link: "./dashboard",
// //     thumbnail: "ss3.png",
// //   },
// //   {
// //     title: "Rewrite Article",
// //     link: "./dashboard",
// //     thumbnail: "ss4.png",
// //   },
// //   {
// //     title: "Text Improver",
// //     link: "./dashboard",
// //     thumbnail: "ss5.png",
// //   },
// //   {
// //     title: "Youtube Description",
// //     link: "./dashboard",
// //     thumbnail: "ss6.png",
// //   },
// // ];

// // const slideMoveContent = [
// //   {
// //     quote:
// //       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
// //     name: "Charles Dickens",
// //     title: "A Tale of Two Cities",
// //   },
// //   {
// //     quote:
// //       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
// //     name: "William Shakespeare",
// //     title: "Hamlet",
// //   },
// //   {
// //     quote: "All that we see or seem is but a dream within a dream.",
// //     name: "Edgar Allan Poe",
// //     title: "A Dream Within a Dream",
// //   },
// //   {
// //     quote:
// //       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
// //     name: "Jane Austen",
// //     title: "Pride and Prejudice",
// //   },
// //   {
// //     quote:
// //       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
// //     name: "Herman Melville",
// //     title: "Moby-Dick",
// //   },
// // ];

// // function Navbar({ className }: { className?: string }) {
// //   return (
// //     <div
// //       className={cn(
// //         "relative top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 shadow-md",
// //         className
// //       )}
// //     >
// //       <div className="flex justify-between items-center py-4">
// //         <Button
// //           borderRadius="1.75rem"
// //           className="bg-white dark:bg-slate-900 text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800"
// //         >
// // GenAI
// //         </Button>
// //         <div className="flex-1 flex justify-center"></div>
// //         {/* <ModeToggle /> */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen dark bg-gray-950 overflow-x-hidden">
// //       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
// //       <Head>
// //         <title>GenAI - AI SaaS Platform</title>
// //         <meta name="description" content="GenAI - Your AI SaaS Platform" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>
// //       <Navbar />
// //       <HeroParallax products={Items} />
// //       <div className="bg-grid-gray-500/[0.1]  dark:bg-grid-gray-500/[0.1]  ">
// //         <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
// //           <InfiniteMovingCards
// //             items={slideMoveContent}
// //             direction="right"
// //             speed="slow"
// //           />
// //         </div>

// //         <div className="flex items-center justify-center text-center mt-16">
// //           <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">
// //             Subscribe to Explore More
// //           </h1>
// //         </div>
// //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-semibold mb-2">Free</h2>
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
// //             <h2 className="text-xl font-semibold mb-2">Monthly</h2>
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
// //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
// //                 $9.99
// //               </span>
// //             </button>
// //           </BackgroundGradient>
// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-semibold mb-2">Yearly</h2>
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
// //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
// //                 $99.99
// //               </span>
// //             </button>
// //           </BackgroundGradient>
// //         </div>
// //       </div>
// //       <div className="pt-20">
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }
// // // // // // "use client";
// // // // // // import Head from "next/head";
// // // // // // import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// // // // // // import { BackgroundGradient } from "@/components/ui/background-gradient";
// // // // // // import Footer from "./dashboard/_components/Footer";

// // // // // // const Items = [
// // // // // //   { title: "Blog Content", link: "./dashboard" },
// // // // // //   { title: "Blog Title", link: "./dashboard" },
// // // // // //   { title: "Blog Topic", link: "./dashboard" },
// // // // // //   { title: "Rewrite Article", link: "./dashboard" },
// // // // // //   { title: "Text Improver", link: "./dashboard" },
// // // // // //   { title: "Youtube Description", link: "./dashboard" },
// // // // // //   { title: "Youtube Tags", link: "./dashboard" },
// // // // // //   { title: "Youtube SEO Title", link: "./dashboard" },
// // // // // // ];

// // // // // // const slideMoveContent = [
// // // // // //   { quote: "It was the best of times...", name: "Charles Dickens", title: "A Tale of Two Cities" },
// // // // // //   { quote: "To be, or not to be...", name: "William Shakespeare", title: "Hamlet" },
// // // // // //   { quote: "All that we see or seem...", name: "Edgar Allan Poe", title: "A Dream Within a Dream" },
// // // // // //   { quote: "It is a truth universally acknowledged...", name: "Jane Austen", title: "Pride and Prejudice" },
// // // // // // ];

// // // // // // export default function Home() {
// // // // // //   return (
// // // // // //     <div className="min-h-screen overflow-x-hidden">
// // // // // //       <Head>
// // // // // //         <title>SmartGen AI - AI Content Platform</title>
// // // // // //         <meta name="description" content="SmartGen AI - Your AI Content Creation Platform" />
// // // // // //         <link rel="icon" href="/favicon.ico" />
// // // // // //       </Head>
      
// // // // // //       {/* First Screen */}
// // // // // //       <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-purple-700 text-center relative">
// // // // // //         <img
// // // // // //           src="https://i.pinimg.com/originals/05/8c/5b/058c5b6bed01709ac18be83a27d271ca.gif"
// // // // // //           alt="AI Gif"
// // // // // //           className="absolute right-0 bottom-0 w-1/4 hidden md:block"
// // // // // //         />
// // // // // //         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
// // // // // //           SmartGen AI for AI Content
// // // // // //         </h1>
// // // // // //         <p className="text-white text-lg md:text-2xl mb-8">
// // // // // //           Create AI-driven content effortlessly!
// // // // // //         </p>
// // // // // //         <button className="rounded-full px-8 py-4 bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition duration-300">
// // // // // //           Try it Now
// // // // // //         </button>
// // // // // //       </section>

// // // // // // {/* Features Section */}
// // // // // // <section className="relative min-h-screen bg-slate-800 flex flex-col items-center justify-center p-8">
// // // // // //   <img
// // // // // //     src="https://i.pinimg.com/originals/05/8c/5b/058c5b6bed01709ac18be83a27d271ca.gif"
// // // // // //     alt="AI Gif Background"
// // // // // //     className="absolute inset-0 h-full w-full object-cover"
// // // // // //   />
// // // // // //   <div className="relative z-10 text-center">
// // // // // //     <h2 className="text-4xl font-bold mb-6 text-white">Features</h2>
// // // // // //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // // // // //       {Items.map((item, index) => (
// // // // // //         <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-70">
// // // // // //           <h3 className="text-xl font-semibold">{item.title}</h3>
// // // // // //           <p className="mt-4">AI-powered {item.title} feature.</p>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   </div>
// // // // // // </section>


// // // // // //       {/* Pricing Section */}
// // // // // //       <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
// // // // // //         <h2 className="text-4xl font-bold mb-6">Pricing</h2>
// // // // // //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// // // // // //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// // // // // //             <h2 className="text-xl font-semibold mb-2">Free</h2>
// // // // // //             <p className="text-2xl font-bold mb-1">0$</p>
// // // // // //             <span className="text-gray-500 mb-4">/month</span>
// // // // // //             <div className="flex flex-col items-center">
// // // // // //               <h3 className="mb-2 flex items-center">✔️ 10,000 words/month</h3>
// // // // // //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// // // // // //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// // // // // //               <h3 className="mb-6 flex items-center">✔️ 1 month of History</h3>
// // // // // //             </div>
// // // // // //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // // // //               Currently Active Plan
// // // // // //             </button>
// // // // // //           </BackgroundGradient>

// // // // // //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// // // // // //             <h2 className="text-xl font-semibold mb-2">Monthly</h2>
// // // // // //             <p className="text-2xl font-bold mb-1">9.99$</p>
// // // // // //             <span className="text-gray-500 mb-4">/month</span>
// // // // // //             <div className="flex flex-col items-center">
// // // // // //               <h3 className="mb-2 flex items-center">✔️ 100,000 words/month</h3>
// // // // // //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// // // // // //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// // // // // //               <h3 className="mb-6 flex items-center">✔️ 2 months of History</h3>
// // // // // //             </div>
// // // // // //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // // // //               Get Started
// // // // // //             </button>
// // // // // //           </BackgroundGradient>

// // // // // //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// // // // // //             <h2 className="text-xl font-semibold mb-2">Yearly</h2>
// // // // // //             <p className="text-2xl font-bold mb-1">99.99$</p>
// // // // // //             <span className="text-gray-500 mb-4">/year</span>
// // // // // //             <div className="flex flex-col items-center">
// // // // // //               <h3 className="mb-2 flex items-center">✔️ 100,000,000 words/month</h3>
// // // // // //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// // // // // //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// // // // // //               <h3 className="mb-6 flex items-center">✔️ 1 year of History</h3>
// // // // // //             </div>
// // // // // //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // // // //               Get Started
// // // // // //             </button>
// // // // // //           </BackgroundGradient>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* Footer Section */}
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // "use client";
// // // // // import Head from "next/head";
// // // // // import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// // // // // import { BackgroundGradient } from "@/components/ui/background-gradient";
// // // // // import Navbar from "@/components/Navbar";  // Ensure correct import paths
// // // // // import { HeroParallax } from "@/components/ui/hero-parallax";
// // // // // import Footer from "./dashboard/_components/Footer";

// // // // // const Items = [
// // // // //   { title: "Blog Content", link: "./dashboard" },
// // // // //   { title: "Blog Title", link: "./dashboard" },
// // // // //   { title: "Blog Topic", link: "./dashboard" },
// // // // //   { title: "Rewrite Article", link: "./dashboard" },
// // // // //   { title: "Text Improver", link: "./dashboard" },
// // // // //   { title: "Youtube Description", link: "./dashboard" },
// // // // //   { title: "Youtube Tags", link: "./dashboard" },
// // // // //   { title: "Youtube SEO Title", link: "./dashboard" },
// // // // // ];

// // // // // const slideMoveContent = [
// // // // //   { quote: "It was the best of times...", name: "Charles Dickens", title: "A Tale of Two Cities" },
// // // // //   { quote: "To be, or not to be...", name: "William Shakespeare", title: "Hamlet" },
// // // // //   { quote: "All that we see or seem...", name: "Edgar Allan Poe", title: "A Dream Within a Dream" },
// // // // //   { quote: "It is a truth universally acknowledged...", name: "Jane Austen", title: "Pride and Prejudice" },
// // // // // ];

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <div className="min-h-screen overflow-x-hidden">
// // // // //       <Head>
// // // // //         <title>GenAI - AI SaaS Platform</title>
// // // // //         <meta name="description" content="GenAI - Your AI SaaS Platform" />
// // // // //         <link rel="icon" href="/favicon.ico" />
// // // // //       </Head>

// // // // //       {/* First Section with Navbar and HeroParallax */}
// // // // //       <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-purple-700 text-center relative">
// // // // //         <Navbar />
// // // // //          <HeroParallax products={Items} />
// // // // //         <img
// // // // //           src="https://i.pinimg.com/originals/05/8c/5b/058c5b6bed01709ac18be83a27d271ca.gif"
// // // // //           alt="AI Gif"
// // // // //           className="absolute right-0 bottom-0 w-1/4 hidden md:block"
// // // // //         />
// // // // //         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
// // // // //           SmartGen AI for AI Content
// // // // //         </h1>
// // // // //         <p className="text-white text-lg md:text-2xl mb-8">
// // // // //           Create AI-driven content effortlessly!
// // // // //         </p>
// // // // //         <button className="rounded-full px-8 py-4 bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition duration-300">
// // // // //           Try it Now
// // // // //         </button>
// // // // //       </section>

// // // // //       {/* Infinite Moving Cards Section */}
// // // // //       <div className="bg-grid-gray-500/[0.1] dark:bg-grid-gray-500/[0.1]">
// // // // //         <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
// // // // //           <InfiniteMovingCards
// // // // //             items={slideMoveContent}
// // // // //             direction="right"
// // // // //             speed="slow"
// // // // //           />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Features Section */}
// // // // //       <section className="relative min-h-screen bg-slate-800 flex flex-col items-center justify-center p-8">
// // // // //         <img
// // // // //           src="https://i.pinimg.com/originals/05/8c/5b/058c5b6bed01709ac18be83a27d271ca.gif"
// // // // //           alt="AI Gif Background"
// // // // //           className="absolute inset-0 h-full w-full object-cover opacity-30"
// // // // //         />
// // // // //         <div className="relative z-10 text-center">
// // // // //           <h2 className="text-4xl font-bold mb-6 text-white">Features</h2>
// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// // // // //             {Items.map((item, index) => (
// // // // //               <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-70">
// // // // //                 <h3 className="text-xl font-semibold">{item.title}</h3>
// // // // //                 <p className="mt-4">AI-powered {item.title} feature.</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Pricing Section */}
// // // // //       <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
// // // // //         <h2 className="text-4xl font-bold mb-6">Pricing</h2>
// // // // //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// // // // //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// // // // //             <h2 className="text-xl font-semibold mb-2">Free</h2>
// // // // //             <p className="text-2xl font-bold mb-1">0$</p>
// // // // //             <span className="text-gray-500 mb-4">/month</span>
// // // // //             <div className="flex flex-col items-center">
// // // // //               <h3 className="mb-2 flex items-center">✔️ 10,000 words/month</h3>
// // // // //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// // // // //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// // // // //               <h3 className="mb-6 flex items-center">✔️ 1 month of History</h3>
// // // // //             </div>
// // // // //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // // //               Currently Active Plan
// // // // //             </button>
// // // // //           </BackgroundGradient>

// // // // //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// // // // //             <h2 className="text-xl font-semibold mb-2">Monthly</h2>
// // // // //             <p className="text-2xl font-bold mb-1">9.99$</p>
// // // // //             <span className="text-gray-500 mb-4">/month</span>
// // // // //             <div className="flex flex-col items-center">
// // // // //               <h3 className="mb-2 flex items-center">✔️ 100,000 words/month</h3>
// // // // //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// // // // //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// // // // //               <h3 className="mb-6 flex items-center">✔️ 2 months of History</h3>
// // // // //             </div>
// // // // //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // // //               Get Started
// // // // //             </button>
// // // // //           </BackgroundGradient>

// // // // //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// // // // //             <h2 className="text-xl font-semibold mb-2">Yearly</h2>
// // // // //             <p className="text-2xl font-bold mb-1">99.99$</p>
// // // // //             <span className="text-gray-500 mb-4">/year</span>
// // // // //             <div className="flex flex-col items-center">
// // // // //               <h3 className="mb-2 flex items-center">✔️ 100,000,000 words/month</h3>
// // // // //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// // // // //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// // // // //               <h3 className="mb-6 flex items-center">✔️ 1 year of History</h3>
// // // // //             </div>
// // // // //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // // //               Get Started
// // // // //             </button>
// // // // //           </BackgroundGradient>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Footer Section */}
// // // // //       <Footer />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";
// // // // import Head from "next/head";
// // // // import { Button } from "@/components/ui/moving-border";
// // // // import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// // // // import { HeroParallax } from "@/components/ui/hero-parallax";
// // // // import { BackgroundGradient } from "@/components/ui/background-gradient";
// // // // import Footer from "./dashboard/_components/Footer";
// // // // import { cn } from "@/utils/cn";

// // // // const Items = [
// // // //   { title: "Blog Content", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Blog Title", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Blog Topic", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Rewrite Article", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Text Improver", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Youtube Description", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Youtube Tags", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Youtube SEO Title", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Blog Content", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpg" },
// // // //   { title: "Blog Title", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpgg" },
// // // //   { title: "Blog Topic", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpgg" },
// // // //   { title: "Rewrite Article", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpgg" },
// // // //   { title: "Text Improver", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpgg" },
// // // //   { title: "Youtube Description", link: "./dashboard", thumbnail: "https://example.com/path/to/thumbnail1.jpgg" },
// // // // ];


// // // // const slideMoveContent = [
// // // //   {
// // // //     quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
// // // //     name: "Charles Dickens",
// // // //     title: "A Tale of Two Cities",
// // // //   },
// // // //   {
// // // //     quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
// // // //     name: "William Shakespeare",
// // // //     title: "Hamlet",
// // // //   },
// // // //   {
// // // //     quote: "All that we see or seem is but a dream within a dream.",
// // // //     name: "Edgar Allan Poe",
// // // //     title: "A Dream Within a Dream",
// // // //   },
// // // //   {
// // // //     quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
// // // //     name: "Jane Austen",
// // // //     title: "Pride and Prejudice",
// // // //   },
// // // //   {
// // // //     quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
// // // //     name: "Herman Melville",
// // // //     title: "Moby-Dick",
// // // //   },
// // // // ];

// // // // function Navbar({ className }: { className?: string }) {
// // // //   return (
// // // //     <div className={cn("relative top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 shadow-md", className)}>
// // // //       <div className="flex justify-between items-center py-4">
// // // //         <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800">
// // // //           GenAI
// // // //         </Button>
// // // //         <div className="flex-1 flex justify-center"></div>
// // // //         {/* <ModeToggle /> */}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function Home() {
// // // //   return (
// // // //     <div className="min-h-screen dark:bg-gray-950 overflow-x-hidden">
// // // //       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
// // // //       <Head>
// // // //         <title>GenAI - AI SaaS Platform</title>
// // // //         <meta name="description" content="GenAI - Your AI SaaS Platform" />
// // // //         <link rel="icon" href="/favicon.ico" />
// // // //       </Head>
// // // //       <Navbar />
// // // //       <HeroParallax products={Items} />
// // // //       <div className="bg-grid-gray-500/[0.1] dark:bg-grid-gray-500/[0.1]">
// // // //         <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
// // // //           <InfiniteMovingCards items={slideMoveContent} direction="right" speed="slow" />
// // // //         </div>

// // // //         <div className="flex items-center justify-center text-center mt-16">
// // // //           <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">
// // // //             Subscribe to Explore More
// // // //           </h1>
// // // //         </div>
// // // //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// // // //           <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-6 bg-zinc-900">
// // // //             <h2 className="text-xl font-semibold mb-2 text-white">Free</h2>
// // // //             <p className="text-2xl font-bold mb-1 text-white">0$</p>
// // // //             <span className="text-gray-400 mb-4">/month</span>
// // // //             <div className="flex flex-col items-center text-white">
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>10,000 words/month
// // // //               </h3>
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>50+ Content Templates
// // // //               </h3>
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// // // //               </h3>
// // // //               <h3 className="mb-6 flex items-center">
// // // //                 <span className="mr-2">✔️</span>1 month of History
// // // //               </h3>
// // // //             </div>
// // // //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // //               <span>Currently Active Plan</span>
// // // //             </button>
// // // //           </BackgroundGradient>
// // // //           <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-6 bg-zinc-900">
// // // //             <h2 className="text-xl font-semibold mb-2 text-white">Monthly</h2>
// // // //             <p className="text-2xl font-bold mb-1 text-white">9.99$</p>
// // // //             <span className="text-gray-400 mb-4">/month</span>
// // // //             <div className="flex flex-col items-center text-white">
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>100,000 words/month
// // // //               </h3>
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>50+ Content Templates
// // // //               </h3>
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// // // //               </h3>
// // // //               <h3 className="mb-6 flex items-center">
// // // //                 <span className="mr-2">✔️</span>2 months of History
// // // //               </h3>
// // // //             </div>
// // // //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // //               <span>Get Started</span>
// // // //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
// // // //                 $9.99
// // // //               </span>
// // // //             </button>
// // // //           </BackgroundGradient>
// // // //           <BackgroundGradient className="rounded-[22px] max-w-xs p-4 sm:p-6 bg-zinc-900">
// // // //             <h2 className="text-xl font-semibold mb-2 text-white">Yearly</h2>
// // // //             <p className="text-2xl font-bold mb-1 text-white">99.99$</p>
// // // //             <span className="text-gray-400 mb-4">/year</span>
// // // //             <div className="flex flex-col items-center text-white">
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>100,000,000 words/month
// // // //               </h3>
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>50+ Content Templates
// // // //               </h3>
// // // //               <h3 className="mb-2 flex items-center">
// // // //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// // // //               </h3>
// // // //               <h3 className="mb-6 flex items-center">
// // // //                 <span className="mr-2">✔️</span>1 year of History
// // // //               </h3>
// // // //             </div>
// // // //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // // //               <span>Get Started</span>
// // // //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
// // // //                 $99.99
// // // //               </span>
// // // //             </button>
// // // //           </BackgroundGradient>
// // // //         </div>
// // // //       </div>
// // // //       <div className="pt-20">
// // // //         <Footer />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";
// // // import Head from "next/head";
// // // import { Button } from "@/components/ui/moving-border";
// // // import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// // // import { HeroParallax } from "@/components/ui/hero-parallax";
// // // import { BackgroundGradient } from "@/components/ui/background-gradient";
// // // import Footer from "./dashboard/_components/Footer";
// // // import { cn } from "@/utils/cn";

// // // const Items = [
// // //   { title: "Blog Content", link: "./dashboard" },
// // //   { title: "Blog Title", link: "./dashboard" },
// // //   { title: "Blog Topic", link: "./dashboard" },
// // //   { title: "Rewrite Article", link: "./dashboard" },
// // //   { title: "Text Improver", link: "./dashboard" },
// // //   { title: "Youtube Description", link: "./dashboard" },
// // //   { title: "Youtube Tags", link: "./dashboard" },
// // //   { title: "Youtube SEO Title", link: "./dashboard" },
// // //   { title: "Blog Content", link: "./dashboard" },
// // //   { title: "Blog Title", link: "./dashboard" },
// // //   { title: "Blog Topic", link: "./dashboard" },
// // //   { title: "Rewrite Article", link: "./dashboard" },
// // //   { title: "Text Improver", link: "./dashboard" },
// // // ];

// // // const slideMoveContent = [
// // //   {
// // //     quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
// // //     name: "Charles Dickens",
// // //     title: "A Tale of Two Cities",
// // //   },
// // //   {
// // //     quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
// // //     name: "William Shakespeare",
// // //     title: "Hamlet",
// // //   },
// // //   {
// // //     quote: "All that we see or seem is but a dream within a dream.",
// // //     name: "Edgar Allan Poe",
// // //     title: "A Dream Within a Dream",
// // //   },
// // //   {
// // //     quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
// // //     name: "Jane Austen",
// // //     title: "Pride and Prejudice",
// // //   },
// // //   {
// // //     quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
// // //     name: "Herman Melville",
// // //     title: "Moby-Dick",
// // //   },
// // // ];

// // // function Navbar({ className }: { className?: string }) {
// // //   return (
// // //     <div className={cn("relative top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 shadow-md", className)}>
// // //       <div className="flex justify-between items-center py-4">
// // //         <Button borderRadius="1.75rem" className="bg-white dark:bg-slate-900 text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800">
// // //           GenAI
// // //         </Button>
// // //         <div className="flex-1 flex justify-center"></div>
// // //         {/* <ModeToggle /> */}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default function Home() {
// // //   return (
// // //     <div className="min-h-screen dark:bg-gray-950 overflow-x-hidden">
// // //       <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
// // //       <Head>
// // //         <title>GenAI - AI SaaS Platform</title>
// // //         <meta name="description" content="GenAI - Your AI SaaS Platform" />
// // //         <link rel="icon" href="/favicon.ico" />
// // //       </Head>
// // //       <Navbar />
// // //       <HeroParallax products={Items} />
// // //       <div className="bg-grid-gray-500/[0.1] dark:bg-grid-gray-500/[0.1]">
// // //         <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
// // //           <InfiniteMovingCards items={slideMoveContent} direction="right" speed="slow" />
// // //         </div>

// // //         <div className="flex items-center justify-center text-center mt-16">
// // //           <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">
// // //             Subscribe to Explore More
// // //           </h1>
// // //         </div>
// // //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// // //           <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-6 bg-zinc-900">
// // //             <h2 className="text-xl font-semibold mb-2 text-white">Free</h2>
// // //             <p className="text-2xl font-bold mb-1 text-white">0$</p>
// // //             <span className="text-gray-400 mb-4">/month</span>
// // //             <div className="flex flex-col items-center text-white">
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>10,000 words/month
// // //               </h3>
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>50+ Content Templates
// // //               </h3>
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// // //               </h3>
// // //               <h3 className="mb-6 flex items-center">
// // //                 <span className="mr-2">✔️</span>1 month of History
// // //               </h3>
// // //             </div>
// // //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // //               <span>Currently Active Plan</span>
// // //             </button>
// // //           </BackgroundGradient>
// // //           <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-6 bg-zinc-900">
// // //             <h2 className="text-xl font-semibold mb-2 text-white">Monthly</h2>
// // //             <p className="text-2xl font-bold mb-1 text-white">9.99$</p>
// // //             <span className="text-gray-400 mb-4">/month</span>
// // //             <div className="flex flex-col items-center text-white">
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>100,000 words/month
// // //               </h3>
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>50+ Content Templates
// // //               </h3>
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// // //               </h3>
// // //               <h3 className="mb-6 flex items-center">
// // //                 <span className="mr-2">✔️</span>2 months of History
// // //               </h3>
// // //             </div>
// // //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // //               <span>Get Started</span>
// // //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
// // //                 $9.99
// // //               </span>
// // //             </button>
// // //           </BackgroundGradient>
// // //           <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-6 bg-zinc-900">
// // //             <h2 className="text-xl font-semibold mb-2 text-white">Yearly</h2>
// // //             <p className="text-2xl font-bold mb-1 text-white">99.99$</p>
// // //             <span className="text-gray-400 mb-4">/year</span>
// // //             <div className="flex flex-col items-center text-white">
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>100,000,000 words/month
// // //               </h3>
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>50+ Content Templates
// // //               </h3>
// // //               <h3 className="mb-2 flex items-center">
// // //                 <span className="mr-2">✔️</span>Unlimited Download and Copy
// // //               </h3>
// // //               <h3 className="mb-6 flex items-center">
// // //                 <span className="mr-2">✔️</span>1 year of History
// // //               </h3>
// // //             </div>
// // //             <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// // //               <span>Get Started</span>
// // //               <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
// // //                 $99.99
// // //               </span>
// // //             </button>
// // //           </BackgroundGradient>
// // //         </div>
// // //       </div>
// // //       <div className="pt-20">
// // //         <Footer />
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";
// // import Head from "next/head";
// // import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// // import { BackgroundGradient } from "@/components/ui/background-gradient";
// // import Footer from "./dashboard/_components/Footer";

// // const Items = [
// //   { title: "Blog Content", link: "./dashboard" },
// //   { title: "Blog Title", link: "./dashboard" },
// //   { title: "Blog Topic", link: "./dashboard" },
// //   { title: "Rewrite Article", link: "./dashboard" },
// //   { title: "Text Improver", link: "./dashboard" },
// //   { title: "Youtube Description", link: "./dashboard" },
// //   { title: "Youtube Tags", link: "./dashboard" },
// //   { title: "Youtube SEO Title", link: "./dashboard" },
// // ];

// // const slideMoveContent = [
// //   { quote: "It was the best of times...", name: "Charles Dickens", title: "A Tale of Two Cities" },
// //   { quote: "To be, or not to be...", name: "William Shakespeare", title: "Hamlet" },
// //   { quote: "All that we see or seem...", name: "Edgar Allan Poe", title: "A Dream Within a Dream" },
// //   { quote: "It is a truth universally acknowledged...", name: "Jane Austen", title: "Pride and Prejudice" },
// // ];

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen overflow-x-hidden">
// //       <Head>
// //         <title>SmartGen AI - AI Content Platform</title>
// //         <meta name="description" content="SmartGen AI - Your AI Content Creation Platform" />
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>
      
// //       {/* First Screen */}
// //       <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-purple-700 text-center relative">
        
// //         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
// //           SmartGen AI for AI Content
// //         </h1>
// //         <p className="text-white text-lg md:text-2xl mb-8">
// //           Create AI-driven content effortlessly!
// //         </p>
// //         <button className="rounded-full px-8 py-4 bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition duration-300">
// //           Try it Now
// //         </button>
// //       </section>

// //     {/* Features Section */}
// // <section className="relative min-h-screen bg-slate-800 flex flex-col items-center justify-center p-8">
// //   <img
// //     src="/ci.gif"
// //     alt="AI Gif Background"
// //     className="absolute inset-0 h-full w-full object-cover "
// //   />
// //   <div className="relative z-10 text-center">
// //     <h2 className="text-4xl font-bold mb-6 text-white">Features</h2>
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //       {Items.map((item, index) => (
// //         <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-70">
// //           <h3 className="text-xl font-semibold">{item.title}</h3>
// //           <p className="mt-4">AI-powered {item.title} feature.</p>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </section>

// //       {/* Pricing Section */}
// //       <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
// //         <h2 className="text-4xl font-bold mb-6">Pricing</h2>
// //         <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-semibold mb-2">Free</h2>
// //             <p className="text-2xl font-bold mb-1">0$</p>
// //             <span className="text-gray-500 mb-4">/month</span>
// //             <div className="flex flex-col items-center">
// //               <h3 className="mb-2 flex items-center">✔️ 10,000 words/month</h3>
// //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// //               <h3 className="mb-6 flex items-center">✔️ 1 month of History</h3>
// //             </div>
// //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// //               Currently Active Plan
// //             </button>
// //           </BackgroundGradient>

// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-semibold mb-2">Monthly</h2>
// //             <p className="text-2xl font-bold mb-1">9.99$</p>
// //             <span className="text-gray-500 mb-4">/month</span>
// //             <div className="flex flex-col items-center">
// //               <h3 className="mb-2 flex items-center">✔️ 100,000 words/month</h3>
// //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// //               <h3 className="mb-6 flex items-center">✔️ 2 months of History</h3>
// //             </div>
// //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// //               Get Started
// //             </button>
// //           </BackgroundGradient>

// //           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
// //             <h2 className="text-xl font-semibold mb-2">Yearly</h2>
// //             <p className="text-2xl font-bold mb-1">99.99$</p>
// //             <span className="text-gray-500 mb-4">/year</span>
// //             <div className="flex flex-col items-center">
// //               <h3 className="mb-2 flex items-center">✔️ 100,000,000 words/month</h3>
// //               <h3 className="mb-2 flex items-center">✔️ 50+ Content Templates</h3>
// //               <h3 className="mb-2 flex items-center">✔️ Unlimited Download and Copy</h3>
// //               <h3 className="mb-6 flex items-center">✔️ 1 year of History</h3>
// //             </div>
// //             <button className="rounded-full px-4 py-2 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
// //               Get Started
// //             </button>
// //           </BackgroundGradient>
// //         </div>
// //       </section>

// //       {/* Footer Section */}
// //       <Footer />
// //     </div>
// //   );
// // }
// "use client";
// import Head from "next/head";
// import { BackgroundGradient } from "@/components/ui/background-gradient";
// import Footer from "./dashboard/_components/Footer";

// const Items = [
//   { title: "Blog Content", link: "./dashboard" },
//   { title: "Blog Title", link: "./dashboard" },
//   { title: "Blog Topic", link: "./dashboard" },
//   { title: "Rewrite Article", link: "./dashboard" },
//   { title: "Text Improver", link: "./dashboard" },
//   { title: "Youtube Description", link: "./dashboard" },
//   { title: "Youtube Tags", link: "./dashboard" },
//   { title: "Youtube SEO Title", link: "./dashboard" },
// ];

// const slideMoveContent = [
//   { quote: "It was the best of times...", name: "Charles Dickens", title: "A Tale of Two Cities" },
//   { quote: "To be, or not to be...", name: "William Shakespeare", title: "Hamlet" },
//   { quote: "All that we see or seem...", name: "Edgar Allan Poe", title: "A Dream Within a Dream" },
//   { quote: "It is a truth universally acknowledged...", name: "Jane Austen", title: "Pride and Prejudice" },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen overflow-x-hidden">
//       <Head>
//         <title>SmartGen AI - AI Content Platform</title>
//         <meta name="description" content="SmartGen AI - Your AI Content Creation Platform" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
      
//       {/* First Screen */}
//       <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-center relative">
//         <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
//           SmartGen AI for AI Content
//         </h1>
//         <p className="text-white text-lg md:text-2xl mb-8">
//           Create AI-driven content effortlessly!
//         </p>
//         <button className="rounded-full px-8 py-4 bg-green-500 text-white text-lg font-bold hover:bg-green-600 transition duration-300">
//           Try it Now
//         </button>
//       </section>

//       {/* Features Section */}
//       <section className="relative min-h-screen bg-slate-800 flex flex-col items-center justify-center p-8">
//         <img
//           src="/ci.gif"
//           alt="AI Gif Background"
//           className="absolute inset-0 h-full w-full object-cover "
//         />
//         <div className="relative z-10 text-center cursor-pointer">
//           <h2 className="text-4xl font-bold mb-6 text-white">Features</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {Items.map((item, index) => (
//               <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md backdrop-blur-md bg-opacity-70 border border-gray-300">
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//                 <p className="mt-4 text-left">AI-powered {item.title} feature.</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
// {/* Pricing Section */}
// <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
//   <h2 className="text-4xl font-bold mb-6">Pricing</h2>
//   <div className="flex flex-col lg:flex-row justify-center gap-6 px-6 w-full">
//     <div className="bg-zinc-900 border border-gray-700 rounded-lg p-8 text-center flex-1 max-w-xs">
//       <h2 className="text-2xl font-semibold mb-4">Free</h2>
//       <p className="text-3xl font-bold mb-2">0$</p>
//       <span className="text-gray-500">/month</span>
//       <ul className="mt-6 space-y-2">
//         <li>✔️ 10,000 words/month</li>
//         <li>✔️ 50+ Content Templates</li>
//         <li>✔️ Unlimited Download and Copy</li>
//         <li>✔️ 1 month of History</li>
//       </ul>
//       <button className="mt-6 px-4 py-2 bg-black text-white rounded-full">
//         Currently Active Plan
//       </button>
//     </div>

//     <div className="bg-zinc-900 border border-gray-700 rounded-lg p-8 text-center flex-1 max-w-xs">
//       <h2 className="text-2xl font-semibold mb-4">Monthly</h2>
//       <p className="text-3xl font-bold mb-2">9.99$</p>
//       <span className="text-gray-500">/month</span>
//       <ul className="mt-6 space-y-2">
//         <li>✔️ 100,000 words/month</li>
//         <li>✔️ 50+ Content Templates</li>
//         <li>✔️ Unlimited Download and Copy</li>
//         <li>✔️ 2 months of History</li>
//       </ul>
//       <button className="mt-6 px-4 py-2 bg-black text-white rounded-full">
//         Get Started
//       </button>
//     </div>

//     <div className="bg-zinc-900 border border-gray-700 rounded-lg p-8 text-center flex-1 max-w-xs">
//       <h2 className="text-2xl font-semibold mb-4">Yearly</h2>
//       <p className="text-3xl font-bold mb-2">99.99$</p>
//       <span className="text-gray-500">/year</span>
//       <ul className="mt-6 space-y-2">
//         <li>✔️ 100,000,000 words/month</li>
//         <li>✔️ 50+ Content Templates</li>
//         <li>✔️ Unlimited Download and Copy</li>
//         <li>✔️ 1 year of History</li>
//       </ul>
//       <button className="mt-6 px-4 py-2 bg-black text-white rounded-full">
//         Get Started
//       </button>
//     </div>
//   </div>
// </section>


//       {/* Footer Section */}
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
  { title: "Blog Content", link: "./dashboard", thumbnail: "ss1.png" },
  { title: "Blog Title", link: "./dashboard", thumbnail: "ss2.png" },
  { title: "Blog Topic", link: "./dashboard", thumbnail: "ss3.png" },
  { title: "Rewrite Article", link: "./dashboard", thumbnail: "ss4.png" },
  { title: "Text Improver", link: "./dashboard", thumbnail: "ss5.png" },
  { title: "Youtube Description", link: "./dashboard", thumbnail: "ss6.png" },
  { title: "Youtube Tags", link: "./dashboard", thumbnail: "ss7.png" },
  { title: "Youtube SEO Title", link: "./dashboard", thumbnail: "ss8.png" },
];

// Slide Content
const slideMoveContent = [
  {
    quote:
      "It was the best of times, it was the worst of times...",
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

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("relative top-0 left-0 pr-12 z-50 px-4 sm:px-6 lg:px-8 shadow-md", className)}>
      <div className="flex justify-between py-4">
        <Button className="bg-white dark:bg-slate-900  text-black dark:text-white text-xl border-neutral-200 dark:border-slate-800">
          GenAI
        </Button>
        <div className="flex-1 flex justify-center"></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen dark bg-gray-950 overflow-x-hidden">
      <Head>
        <title>GenAI - AI SaaS Platform</title>
        <meta name="description" content="GenAI - Your AI SaaS Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Section 1: Navbar and Hero */}
      <section className="h-screen flex flex-col justify-center items-center relative">
        <Navbar />
        <HeroParallax products={Items} />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </section>

      {/* Section 2: Infinite Moving Cards */}
      <section className="h-screen flex flex-col justify-center items-center">
        <div className="bg-grid-gray-500/[0.1] dark:bg-grid-gray-500/[0.1]">
          <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={slideMoveContent} direction="right" speed="slow" />
          </div>
        </div>
      </section>

      {/* Section 3: Pricing */}
      <section className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-4xl pb-7 my-10 sm:text-6xl font-extrabold dark:text-white">Subscribe to Explore More</h1>
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-around gap-6 p-4">
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">Free</h2>
            <p className="text-2xl font-bold mb-1">0$</p>
            <span className="text-gray-500 mb-4">/month</span>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>10,000 words/month
              </h3>
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>50+ Content Templates
              </h3>
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>Unlimited Download and Copy
              </h3>
              <h3 className="mb-6 flex items-center">
                <span className="mr-2">✔️</span>1 month of History
              </h3>
            </div>
            <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Currently Active Plan</span>
            </button>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">Monthly</h2>
            <p className="text-2xl font-bold mb-1">9.99$</p>
            <span className="text-gray-500 mb-4">/month</span>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>100,000 words/month
              </h3>
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>50+ Content Templates
              </h3>
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>Unlimited Download and Copy
              </h3>
              <h3 className="mb-6 flex items-center">
                <span className="mr-2">✔️</span>2 months of History
              </h3>
            </div>
            <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Get Started</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">$9.99</span>
            </button>
          </BackgroundGradient>

          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
            <h2 className="text-xl font-semibold mb-2">Yearly</h2>
            <p className="text-2xl font-bold mb-1">99.99$</p>
            <span className="text-gray-500 mb-4">/year</span>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>100,000,000 words/month
              </h3>
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>50+ Content Templates
              </h3>
              <h3 className="mb-2 flex items-center">
                <span className="mr-2">✔️</span>Unlimited Download and Copy
              </h3>
              <h3 className="mb-6 flex items-center">
                <span className="mr-2">✔️</span>1 year of History
              </h3>
            </div>
            <button className="rounded-full pl-4 pr-1 py-1 flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Get Started</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">$99.99</span>
            </button>
          </BackgroundGradient>
        </div>
      </section>

      {/* Section 4: Footer */}
      <section className="h-screen flex flex-col justify-end">
        <Footer />
      </section>
    </div>
  );
}
