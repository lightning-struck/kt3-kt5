'use client';
import { createContext, type ReactNode, useContext, useRef } from 'react';
import { createSortStore, type SortStore, initSortStore } from '../store/sortStore';
import { useStore } from 'zustand';

export type SortStoreApi = ReturnType<typeof createSortStore>;

export const SortStoreContext = createContext<SortStoreApi | undefined>(undefined);

export interface SortStoreProviderProps {
  children: ReactNode;
}

export const SortStoreProvider = ({ children }: SortStoreProviderProps) => {
  const storeRef = useRef<SortStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSortStore(initSortStore());
  }
  return <SortStoreContext.Provider value={storeRef.current}> {children} </SortStoreContext.Provider>;
};

export const useSortStore = <T,>(selector: (store: SortStore) => T): T => {
  const sortStoreContext = useContext(SortStoreContext);

  if (!sortStoreContext) {
    throw new Error(`useSortStore must be used within SortStoreProvider`);
  }

  return useStore(sortStoreContext, selector);
};
