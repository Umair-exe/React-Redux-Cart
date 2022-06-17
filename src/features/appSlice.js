import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isSidebar:false,
    isloading: false,
    error: false,
    done: false,
  },
  reducers: {
    start: (state) => {
      state.isloading = true;
    },
    success: (state) => {
      state.isloading =false;
      state.done = true;
    },
    sidebarOpen: (state) => {
    
      state.isSidebar = !state.isSidebar;

    },

    failure: (state) => {
      state.isloading= false;
      state.error = true;
    },
    end: (state) => {
      state.done = false;
      state.error = false;
    }
  }


});

export const {start,success,failure,end,sidebarOpen} = appSlice.actions;





export default appSlice.reducer;
