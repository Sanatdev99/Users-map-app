import { useEffect, useState } from 'react';
import { useUsersStore } from './usersStore';
import Modal from '../../components/ui/Modal';
import UserForm from './UserForm';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import Toast from '../../components/ui/Toast';

type User = {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  gender: "male" | "female" | "other";
  createdAt: string;
};

type UserInput = Omit<User, 'id'>;

export default function UsersPage() {
  const { users, loading, fetchUsers, addUser, updateUser, deleteUser } =
	useUsersStore() as unknown as {
	  users: User[];
	  loading: boolean;
	  fetchUsers: () => Promise<void>;
	  addUser: (u: UserInput) => Promise<void>;
	  updateUser: (u: User) => Promise<void>;
	  deleteUser: (id: string) => Promise<void>;
	};
  const [showCreate, setShowCreate] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const [showDelete, setShowDelete] = useState<User | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
	fetchUsers();
  }, [fetchUsers]);

  const create = async (u: UserInput) => {
	await addUser(u);
	setShowCreate(false);
	setToast({ message: 'User created', type: 'success' });
  };

  const edit = async (u: User) => {
	await updateUser(u);
	setEditUser(null);
	setToast({ message: 'Updated', type: 'success' });
  };

  const del = async () => {
	if (!showDelete) return;
	await deleteUser(showDelete.id);
	setShowDelete(null);
	setToast({ message: 'Deleted', type: 'success' });
  };

  return (
	<div className='container-custom md:px-10 px-4 py-4'>
	  <h1 className='text-2xl font-bold mb-4'>Users</h1>
	  {toast && <Toast {...toast} />}
	  <button
		onClick={() => setShowCreate(true)}
		className='bg-brand-500 font-bold text-4xl text-blue-950 py-4 rounded-md mb-3'
	  >
		Create User
	  </button>
	  <table className='w-full text-left border-t-4 border-gray-500 text-2xl'>
		<thead>
		  <tr>
			<th className='py-2'>First</th>
			<th>Last</th>
			<th>Birthdate</th>
			<th>Gender</th>
			<th>Actions</th>
		  </tr>
		</thead>
		<tbody>
		  {loading && (
			<tr>
			  <td colSpan={5}>Loading...</td>
			</tr>
		  )}
		  {users.map((u) => (
			<tr key={u.id} className='border-t'>
			  <td className='py-2'>{u.firstName}</td>
			  <td>{u.lastName}</td>
			  <td>{new Date(u.birthdate).toLocaleDateString()}</td>
			  <td>{u.gender}</td>
			  <td>
				<button
				  className='border px-2 py-1 text-2xl rounded mr-2'
				  onClick={() => setEditUser(u)}
				>
				  Edit
				</button>
				<button
				  className='bg-red-600 text-white px-2 py-1 text-xl rounded'
				  onClick={() => setShowDelete(u)}
				>
				  Delete
				</button>
			  </td>
			</tr>
		  ))}
		  {!loading && users.length === 0 && (
			<tr>
			  <td colSpan={5}>No users</td>
			</tr>
		  )}
		</tbody>
	  </table>
	  {showCreate && (
		<Modal title='Create user' onClose={() => setShowCreate(false)}>
		  <UserForm onSave={create} onCancel={() => setShowCreate(false)} />
		</Modal>
	  )}
	  {editUser && (
		<Modal title='Edit user' onClose={() => setEditUser(null)}>
		  <UserForm initial={editUser} onSave={edit} onCancel={() => setEditUser(null)} />
		</Modal>
	  )}
	  {showDelete && (
		<Modal title='Confirm delete' onClose={() => setShowDelete(null)}>
		  <ConfirmDeleteModal
			name={showDelete.firstName}
			onConfirm={del}
			onCancel={() => setShowDelete(null)}
		  />
		</Modal>
	  )}
	</div>
  );
}