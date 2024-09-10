import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import CopyButton from "../../../components/ui/copyButton"; // Ensure this path is correct

export type HistoryTableData = {
  Template: string;
  AiResp: string;
  Date: string;
  Words: number;
  Copy: string;
};

export const columnsHistoryTable: ColumnDef<HistoryTableData>[] = [
  {
    header: "Template",
    accessorKey: "Template",
  },
  {
    header: "AI Response",
    accessorKey: "AiResp",
  },
  {
    header: "Date",
    accessorKey: "Date",
  },
  {
    header: "Words",
    accessorKey: "Words",
  },
  {
    header: "Copy",
    accessorKey: "Copy",
    cell: ({ row }) => <CopyButton textToCopy={row.getValue("AiResp")} />,
  },
];
