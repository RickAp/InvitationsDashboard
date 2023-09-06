import { createSlice } from '@reduxjs/toolkit';

interface Invitation {
  invitedName: string,
  entryDate: string,
  expirationDate: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null,
    invitations: [] as Invitation[],
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
    addInvitation: (state, action) => {
      state.invitations.push(action.payload);
    },
  },
});

export const { login, logout, addInvitation } = userSlice.actions;

export default userSlice.reducer;