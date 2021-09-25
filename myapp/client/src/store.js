import { configureStore } from '@reduxjs/toolkit'
import authslice from './authslice'

export default configureStore({
  reducer: {authslicered:
    authslice},
})