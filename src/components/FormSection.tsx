"use client";

import React, { useEffect, useId, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useFormSections } from "@/hooks/use-section";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerFooter,
} from "@/components/ui/drawer";

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  id?: string;
}

const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  defaultOpen = true,
  className,
  id: customId,
}) => {
  const generatedId = useId();
  const id = customId ?? generatedId;
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { registerSection, updateSectionState, sectionStates } =
    useFormSections();

  useEffect(() => {
    registerSection(id, defaultOpen);
  }, [id, defaultOpen, registerSection]);

  const isOpen = sectionStates[id] ?? defaultOpen;

  const toggleSection = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isMobile) {
      setDrawerOpen(true);
    } else {
      updateSectionState(id, !isOpen);
    }
  };

  if (isMobile) {
    return (
      <div className={cn("w-full", className)}>
        <Button
          variant="ghost"
          onClick={toggleSection}
          className="flex w-full justify-between"
          type="button"
        >
          <span className="font-medium">{title}</span>
        </Button>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{title}</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 py-2">{children}</div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="ghost" className="w-full" type="button">
                  Fechar
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <button
        type="button"
        onClick={toggleSection}
        className="flex w-full items-center justify-between rounded-xl p-4 transition-all duration-200 hover:bg-accent"
      >
        <span className="font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? -90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-2 px-2 py-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormSection;
