import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import userService from "../api/userService";
import { editUser, resetUserStatus } from "../redux/userSlice";
import MyLoader from "../components/MyLoader";


export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, editSuccess } = useSelector((state) => state.users);

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [fetching, setFetching] = useState(true);
  const [localError, setLocalError] = useState("");

  // Fetch the user's data for the form
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await userService.getUserById(id);
        setFormData({ name: user.name, email: user.email });
      } catch (err) {
        console.error(err);
        setLocalError("Failed to load user data.");
      } finally {
        setFetching(false);
      }
    };

    fetchUser();
  }, [id]);

  // Handle success + clean up
  useEffect(() => {
    if (editSuccess) {
      navigate("/");
    }

    return () => {
      dispatch(resetUserStatus());
    };
  }, [editSuccess, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setLocalError("Both name and email are required.");
      return;
    }

    dispatch(editUser({ id, data: formData }));
  };

  if (fetching) return <MyLoader/>;

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>

      {(localError || error) && (
        <p className="text-red-500 mb-4">{localError || error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded shadow-sm"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded shadow-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update User"}
        </button>
      </form>
    </div>
  );
}
