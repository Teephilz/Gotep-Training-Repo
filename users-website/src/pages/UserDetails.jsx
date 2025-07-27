import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserById, resetUserStatus } from "../redux/userSlice";


export default function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    selectedUser: user,
    loading,
    error,
  } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUserById(id));

    return () => {
      dispatch(resetUserStatus()); // clean up on unmount
    };
  }, [dispatch, id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    const resultAction = await dispatch(deleteUser(id));
    if (deleteUser.fulfilled.match(resultAction)) {
      navigate("/");
    }
    // If it fails, error will show from the Redux state
  };

  if (loading) return <p className="text-center">Loading user...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!user) return <p className="text-center text-red-500">User not found.</p>;

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>

      <div className="bg-white rounded shadow p-4 space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate(`/edit/${user.id}`)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        

        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
