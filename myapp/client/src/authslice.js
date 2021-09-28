import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    email:false,
    password:false,
    photo:false,
    visible:"hidden"
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


  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setemailtrue, setpasswordtrue, setfalse } = counterSlice.actions

export default counterSlice.reducer