import { createStore } from 'zustand/vanilla';

export type FavoriteState = {
  favorites: number[];
};

export type FavoriteActions = {
  triggerFavorite: (id: number) => void;
};

export type FavoriteStore = FavoriteState & FavoriteActions;

// начальное состояние
export const defaultInitState: FavoriteState = {
  favorites: [],
};

// инициализация начального состояния
export const initFavoriteStore = (): FavoriteState => {
  return defaultInitState;
};

export const createFavoriteStore = (initState: FavoriteState = defaultInitState) => {
  return createStore<FavoriteStore>()(set => ({
    ...initState,
    triggerFavorite: id =>
      set(state => ({
        favorites: state.favorites.includes(id) ? state.favorites.filter(e => e !== id) : state.favorites.concat(id),
      })),
  }));
};
