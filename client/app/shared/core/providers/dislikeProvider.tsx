'use client';
import { createContext, ReactNode, useContext, useRef } from 'react';
import { createDislikeStore, DislikeStore, initDislikeStore } from '../store/dislikeStore';
import { useStore } from 'zustand';

export type DislikeStoreApi = ReturnType<typeof createDislikeStore>;

export const DislikeStoreContext = createContext<DislikeStoreApi | undefined>(undefined);

export const DislikeStoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<DislikeStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createDislikeStore(initDislikeStore());
  }
  return <DislikeStoreContext.Provider value={storeRef.current}>{children}</DislikeStoreContext.Provider>;
};

// Хук для использования стора
// дженерики
export const useDislikeStore = <T,>(selector: (store: DislikeStore) => T): T => {
  // контекст для хранения
  const storeContext = useContext(DislikeStoreContext);

  // для инициализации
  if (!storeContext) {
    throw new Error(`useDislikeStore must be used within DislikeStoreProvider`);
  }
  return useStore(storeContext, selector);
};
