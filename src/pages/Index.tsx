import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Save, Trash2, Download, Upload, Sparkles } from "lucide-react";
import { ClassToggle } from "@/components/ClassToggle";
import { InventoryCategory } from "@/components/InventoryCategory";
import { BuildCard } from "@/components/BuildCard";
import { ActionButton } from "@/components/ActionButton";
import { FilterToggle } from "@/components/FilterToggle";
import { useInventory } from "@/hooks/useInventory";
import { arcanistInventory, arcanistBuilds, savageInventory, savageBuilds, getItemName, ClassType } from "@/data/gameData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedClass, setSelectedClass] = useState<ClassType>("arcanist");
  const [filters, setFilters] = useState({
    playableOnly: false,
    pve: true,
    pvp: true,
    ancientGod: true,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const {
    ownedItems,
    toggleItem,
    saveInventory,
    clearInventory,
    exportInventory,
    importInventory,
  } = useInventory(selectedClass);

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
      if (!filters.ancientGod && build.isAncientGod) return false;
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none transition-colors duration-500">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
          selectedClass === "arcanist" ? "bg-[hsl(210_100%_50%/0.1)]" : "bg-accent/10"
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-500 ${
          selectedClass === "arcanist" ? "bg-[hsl(210_100%_50%/0.1)]" : "bg-accent/10"
        }`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial rounded-full transition-colors duration-500 ${
          selectedClass === "arcanist" ? "from-[hsl(210_100%_50%/0.05)]" : "from-accent/5"
        } to-transparent`} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Sparkles className="w-8 h-8 text-legendary animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="text-accent tracking-wide" style={{ fontVariant: 'small-caps' }}>Lootfiend</span>{" "}
              <span className="text-foreground/90 tracking-wide" style={{ fontVariant: 'small-caps' }}>Build Tracker</span>
            </h1>
            <Sparkles className="w-8 h-8 text-legendary animate-pulse" />
          </div>
          <p className="text-xs text-muted-foreground/60 mb-1">v3.26</p>
          <p className="text-muted-foreground mb-6 text-sm md:text-base">
            Saves in your browser (no login). Arcanist and Savage are stored separately.
          </p>
          <ClassToggle
            selectedClass={selectedClass}
            onClassChange={setSelectedClass}
          />
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inventory Panel */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-display font-semibold tracking-wide" style={{ fontVariant: 'small-caps' }}>Your Inventory</h2>
                  <p className="text-sm text-muted-foreground">
                    {totalOwned}/{totalItems} items owned
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Check the items you own. This list is from all items used in the wiki builds (including substitutes).
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <ActionButton onClick={handleSave} variant="primary" selectedClass={selectedClass}>
                  <Save className="w-3.5 h-3.5" />
                  Save now
                </ActionButton>
                <ActionButton onClick={handleClear} selectedClass={selectedClass}>
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear
                </ActionButton>
                <ActionButton onClick={exportInventory} selectedClass={selectedClass}>
                  <Download className="w-3.5 h-3.5" />
                  Export
                </ActionButton>
                <ActionButton onClick={() => fileInputRef.current?.click()} selectedClass={selectedClass}>
                  <Upload className="w-3.5 h-3.5" />
                  Import
                </ActionButton>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </div>

              <div className="space-y-3 max-h-[calc(100vh-400px)] overflow-y-auto pr-2 custom-scrollbar">
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
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-display font-semibold mb-4 tracking-wide" style={{ fontVariant: 'small-caps' }}>
                Popular Compatible Builds
              </h2>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-muted-foreground">Filters:</span>
                <FilterToggle
                  label="Playable only"
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
                <FilterToggle
                  label="Ancient God"
                  active={filters.ancientGod}
                  onToggle={() => setFilters((f) => ({ ...f, ancientGod: !f.ancientGod }))}
                  variant="legendary"
                />
              </div>

              <div className="space-y-4 max-h-[calc(100vh-350px)] overflow-y-auto pr-2 custom-scrollbar">
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
                  <div className="text-center py-12 text-muted-foreground">
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
          className="text-center mt-12 text-muted-foreground text-sm"
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
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
