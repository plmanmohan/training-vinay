import {createSlice} from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'taskList',
    initialState: {
        taskList: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.taskList.push(action.payload);
            // state = {...state, taskList: [...state.taskList, action.payload],}
        },
        removeTask: (state, action) => {
            state.taskList = state.taskList.filter(task => task !== action.payload);
        },
    },

});
export const {addTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;