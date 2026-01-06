import { useState } from "react";
import { ChevronDown, ExternalLink, Check, X, AlertTriangle, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";

interface BuildItem {
  slot: string;
  icon: string;
  name: string;
  owned: boolean;
  hasSubstitute?: boolean;
  ownedSubstituteName?: string;
  substitutes?: string[];
}

interface BuildCardProps {
  name: string;
  type: "PvE" | "PvP";
  archetype: string;
  skill: string;
  optimalCount: number;
  playableCount: number;
  totalItems: number;
  items: BuildItem[];
  warning?: string;
  wikiUrl?: string;
  isAncientGod?: boolean;
}

export const BuildCard = ({
  name,
  type,
  archetype,
  skill,
  optimalCount,
  playableCount,
  totalItems,
  items,
  warning,
  wikiUrl,
  isAncientGod,
}: BuildCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const percentage = Math.round((optimalCount / totalItems) * 100);
  const isComplete = optimalCount === totalItems;
  const isPlayable = playableCount === totalItems;
  const usesSubstitutes = isPlayable && !isComplete;

  return (
    <motion.div
      layout
      className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
        isComplete ? "ring-2 ring-success/50 glow-success" : ""
      }`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display text-lg font-semibold flex items-center gap-2">
              {name}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  type === "PvE"
                    ? "bg-primary/20 text-primary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                {type}
              </span>
              {isAncientGod && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-legendary/20 text-legendary">
                  Ancient God
                </span>
              )}
            </h3>
            <p className="text-sm text-muted-foreground">
              {archetype} • {skill} • {optimalCount}/{totalItems} optimal
            </p>
          </div>
          {wikiUrl && (
            <a
              href={wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {warning && (
          <div className="flex items-center gap-2 text-warning text-sm mb-3 bg-warning/10 rounded-lg px-3 py-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{warning}</span>
          </div>
        )}

        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className={percentage === 100 ? "text-success" : "text-muted-foreground"}>
              Optimal: {percentage}%
            </span>
            <span
              className={
                isComplete
                  ? "text-success"
                  : usesSubstitutes
                  ? "text-warning"
                  : isPlayable
                  ? "text-warning"
                  : "text-destructive"
              }
            >
              {isComplete 
                ? "Playable (optimal)" 
                : usesSubstitutes 
                ? "Playable (using substitutes)" 
                : "Incomplete"}
            </span>
          </div>
          <Progress
            value={percentage}
            className="h-2 bg-secondary"
          />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
          Build details
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-2 border-t border-border/50 pt-3">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {/* Icon: green check for optimal, orange ~ for substitute, red X for missing */}
                  {item.owned ? (
                    <span className="text-success">
                      <Check className="w-4 h-4" />
                    </span>
                  ) : item.hasSubstitute ? (
                    <span className="text-warning font-bold text-lg leading-none">~</span>
                  ) : (
                    <span className="text-destructive">
                      <X className="w-4 h-4" />
                    </span>
                  )}
                  
                  <div className="flex-1">
                    {/* Main item display */}
                    {item.owned ? (
                      // Has optimal item
                      <>
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          <span className="font-medium text-sm">{item.slot}:</span>
                          <span className="text-sm text-success">{item.name}</span>
                          <span className="text-xs text-muted-foreground">(optimal)</span>
                        </div>
                        {/* Show substitutes info if any */}
                        {item.substitutes && item.substitutes.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                            Substitutes: {item.substitutes.join(", ")}
                          </p>
                        )}
                      </>
                    ) : item.hasSubstitute ? (
                      // Has substitute but not optimal
                      <>
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          <span className="font-medium text-sm">{item.slot}:</span>
                          <span className="text-sm text-warning">{item.ownedSubstituteName}</span>
                          <span className="text-xs text-muted-foreground">(playable, not optimal)</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                          Optimal item: <span className="text-legendary">{item.name}</span>
                        </p>
                        {/* Show other substitutes if any */}
                        {item.substitutes && item.substitutes.length > 1 && (
                          <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                            Other substitutes: {item.substitutes.filter(s => s !== item.ownedSubstituteName).join(", ")}
                          </p>
                        )}
                      </>
                    ) : (
                      // Missing both optimal and substitutes
                      <>
                        <div className="flex items-center gap-2">
                          <span>{item.icon}</span>
                          <span className="font-medium text-sm">{item.slot}:</span>
                          <span className="text-sm text-legendary">{item.name}</span>
                          <span className="text-xs text-muted-foreground">(missing)</span>
                        </div>
                        {item.substitutes && item.substitutes.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                            Substitutes: {item.substitutes.join(", ")}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};