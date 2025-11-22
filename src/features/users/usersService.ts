import { getDb } from '../../lib/db';

type User = {
  // Define user properties here, for example:
  id: string;
  name: string;
  email: string;
  // Add other fields as needed
};

export const usersService = {
  async getAll() {
	const db = await getDb();
	return await db.getAll('users');
  },
  async add(u: User) {
	const db = await getDb();
	await db.put('users', u);
  },
  async update(u: User) {
	const db = await getDb();
	await db.put('users', u);
  },
  async remove(id: string) {
	const db = await getDb();
	await db.delete('users', id);
  }
};