"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} fill alt="Cover" className="object-cover" />}
      {url && !preview && (
        <div className="opacity-0 hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button onClick={() => {}}><ImageIcon className="h-4 w-4 mr-2" />Change cover</Button>
        </div>
      )}
    </div>
  );
};
