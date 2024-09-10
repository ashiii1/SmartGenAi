import { Button } from "@/components/ui/button";
import React from "react";

function Billing() {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Upgrade now</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-500 p-6 rounded-lg shadow-lg flex flex-col items-center">
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
          <Button className="mt-auto">Currently Active Plan</Button>
        </div>
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-500 p-6 rounded-lg shadow-lg flex flex-col items-center">
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
          <Button className="mt-auto" variant={"outline"}>
            Get Started
          </Button>
        </div>
        <div className="bg-white dark:bg-gray-800 border dark:border-gray-500 p-6 rounded-lg shadow-lg flex flex-col items-center">
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
          <Button className="mt-auto" variant={"outline"}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
