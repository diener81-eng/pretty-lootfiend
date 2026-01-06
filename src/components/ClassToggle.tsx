import { motion } from "framer-motion";

type ClassType = "arcanist" | "savage";

interface ClassToggleProps {
  selectedClass: ClassType;
  onClassChange: (classType: ClassType) => void;
}

export const ClassToggle = ({ selectedClass, onClassChange }: ClassToggleProps) => {
  return (
    <div className="glass rounded-full p-1.5 inline-flex gap-1">
      <button
        onClick={() => onClassChange("arcanist")}
        className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
          selectedClass === "arcanist"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {selectedClass === "arcanist" && (
          <motion.div
            layoutId="classToggle"
            className="absolute inset-0 bg-[hsl(var(--arcanist))] rounded-full glow-arcanist"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 text-lg">🧙‍♂️</span>
        <span className="relative z-10">Arcanist</span>
      </button>
      <button
        onClick={() => onClassChange("savage")}
        className={`relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
          selectedClass === "savage"
            ? "text-accent-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {selectedClass === "savage" && (
          <motion.div
            layoutId="classToggle"
            className="absolute inset-0 bg-accent rounded-full glow-accent"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10 text-lg">🪓</span>
        <span className="relative z-10">Savage</span>
      </button>
    </div>
  );
};
