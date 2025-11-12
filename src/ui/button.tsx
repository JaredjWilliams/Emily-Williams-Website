import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "./utils";
import styles from "./button.module.scss";

type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonVariants {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const getButtonClasses = ({ variant = "default", size = "default" }: ButtonVariants): string => {
  const variantMap: Record<ButtonVariant, string> = {
    default: styles.buttonDefault,
    destructive: styles.buttonDestructive,
    outline: styles.buttonOutline,
    secondary: styles.buttonSecondary,
    ghost: styles.buttonGhost,
    link: styles.buttonLink,
  };

  const sizeMap: Record<ButtonSize, string> = {
    default: styles.buttonSizeDefault,
    sm: styles.buttonSizeSm,
    lg: styles.buttonSizeLg,
    icon: styles.buttonSizeIcon,
  };

  return cn(styles.button, variantMap[variant], sizeMap[size]);
};

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(getButtonClasses({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, type ButtonVariant, type ButtonSize };

