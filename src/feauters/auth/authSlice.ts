import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IUser {
  surname: string | null;
}

const initialState: IUser = { surname: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.surname = action.payload.surname;
    },
    clearUser: (state) => {
      state.surname = null;
    },
  },
});

export const selectUser=(state:RootState)=>state.auth.surname
export const { addUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
