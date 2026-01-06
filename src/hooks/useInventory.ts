import { useState, useEffect, useCallback } from "react";
import { ClassType } from "@/data/gameData";

const STORAGE_KEY_PREFIX = "lootfiend_inventory_";

export const useInventory = (classType: ClassType) => {
  const [ownedItems, setOwnedItems] = useState<Set<string>>(new Set());

  // Load from localStorage on mount or class change
  useEffect(() => {
    const stored = localStorage.getItem(`${STORAGE_KEY_PREFIX}${classType}`);
    if (stored) {
      try {
        setOwnedItems(new Set(JSON.parse(stored)));
      } catch {
        setOwnedItems(new Set());
      }
    } else {
      setOwnedItems(new Set());
    }
  }, [classType]);

  const toggleItem = useCallback((itemId: string) => {
    setOwnedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  }, []);

  const saveInventory = useCallback(() => {
    localStorage.setItem(
      `${STORAGE_KEY_PREFIX}${classType}`,
      JSON.stringify([...ownedItems])
    );
  }, [classType, ownedItems]);

  const clearInventory = useCallback(() => {
    setOwnedItems(new Set());
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${classType}`);
  }, [classType]);

  const exportInventory = useCallback(() => {
    const data = JSON.stringify([...ownedItems]);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lootfiend_${classType}_inventory.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [classType, ownedItems]);

  const importInventory = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (Array.isArray(data)) {
            setOwnedItems(new Set(data));
            localStorage.setItem(
              `${STORAGE_KEY_PREFIX}${classType}`,
              JSON.stringify(data)
            );
          }
        } catch (error) {
          console.error("Failed to import inventory:", error);
        }
      };
      reader.readAsText(file);
    },
    [classType]
  );

  return {
    ownedItems,
    toggleItem,
    saveInventory,
    clearInventory,
    exportInventory,
    importInventory,
  };
};
