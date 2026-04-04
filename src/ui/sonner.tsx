import type { CSSProperties } from "react";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--color-background)",
          "--normal-text": "var(--color-text)",
          "--normal-border": "var(--color-border)",
        } as CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };

