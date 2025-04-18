"use client";

import React from "react";
import { ScrollShadow, Tab, Tabs } from "@heroui/react";
import { cn } from "@heroui/react";

import PromptInputWithBottomActions from "@/components/features/ai/prompt-inputs/variants/WithBottomActions";
import Conversation from "@/components/features/ai/prompt-containers/components/conversations";

export default function Component({
  className,
  scrollShadowClassname,
}: {
  className?: string;
  scrollShadowClassname?: string;
}) {
  return (
    <div
      className={cn("flex h-dvh w-full max-w-full flex-col gap-8", className)}
    >
      <div className="flex w-full flex-wrap items-center justify-center gap-2 border-b-small border-divider pb-2 sm:justify-between">
        <p className="text-base font-medium">
          Creative Uses for Kids&apos; Art
        </p>
        <Tabs className="justify-center">
          <Tab key="creative" title="Creative" />
          <Tab key="technical" title="Technical" />
          <Tab key="precise" title="Precise" />
        </Tabs>
      </div>
      <ScrollShadow
        className={cn("flex h-full flex-col", scrollShadowClassname)}
      >
        <Conversation />
      </ScrollShadow>
      <div className="flex flex-col gap-2">
        <PromptInputWithBottomActions />
        <p className="px-2 text-tiny text-default-400">
          Acme AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}
