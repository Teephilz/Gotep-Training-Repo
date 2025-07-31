import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import UserCard from "../components/UserCard";
import MyLoader from "../utils/MyLoader";

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

      {loading && <MyLoader/>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <ul className="space-y-3">
        {(users || []).map((user) => (
          <UserCard key={user.id} email={user.email} name={user.name} id={user.id} ></UserCard>
        ))}
      </ul>

      <Link
        to="/create"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-[20px] hover:bg-blue-700"
      >
        Add New User
      </Link>
    </div>
  );
}
