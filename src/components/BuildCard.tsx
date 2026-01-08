import { useState } from "react";
import { ChevronDown, ExternalLink, Check, X, AlertTriangle, Sword, Crown, Shield, Shirt, Hand, Footprints, Grip, CircleDot, Gem, Sparkles, Circle, RectangleVertical, LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { GREEN_ITEMS } from "@/data/gameData";

const ICON_MAP: Record<string, LucideIcon> = {
  Sword,
  Crown,
  Shield,
  Shirt,
  Hand,
  Footprints,
  Grip,
  CircleDot,
  Gem,
  Sparkles,
  Circle,
  RectangleVertical
};

const renderIcon = (iconName: string) => {
  const IconComponent = ICON_MAP[iconName];
  return IconComponent ? <IconComponent className="w-4 h-4 text-primary" /> : null;
};
// Check if an item should be displayed in green (set items)
const isSetItem = (name: string) => GREEN_ITEMS.has(name);

// Get the appropriate color class for an item name
const getItemColorClass = (name: string) => (isSetItem(name) ? "text-success" : "text-legendary");

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
            <h3 className="font-display text-xl font-semibold tracking-wide flex items-center gap-2" style={{ fontVariant: 'small-caps' }}>
              {name}{isAncientGod && " Ancient God"}
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  type === "PvE"
                    ? "bg-primary/20 text-primary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                {type}
              </span>
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
              className="text-accent hover:text-accent/80 transition-colors"
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
                        <div className="flex items-center gap-2 flex-wrap">
                          {renderIcon(item.icon)}
                          <span className="font-medium text-base font-display tracking-wide" style={{ fontVariant: 'small-caps' }}>{item.slot}:</span>
                          <span className={`text-sm ${getItemColorClass(item.name)}`}>{item.name}</span>
                          <span className="text-xs text-muted-foreground">(optimal)</span>
                        </div>
                        {/* Show substitutes info if any */}
                        {item.substitutes && item.substitutes.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                            Substitutes: {item.substitutes.map((sub, i) => (
                              <span key={i}>
                                {i > 0 && ", "}
                                <span className={getItemColorClass(sub)}>{sub}</span>
                              </span>
                            ))}
                          </p>
                        )}
                      </>
                    ) : item.hasSubstitute ? (
                      // Has substitute but not optimal
                      <>
                        <div className="flex items-center gap-2 flex-wrap">
                          {renderIcon(item.icon)}
                          <span className="font-medium text-base font-display tracking-wide" style={{ fontVariant: 'small-caps' }}>{item.slot}:</span>
                          <span className={`text-sm ${getItemColorClass(item.ownedSubstituteName || "")}`}>
                            {item.ownedSubstituteName}
                          </span>
                          <span className="text-xs text-muted-foreground">(playable, not optimal)</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                          Optimal item: <span className={getItemColorClass(item.name)}>{item.name}</span>
                        </p>
                        {/* Show other substitutes if any */}
                        {item.substitutes && item.substitutes.length > 1 && (
                          <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                            Other substitutes: {item.substitutes
                              .filter(s => s !== item.ownedSubstituteName)
                              .map((sub, i) => (
                                <span key={i}>
                                  {i > 0 && ", "}
                                  <span className={getItemColorClass(sub)}>{sub}</span>
                                </span>
                              ))}
                          </p>
                        )}
                      </>
                    ) : (
                      // Missing both optimal and substitutes
                      <>
                        <div className="flex items-center gap-2 flex-wrap">
                          {renderIcon(item.icon)}
                          <span className="font-medium text-base font-display tracking-wide" style={{ fontVariant: 'small-caps' }}>{item.slot}:</span>
                          <span className={`text-sm ${getItemColorClass(item.name)}`}>{item.name}</span>
                          <span className="text-xs text-muted-foreground">(missing)</span>
                        </div>
                        {item.substitutes && item.substitutes.length > 0 && (
                          <p className="text-xs text-muted-foreground mt-0.5 ml-6">
                            Substitutes: {item.substitutes.map((sub, i) => (
                              <span key={i}>
                                {i > 0 && ", "}
                                <span className={getItemColorClass(sub)}>{sub}</span>
                              </span>
                            ))}
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