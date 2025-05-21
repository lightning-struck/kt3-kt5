import { createStore } from 'zustand';

export type UserState = {
  user_id: number;
  user_login: string;
};

export type UserActions = {
  setUser: (user_id: number, user_login: string) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user_id: 0,
  user_login: '',
};

export const initUserStore = (): UserState => {
  return defaultInitState;
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(set => ({
    ...initState,
    setUser: (user_id, user_login) =>
      set(() => ({
        user_id,
        user_login,
      })),
  }));
};
