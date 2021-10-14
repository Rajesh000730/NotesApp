import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    email:false,
    password:false,
    photo:false,
    visible:"hidden",
    username:" ",
    datar:[]
  },
  reducers: {
    increment: (state) => {
      state.auth = true
    },
    decrement:(state)=>{
        state.auth = false
    },
    setemailtrue:(state)=>{
      state.email = true;
      state.password = false;
      state.photo = false;
      state.visible = "visible"
    },
    setpasswordtrue:(state)=>{
      state.password = true
      state.email = false;
      state.photo = false;
      state.visible = "visible"
    },
    setfalse:(state)=>{
      state.email = false;
      state.password = false;
      state.photo = false;
      state.visible = "hidden"

    },
    setusername:(state,name)=>{
      state.username = name.payload;
    },
    setdatar:(state, data)=>{
      state.datar = [...state.datar, data.payload]

    },
    setdeletedatar:(state, data)=>{
      state.datar = state.datar.splice(data.payload, 1)

    }


  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setemailtrue, setpasswordtrue, setfalse, setusername, setdatar, setdeletedatar } = counterSlice.actions

export default counterSlice.reducer