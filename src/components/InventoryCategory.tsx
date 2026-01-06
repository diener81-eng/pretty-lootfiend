import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

interface InventoryItem {
  id: string;
  name: string;
}

interface InventoryCategoryProps {
  icon: string;
  name: string;
  items: InventoryItem[];
  ownedItems: Set<string>;
  onToggleItem: (itemId: string) => void;
}

export const InventoryCategory = ({
  icon,
  name,
  items,
  ownedItems,
  onToggleItem,
}: InventoryCategoryProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const ownedCount = items.filter((item) => ownedItems.has(item.id)).length;

  return (
    <div className="glass rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-secondary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="font-medium">{name}</span>
          <span className="text-sm text-muted-foreground">
            ({ownedCount}/{items.length} owned)
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 space-y-1">
              {items.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-3 py-2 px-3 rounded-md cursor-pointer hover:bg-secondary/20 transition-colors group"
                >
                  <Checkbox
                    checked={ownedItems.has(item.id)}
                    onCheckedChange={() => onToggleItem(item.id)}
                    className="border-muted-foreground data-[state=checked]:bg-success data-[state=checked]:border-success"
                  />
                  <span
                    className={`transition-colors ${
                      ownedItems.has(item.id)
                        ? "text-success"
                        : "text-legendary group-hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                </label>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
