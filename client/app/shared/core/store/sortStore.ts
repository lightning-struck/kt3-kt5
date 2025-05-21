import { createStore } from 'zustand';

export type SortState = {
  brand: number[];
  battery_capacity: number[];
  screen_type: number[];
  screen_diagonal: number[];
  protection_class: number[];
  built_in_memory: number[];
  query: string;
  order: number;
  // зазор
  offset: number;
  // страница
  page: number;
  // лимит
  limit: number;
};

export type SortActions = {
  brandAction: (id: number) => void;
  batteryCapacityAction: (id: number) => void;
  screenTypeAction: (id: number) => void;
  screelDiagonalAction: (id: number) => void;
  protectionClassAction: (id: number) => void;
  builtInMemoryAction: (id: number) => void;
  queryAction: (q: string) => void;
  orderAction: (id: number) => void;
  changePage: (p: number) => void;
};

export type SortStore = SortState & SortActions;

export const defaultInitState: SortState = {
  brand: [],
  battery_capacity: [],
  screen_type: [],
  screen_diagonal: [],
  protection_class: [],
  built_in_memory: [],
  order: 0,
  query: '',
  offset: 0,
  page: 1,
  limit: 9,
};

export const initSortStore = (): SortState => {
  return defaultInitState;
};

export const createSortStore = (initState: SortState = defaultInitState) => {
  return createStore<SortStore>()(set => ({
    ...initState,
    changePage: page =>
      set(state => ({
        page,
        offset: state.limit * (page - 1),
      })),
    brandAction: id =>
      set(state => ({
        brand: state.brand.includes(id) ? state.brand.filter(e => e !== id) : state.brand.concat(id),
      })),
    batteryCapacityAction: id =>
      set(state => ({
        battery_capacity: state.battery_capacity.includes(id)
          ? state.battery_capacity.filter(e => e !== id)
          : state.battery_capacity.concat(id),
      })),
    screenTypeAction: id =>
      set(state => ({
        screen_type: state.screen_type.includes(id)
          ? state.screen_type.filter(e => e !== id)
          : state.screen_type.concat(id),
      })),
    screelDiagonalAction: id =>
      set(state => ({
        screen_diagonal: state.screen_diagonal.includes(id)
          ? state.screen_diagonal.filter(e => e !== id)
          : state.screen_diagonal.concat(id),
      })),
    protectionClassAction: id =>
      set(state => ({
        protection_class: state.protection_class.includes(id)
          ? state.protection_class.filter(e => e !== id)
          : state.protection_class.concat(id),
      })),
    builtInMemoryAction: id =>
      set(state => ({
        built_in_memory: state.built_in_memory.includes(id)
          ? state.built_in_memory.filter(e => e !== id)
          : state.built_in_memory.concat(id),
      })),
    queryAction: query =>
      set(() => ({
        query,
      })),
    orderAction: order =>
      set(() => ({
        order,
      })),
  }));
};
