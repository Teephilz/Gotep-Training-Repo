const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const userService = {
  getUsers: async () => {
    const res = await fetch(BASE_URL);
    console.log(res.json);
    return res.json();
  },
  getUserById: async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  },
  addUser: async (data) => {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  updateUser: async (id, data) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  deleteUser: async (id) => {
    return await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  }
};
export default userService;
