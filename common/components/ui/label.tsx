"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
}

/**
 * Label Component
 * @description: Reusable label component
 */
export default function Label({
  className,
  ...props
}: LabelProps) {
  return <LabelPrimitive.Root className={cn(labelVariants(), className)} {...props} />
}