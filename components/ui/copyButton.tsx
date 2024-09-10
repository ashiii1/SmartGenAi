import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const CopyButton = ({ textToCopy }: { textToCopy: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      className="w-20 bg-white border text-gray-900 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-slate-400"
    >
      {copied ? "Copied!" : "Copy"}
    </Button>
  );
};

export default CopyButton;
