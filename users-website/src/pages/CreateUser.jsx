import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, resetUserStatus } from "../redux/userSlice";

export default function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.users);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // Navigate on success
    if (success) {
      dispatch(resetUserStatus());
      navigate("/");
    }

    // Reset status on unmount
    return () => {
      dispatch(resetUserStatus());
    };
  }, [success, dispatch, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    dispatch(addUser(formData));
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New User</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded shadow-sm"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded shadow-sm"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Create"}
        </button>
      </form>
    </div>
  );
}
