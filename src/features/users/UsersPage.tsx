import { useEffect, useState } from "react";
import { useUsersStore } from "./usersStore";
import Modal from "../../components/ui/Modal";
import UserForm from "./UserForm";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import Toast from "../../components/ui/Toast";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  birthdate: string;
  gender: "male" | "female" | "other";
  createdAt: string;
};

type UserInput = Omit<User, "id">;

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
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const create = async (u: UserInput) => {
    await addUser(u);
    setShowCreate(false);
    setToast({ message: "User created", type: "success" });
  };

  const edit = async (u: User) => {
    await updateUser(u);
    setEditUser(null);
    setToast({ message: "Updated", type: "success" });
  };

  const del = async () => {
    if (!showDelete) return;
    await deleteUser(showDelete.id);
    setShowDelete(null);
    setToast({ message: "Deleted", type: "success" });
  };

  return (
    <div className="px-4 py-4 md:px-10 max-w-screen-xl mx-auto">
      <h1 className="text-xl md:text-2xl font-bold mb-4">Users</h1>

      {toast && <Toast {...toast} />}

      <button
        onClick={() => setShowCreate(true)}
        className="bg-blue-100 text-blue-900 font-semibold text-sm md:text-base px-4 py-2 rounded-md mb-4"
      >
        + Create User
      </button>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-t-4 border-gray-500 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-2">First</th>
              <th className="px-2">Last</th>
              <th className="px-2">Birthdate</th>
              <th className="px-2">Gender</th>
              <th className="px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={5} className="py-4 text-center">
                  Loading...
                </td>
              </tr>
            )}
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="py-2 px-2">{u.firstName}</td>
                <td className="px-2">{u.lastName}</td>
                <td className="px-2">{new Date(u.birthdate).toLocaleDateString()}</td>
                <td className="px-2 capitalize">{u.gender}</td>
                <td className="px-2 flex flex-wrap gap-2 mt-2 md:mt-0">
                  <button
                    className="border px-3 py-1 rounded text-xs md:text-sm"
                    onClick={() => setEditUser(u)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded text-xs md:text-sm"
                    onClick={() => setShowDelete(u)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {!loading && users.length === 0 && (
              <tr>
                <td colSpan={5} className="py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showCreate && (
        <Modal title="Create user" onClose={() => setShowCreate(false)}>
          <UserForm onSave={create} onCancel={() => setShowCreate(false)} />
        </Modal>
      )}

      {editUser && (
        <Modal title="Edit user" onClose={() => setEditUser(null)}>
          <UserForm initial={editUser} onSave={edit} onCancel={() => setEditUser(null)} />
        </Modal>
      )}

      {showDelete && (
        <Modal title="Confirm delete" onClose={() => setShowDelete(null)}>
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
