import React, { useEffect, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-500 rounded">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button className="flex gap-2 bg-white border text-gray-900 hover:bg-gray-700 hover:text-white dark:bg-gray-800 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-slate-400" onClick={handleCopy}>
          <Copy className="w-4 h-4" />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result will be shown here"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        height="500px"
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown() || "")
        }
        
      />
    </div>
  );
}

export default OutputSection;
