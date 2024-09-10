"use client"
import React from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2Icon, LoaderIcon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

function FormSection({ selectedTemplate,userFormInput ,loading}: PROPS) {
    const [formData, setFormData] = useState<any>()
    const handleInputChange=(e:any) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }
    
    const onSubmit=(e:any) => {
        e.preventDefault()
        userFormInput(formData)

    }
  return (
    <div className="p-5 shadow-md border bg-white dark:bg-gray-800 dark:border-gray-500 rounded-lg ">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="icon" width={50} height={50} />
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {selectedTemplate?.desc}
      </p>

      <form onSubmit={onSubmit} className="mt-6">
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                className="border border-gray-600 my-2"
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="border border-gray-600 my-2"
              />
            ) : null}
          </div>
        ))}

        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-[length:100%_100%] dark:border-gray-500 dark:bg-[linear-gradient(110deg,#1a1a1a,45%,#333,55%,#1a1a1a)] dark:hover:bg-[length:100%_100%] hover:text-gray-300 dark:hover:text-gray-300"
          disabled={loading}
          type="submit"
        >
          {loading && <Loader2Icon className="animate-spin" />}Generate Content
        </button>
      </form>
    </div>
  );
}

export default FormSection;
