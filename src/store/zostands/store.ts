import { create } from "zustand";
import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

type UserStore = {
  username: string;
  setUsername: (username: string) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000)); // fetch your data here instead of setTimeout
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));

export const useUserStore = create<UserStore>((set) => ({
  username: "" ,
  setUsername:  (username: string) => {
    storage.set("user.name", username);
    set(() => ({ username: username }));

  },
}));
