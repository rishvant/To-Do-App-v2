import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const { todoName, todoDate } = action.payload;
            return [...state, { todoName, todoDate }];
        },
        deleteTodo: (state, action) => {
            const { key } = action.payload;
            return state.filter((item) => {
                item.todoDate !== key;
            });
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;