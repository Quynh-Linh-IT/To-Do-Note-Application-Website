import { URL_API } from "~/config";
import { saveTokenToLocalStorage } from "~/const/tokenToLocalStorage";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const  initialState = {
    msg : '',
    email: '',
    password: '',
    token : '',
    isAuthenticated: false,
    isLoading: false,
    error: '',
}
const signInUser = createAsyncThunk('signInUser',async(body)=> {
    const res = await fetch(URL_API+'v3/615aedbc-5057-4b6c-a66a-b13fd285d069',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    return await res.json();
});
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut : (state,action) => {
            const {email , password , token} = action.payload;
            localStorage.removeItem('email');
            localStorage.removeItem('password');
            localStorage.removeItem('token');
            localStorage.removeItem('tokenExpiration');
            state.email = email;
            state.password = password;
            state.token = token;
        },
    },
    extraReducers : (builder) => {
        // ================= LOGIN =================
        builder.addCase(signInUser.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(signInUser.fulfilled,(state,action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.isAuthenticated = true;
            state.msg = action.payload.msg;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
            // SET LOCAL STORAGE
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('password', action.payload.password);
            saveTokenToLocalStorage(action.payload.token);
        });
        builder.addCase(signInUser.rejected,(state,action) => {
            state.isLoading = true;
        });
    }
});
  
export default authSlice.reducer;
export {signInUser};
export const {logOut} = authSlice.actions; 
