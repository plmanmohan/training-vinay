import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './taskSlice.js';
import userReducer from './userSlice.js';
const store = configureStore({
    reducer: {
        taskList: taskReducer,
        user: userReducer
    }
});

export default store;