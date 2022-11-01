import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {registration, login} from "../../http/userAPI"


export const dataAuth = createAsyncThunk("auth/dataAuthStatus", async(params, {dispatch}) => {
   const {email, password, isAuth} = params;
   try {
      let data;
      if (isAuth) {
         data = await login(email, password);
      } else {
         data = await registration(email, password); 
      }
      dispatch(setIsAuth(true));
      dispatch(setLogin(true));
      return data
   } catch (e) {
      alert(e.response.data.message)
   }
})

const initialState = {
   user: {},
   isAuth: false,
   email: "",
   password: "",
   status: "Loading",
   login: false,
};

const dataAuthSlice = createSlice({
   name: "auth",
   initialState,

   reducers: {
      setEmail: (state, action) => {
         state.email = action.payload;
      },
      setPassword: (state, action) => {
         state.password = action.payload;
      },
      setIsAuth: (state, action) => {
         state.isAuth = action.payload;
         let authStatus = JSON.stringify(state.isAuth);
         localStorage.setItem("authStatus", authStatus);
      },
      setUser: (state, action) => {
         state.user = action.payload;
      },
      setLogin: (state, action) => {
         state.login = action.payload;
         let loginStatus = JSON.stringify(state.login);
         localStorage.setItem("loginStatus", loginStatus);
      },
   },
   extraReducers: {
   [dataAuth.pending]: (state) => {
      state.status = "Loading";
   },
   [dataAuth.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = "Success";
   },
   [dataAuth.pending]: (state) => {
      state.status = "Error";
   },
   }
});

export const { setEmail, setPassword, setIsAuth, setUser, setLogin } = dataAuthSlice.actions;

export default dataAuthSlice.reducer;
