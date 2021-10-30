import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    userprofile: []
    
    
  },
  reducers: {
    increment: (state) => {
      state.auth = true;
      console.log(state.auth)
    },
    decrement:(state)=>{
        state.auth = false
        
    },
   

    setuserprofile:(state, action)=>{
      state.userprofile = [...state.userprofile, action.payload];
      console.log(state.userprofile)

    }


  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, setuserprofile } = counterSlice.actions

export default counterSlice.reducer