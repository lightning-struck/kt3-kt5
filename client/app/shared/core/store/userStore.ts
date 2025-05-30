import { createStore } from 'zustand';

export type UserState = {
  user_id: number;
  user_login: string;
  user_phone: string
  user_email: string
};

export type UserActions = {
  setUser: (user_id: number, user_login: string, user_email: string, user_phone: string) => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  user_id: 0,
  user_login: '',
  user_phone: '',
  user_email: ''
};

export const initUserStore = (): UserState => {
  return defaultInitState;
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()(set => ({
    ...initState,
    setUser: (user_id, user_login, user_email, user_phone) =>
      set(() => ({
        user_id,
        user_login,
        user_email,
        user_phone
      })),
  }));
};
