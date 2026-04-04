import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "./utils";
import styles from "./badge.module.scss";

type BadgeVariant = "default" | "secondary" | "outline";

const variantClass: Record<BadgeVariant, string> = {
  default: styles.badgeDefault,
  secondary: styles.badgeSecondary,
  outline: styles.badgeOutline,
};

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & {
  variant?: BadgeVariant;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(styles.badge, variantClass[variant], className)}
      {...props}
    />
  );
}

export { Badge, type BadgeVariant };
