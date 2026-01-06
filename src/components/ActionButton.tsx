import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

export const ActionButton = ({
  children,
  onClick,
  variant = "secondary",
  className = "",
}: ActionButtonProps) => {
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary",
    secondary: "glass hover:bg-secondary/50 text-foreground",
    ghost: "hover:bg-secondary/30 text-muted-foreground hover:text-foreground",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};
