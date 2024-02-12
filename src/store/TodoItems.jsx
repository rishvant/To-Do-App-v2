import { createContext } from "react";

const TodoItems = createContext({
    todoItems: [],
    addNewItem: () => { },
    deleteItem: () => { },
});

export default TodoItems;