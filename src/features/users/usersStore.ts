import create from 'zustand';
import { usersService } from './usersService';

// Define the User type according to your application's user model
type User = {
  id: string;
  name: string;
  email: string;
  // add other user fields here
};

export const useUsersStore = create<{
  users: User[];
  loading: boolean;
  fetchUsers: () => Promise<void>;
  addUser: (u: User) => Promise<void>;
  updateUser: (u: User) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
}>((set, get) => ({
  users: [],
  loading: false,
  fetchUsers: async () => {
	set({ loading: true });
	const users = await usersService.getAll();
	set({ users: users as User[], loading: false });
  },
  addUser: async (u: User) => {
	set({ loading: true });
	await usersService.add(u);
	await get().fetchUsers();
  },
  updateUser: async (u: User) => {
	set({ loading: true });
	await usersService.update(u);
	await get().fetchUsers();
  },
  deleteUser: async (id: string) => {
	set({ loading: true });
	await usersService.remove(id);
	await get().fetchUsers();
  }
}));