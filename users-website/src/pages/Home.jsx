import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    // Only fetch if users are empty
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="space-y-3">
        {(users || []).map((user) => (
          <li key={user.id} className="p-4 bg-slate-200 rounded-2xl shadow ">
            <div className="flex justify-between items-center px 2">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <Link
                to={`/user/${user.id}`}
                className="text-blue-500 hover:underline"
              >
                View
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <Link
        to="/create"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add New User
      </Link>
    </div>
  );
}
