const initialState = {
    taskList: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                taskList: [...state.taskList, action.payload],
            };
        case "REMOVE_TASK":
            return {
                ...state,
                taskList: state.taskList.filter((task) => task !== action.payload),
            };
        default:
            return state;
    }
}

export {initialState};
export default reducer;

