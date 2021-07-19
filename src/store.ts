import create from "zustand";

type Store = {
  users: {
    id: number;
    username: string;
    avatar: HTMLImageElement;
  }[];
};

const useStore = create<Store>((set, get) => ({
  users: [],
  fetchUsers: () => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((users) => set({ users: users }));
  },
}));

export default useStore;
