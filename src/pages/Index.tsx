import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Save, Trash2, Download, Upload, Sparkles } from "lucide-react";
import { ClassToggle } from "@/components/ClassToggle";
import { InventoryCategory } from "@/components/InventoryCategory";
import { BuildCard } from "@/components/BuildCard";
import { ActionButton } from "@/components/ActionButton";
import { FilterToggle } from "@/components/FilterToggle";
import { useInventory } from "@/hooks/useInventory";
import {
  arcanistInventory,
  arcanistBuilds,
  savageInventory,
  savageBuilds,
  getItemName,
  ClassType,
} from "@/data/gameData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<ClassType>("arcanist");
  const [filters, setFilters] = useState({
    playableOnly: false,
    pve: true,
    pvp: true,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const { ownedItems, toggleItem, saveInventory, clearInventory, exportInventory, importInventory } =
    useInventory(selectedClass);

  const inventory = selectedClass === "arcanist" ? arcanistInventory : savageInventory;
  const builds = selectedClass === "arcanist" ? arcanistBuilds : savageBuilds;

  const handleSave = () => {
    saveInventory();
    toast({
      title: "Inventory saved!",
      description: "Your items have been saved to browser storage.",
    });
  };

  const handleClear = () => {
    clearInventory();
    toast({
      title: "Inventory cleared",
      description: "All items have been removed.",
    });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importInventory(file);
      toast({
        title: "Inventory imported!",
        description: "Your items have been loaded successfully.",
      });
    }
  };

  // Helper to convert substitute name to ID
  const nameToId = (name: string) => name.toLowerCase().replace(/['']/g, "").replace(/\s+/g, "-");

  const processedBuilds = builds
    .filter((build) => {
      if (!filters.pve && build.type === "PvE") return false;
      if (!filters.pvp && build.type === "PvP") return false;
      return true;
    })
    .map((build) => {
      const items = build.items.map((item) => {
        const optimalOwned = ownedItems.has(item.itemId);
        const substituteIds = (item.substitutes || []).map(nameToId);
        const ownedSubstitute = substituteIds.find((subId) => ownedItems.has(subId));
        const ownedSubstituteName = ownedSubstitute
          ? item.substitutes?.[substituteIds.indexOf(ownedSubstitute)]
          : undefined;

        return {
          slot: item.slot,
          icon: item.icon,
          name: getItemName(item.itemId, inventory),
          owned: optimalOwned,
          hasSubstitute: !optimalOwned && !!ownedSubstitute,
          ownedSubstituteName,
          substitutes: item.substitutes,
        };
      });
      const optimalCount = items.filter((i) => i.owned).length;
      const playableCount = items.filter((i) => i.owned || i.hasSubstitute).length;
      return { ...build, items, optimalCount, playableCount, totalItems: items.length };
    })
    .filter((build) => {
      if (filters.playableOnly) {
        return build.playableCount === build.totalItems;
      }
      return true;
    })
    .sort((a, b) => b.optimalCount / b.totalItems - a.optimalCount / a.totalItems);

  const totalOwned = [...ownedItems].length;
  const totalItems = inventory.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-500">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
            selectedClass === "arcanist" ? "bg-[hsl(210_100%_50%/0.1)]" : "bg-accent/10"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
            selectedClass === "arcanist" ? "bg-[hsl(210_100%_50%/0.1)]" : "bg-accent/10"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial rounded-full transition-colors duration-500 ${
            selectedClass === "arcanist" ? "from-[hsl(210_100%_50%/0.05)]" : "from-accent/5"
          } to-transparent`}
        />
      </div>

      <div className="relative z-10 container mx-auto px-3 md:px-4 py-4 md:py-8">
        {/* Header - More compact on mobile */}
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-4 md:mb-10">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-3">
            <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-legendary animate-pulse" />
            <h1 className="text-2xl md:text-5xl font-display font-bold">
              <span className="text-accent tracking-wide" style={{ fontVariant: "small-caps" }}>
                Lootfiend
              </span>{" "}
              <span className="text-foreground/90 tracking-wide" style={{ fontVariant: "small-caps" }}>
                Build Tracker
              </span>
            </h1>
            <Sparkles className="w-5 h-5 md:w-8 md:h-8 text-legendary animate-pulse" />
          </div>
          
          <p className="text-muted-foreground mb-3 md:mb-6 text-xs md:text-base hidden md:block">
            Saves in your browser, or export json. Arcanist and Savage are stored separately.
          </p>
          <ClassToggle selectedClass={selectedClass} onClassChange={setSelectedClass} />
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          {/* Inventory Panel */}
          <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <div className="glass rounded-2xl p-4 md:p-6 border border-border bg-card">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div>
                  <h2
                    className="text-xl md:text-2xl font-display font-semibold tracking-wide"
                    style={{ fontVariant: "small-caps" }}
                  >
                    Your Inventory
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {totalOwned}/{totalItems} items owned
                  </p>
                </div>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 hidden md:block">
                Check the items you own. This list is from all items used in the wiki builds (including substitutes).
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                <ActionButton onClick={handleSave} variant="primary" selectedClass={selectedClass}>
                  <Save className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="text-xs md:text-sm">Save</span>
                </ActionButton>
                <ActionButton onClick={handleClear} selectedClass={selectedClass}>
                  <Trash2 className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="text-xs md:text-sm">Clear</span>
                </ActionButton>
                <ActionButton onClick={exportInventory} selectedClass={selectedClass}>
                  <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="text-xs md:text-sm">Export</span>
                </ActionButton>
                <ActionButton onClick={() => fileInputRef.current?.click()} selectedClass={selectedClass}>
                  <Upload className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  <span className="text-xs md:text-sm">Import</span>
                </ActionButton>
                <input ref={fileInputRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
              </div>

              <div className="space-y-2 md:space-y-3 max-h-[50vh] md:max-h-[calc(100vh-400px)] overflow-y-auto pr-2 custom-scrollbar">
                {inventory.map((category) => (
                  <InventoryCategory
                    key={category.name}
                    icon={category.icon}
                    name={category.name}
                    items={category.items}
                    ownedItems={ownedItems}
                    onToggleItem={toggleItem}
                  />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Builds Panel */}
          <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="glass rounded-2xl p-4 md:p-6 border border-border bg-card">
              <h2
                className="text-xl md:text-2xl font-display font-semibold mb-3 md:mb-4 tracking-wide"
                style={{ fontVariant: "small-caps" }}
              >
                Popular Builds
              </h2>

              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-4 md:mb-6">
                <span className="text-xs md:text-sm text-muted-foreground">Filters:</span>
                <FilterToggle
                  label="Playable"
                  active={filters.playableOnly}
                  onToggle={() => setFilters((f) => ({ ...f, playableOnly: !f.playableOnly }))}
                />
                <FilterToggle
                  label="PvE"
                  active={filters.pve}
                  onToggle={() => setFilters((f) => ({ ...f, pve: !f.pve }))}
                  variant="pve"
                />
                <FilterToggle
                  label="PvP"
                  active={filters.pvp}
                  onToggle={() => setFilters((f) => ({ ...f, pvp: !f.pvp }))}
                  variant="pvp"
                />
              </div>

              <div className="space-y-3 md:space-y-4 max-h-[50vh] md:max-h-[calc(100vh-400px)] overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence mode="popLayout">
                  {processedBuilds.map((build) => (
                    <motion.div
                      key={build.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <BuildCard
                        name={build.name}
                        type={build.type}
                        archetype={build.archetype}
                        skill={build.skill}
                        optimalCount={build.optimalCount}
                        playableCount={build.playableCount}
                        totalItems={build.totalItems}
                        items={build.items}
                        warning={build.warning}
                        wikiUrl={build.wikiUrl}
                        isAncientGod={build.isAncientGod}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>

                {processedBuilds.length === 0 && (
                  <div className="text-center py-8 md:py-12 text-muted-foreground">
                    <p>No builds match your current filters.</p>
                    <p className="text-sm mt-1">Try adjusting the filters above.</p>
                  </div>
                )}
              </div>
            </div>
          </motion.section>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6 md:mt-12 text-muted-foreground text-xs md:text-sm"
        >
          <p>
            Data sourced from{" "}
            <a
              href="https://lootbornwarriors.miraheze.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Lootborn Warriors Wiki
            </a>
          </p>
          <p className="text-[10px] text-muted-foreground/40 mt-2">v3.26</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
