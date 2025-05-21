// state + actions

import { createStore } from 'zustand';

// типизация состояния
export type BasketState = {
  basketItems: number[];
};

// типизация экшнов
export type BasketActions = {
  basketAction: (id: number) => void;
};

export type BasketStore = BasketState & BasketActions;

// начальное состояние
export const defaultInitState: BasketState = {
  basketItems: [],
};

// инициализация начального состояния
export const initBasketStore = (): BasketState => {
  return defaultInitState;
};

export const createBasketStore = (initState: BasketState = defaultInitState) => {
  return createStore<BasketStore>()(set => ({
    ...initState,
    basketAction: id =>
      set(state => ({
        basketItems: state.basketItems.includes(id)
          ? state.basketItems.filter(e => e !== id) 
          : state.basketItems.concat(id), 
      })),
  }));
};

/* ... -> спред оператор

let data = {
    basket: [],
    user: {},
    token: "",
    getToken: () => "",
    getUser: () => {} 
}

let data2 = {
...data
}

data2 = data
 */
