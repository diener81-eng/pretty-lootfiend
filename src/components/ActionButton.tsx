import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ClassType } from "@/data/gameData";

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  selectedClass?: ClassType;
}

export const ActionButton = ({
  children,
  onClick,
  variant = "secondary",
  className = "",
  selectedClass = "arcanist",
}: ActionButtonProps) => {
  const getVariantStyles = () => {
    const isArcanist = selectedClass === "arcanist";
    
    if (variant === "primary") {
      return isArcanist
        ? "bg-[hsl(210_100%_50%)] text-white hover:bg-[hsl(210_100%_45%)] shadow-[0_0_15px_hsl(210_100%_50%/0.4)]"
        : "bg-accent text-accent-foreground hover:bg-accent/90 shadow-[0_0_15px_hsl(var(--accent)/0.4)]";
    }
    
    if (variant === "secondary") {
      return isArcanist
        ? "glass border-[hsl(210_100%_50%/0.3)] hover:border-[hsl(210_100%_50%/0.5)] hover:bg-[hsl(210_100%_50%/0.1)] text-foreground"
        : "glass border-accent/30 hover:border-accent/50 hover:bg-accent/10 text-foreground";
    }
    
    return "hover:bg-secondary/30 text-muted-foreground hover:text-foreground";
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${getVariantStyles()} ${className}`}
    >
      {children}
    </motion.button>
  );
};
