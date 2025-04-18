"use client";

import React from "react";
import { ScrollShadow, Tab, Tabs } from "@heroui/react";

import SidebarContainer from "@/components/layout/Sidebar/variants/SidebarWithGradientBackground/App";
import Conversation from "@/components/features/ai/prompt-containers/components/conversations";
import PromptInputWithBottomActions from "@/components/features/ai/prompt-inputs/variants/WithBottomActions";

export default function Component() {
  return (
    <div className="h-dvh w-full max-w-full">
      <SidebarContainer
        header={
          <Tabs className="justify-center">
            <Tab key="creative" title="Creative" />
            <Tab key="technical" title="Technical" />
            <Tab key="precise" title="Precise" />
          </Tabs>
        }
        title="Creative Uses for Kids' Art"
      >
        <div className="relative flex h-full flex-col">
          <ScrollShadow className="flex h-full max-h-[60vh] flex-col gap-6 overflow-y-auto pb-8">
            <Conversation />
            <Conversation />
          </ScrollShadow>
          <div className="mt-auto flex max-w-full flex-col gap-2">
            <PromptInputWithBottomActions />
            <p className="px-2 text-tiny text-default-400">
              Acme AI can make mistakes. Consider checking important
              information.
            </p>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
}
