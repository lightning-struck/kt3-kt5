'use client';
import { createContext, ReactNode, useContext, useRef } from 'react';
import { BasketStore, createBasketStore, initBasketStore } from '../store/basketStore';
import { useStore } from 'zustand';

// типизация
export type BasketStoreApi = ReturnType<typeof createBasketStore>;

// контекст с данными
export const BasketStoreContext = createContext<BasketStoreApi | undefined>(undefined);

// Провайдер
export const BasketStoreProvider = ({ children }: { children: ReactNode }) => {
  //storeRef - ссылка
  const storeRef = useRef<BasketStoreApi>();
  // если стора нет - создаем
  if (!storeRef.current) {
    // storeRef.current -> значения, там у нас хранится стор
    // Стор: 1. Инициализация. 2. Создание
    storeRef.current = createBasketStore(initBasketStore());
  }
  // возвращение компонента
  return <BasketStoreContext.Provider value={storeRef.current}> {children} </BasketStoreContext.Provider>;
};

// Хук для использования стора
// дженерики
export const useBasketStore = <T,>(selector: (store: BasketStore) => T): T => {
  // контекст для хранения
  const storeContext = useContext(BasketStoreContext);

  // для инициализации
  if (!storeContext) {
    throw new Error(`useBasketStore must be used within BasketStoreProvider`);
  }
  return useStore(storeContext, selector);
};
