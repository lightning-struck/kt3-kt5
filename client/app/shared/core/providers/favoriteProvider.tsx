'use client';
import { createContext, type ReactNode, useContext, useRef } from 'react';
import { createFavoriteStore, type FavoriteStore, initFavoriteStore } from '../store/favoriteStore';
import { useStore } from 'zustand';

export type FavoriteStoreApi = ReturnType<typeof createFavoriteStore>;

export const FavoriteStoreContext = createContext<FavoriteStoreApi | undefined>(undefined);

export interface FavoriteStoreProviderProps {
  children: ReactNode;
}

export const FavoriteStoreProvider = ({ children }: FavoriteStoreProviderProps) => {
  const storeRef = useRef<FavoriteStoreApi>(undefined);
  if (!storeRef.current) {
    storeRef.current = createFavoriteStore(initFavoriteStore());
  }
  return <FavoriteStoreContext.Provider value={storeRef.current}> {children} </FavoriteStoreContext.Provider>;
};

export const useFavoriteStore = <T,>(selector: (store: FavoriteStore) => T): T => {
  const favoriteStoreContext = useContext(FavoriteStoreContext);

  if (!favoriteStoreContext) {
    throw new Error(`useFavoriteStore must be used within FavoriteStoreProvider`);
  }

  return useStore(favoriteStoreContext, selector);
};
