import { motion } from "framer-motion";

interface FilterToggleProps {
  label: string;
  active: boolean;
  onToggle: () => void;
  variant?: "default" | "pve" | "pvp" | "legendary";
}

export const FilterToggle = ({
  label,
  active,
  onToggle,
  variant = "default",
}: FilterToggleProps) => {
  const colorVariants = {
    default: active ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground",
    pve: active ? "bg-primary text-primary-foreground" : "bg-secondary/50 text-muted-foreground",
    pvp: active ? "bg-accent text-accent-foreground" : "bg-secondary/50 text-muted-foreground",
    legendary: active ? "bg-legendary text-background" : "bg-secondary/50 text-muted-foreground",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${colorVariants[variant]}`}
    >
      {label}
    </motion.button>
  );
};
