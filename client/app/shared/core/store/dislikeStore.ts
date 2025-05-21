import { createStore } from 'zustand';

// 1. типизация состояния
export type DislikeState = {
  dislikes: number[];
};

// 2. типизация экшнов
export type DislikeActions = {
  doLike: (id: number) => void;
  redoLike: (id: number) => void;
};

// 3. Типизация объединения экшнов и состояния в стор
export type DislikeStore = DislikeState & DislikeActions;

// 4. Начальное состояние приложения
export const defaultInitState: DislikeState = {
  dislikes: [],
};

// 5. Инициализация начального состояния
export const initDislikeStore = (): DislikeState => {
  return defaultInitState;
};

// 6. Создание стора
export const createDislikeStore = (initState: DislikeState = defaultInitState) => {
  return createStore<DislikeStore>()(set => ({
    ...initState,
    doLike: id =>
      set(state => ({
        dislikes: !state.dislikes.includes(id) ? state.dislikes.concat(id) : state.dislikes,
      })),
    redoLike: id =>
      set(state => ({
        dislikes: state.dislikes.includes(id) ? state.dislikes.filter(e => e !== id) : state.dislikes,
      })),
    // redoLike: id =>
    //   set(state => {
    //     if (true) {
    //       return state;
    //     } else {
    //       return state;
    //     }
    //     // dislikes: state.dislikes.includes(id) ? state.dislikes.filter(e => e !== id) : state.dislikes,
    //   }),
  }));
};
