import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../api/userService';

// Async thunks
export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
    return await userService.getUsers();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchUserById = createAsyncThunk('users/fetchUserById', async (id, thunkAPI) => {
  try {
    return await userService.getUserById(id);// Ensure userService.getUser(id) is defined
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const addUser = createAsyncThunk('users/addUser', async (data, thunkAPI) => {
  try {
    return await userService.addUser(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk('users/editUser', async ({ id, data }, thunkAPI) => {
  try {
    return await userService.updateUser(id, data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id, thunkAPI) => {
  try {
    await userService.deleteUser(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Initial state
const initialState = {
  users: [],
  selectedUser: null, 
  loading: false,
  error: null,
  success: false,
  editSuccess:false
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUserToList: (state, action) => {
      state.users.push(action.payload);
    },
    resetUserStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.editSuccess= false;
     state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH USERS
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      //Fetch User by Id

      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
        state.selectedUser = null;
        })
       .addCase(fetchUserById.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
        state.loading = false;
        state.success = true;
        })
        .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        state.selectedUser = null;
        })

      // ADD USER
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.loading = false;
        state.success = true;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // EDIT USER
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.editSuccess = false;
        
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
        state.loading = false;
        state.editSuccess = true;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.editSuccess = false;
      })

      // DELETE USER
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { addUserToList, resetUserStatus } = userSlice.actions;
export default userSlice.reducer;
