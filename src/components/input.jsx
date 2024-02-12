import "../styles/input.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addTodo } from "../slice/todoSlice";
import toast from 'react-hot-toast';

const Input = () => {
    const dispatch = useDispatch();
    const todoNameRef = useRef(null);
    const todoDateRef = useRef(null);

    const handleButtonClick = async (event) => {
        event.preventDefault();
        const toDoName = todoNameRef.current.value;
        const todoDateVal = todoDateRef.current.value;
        try {
            if (toDoName === "") {
                toast.error("Please enter the todo");
            }
            else if (todoDateVal === "") {
                toast.error("Please enter todo date");
            }
            else {
                const toDoDate = new Date(todoDateVal).toLocaleDateString('en-IN');
                dispatch(addTodo({ todoName: toDoName, todoDate: toDoDate }));
                todoNameRef.current.value = "";
                todoDateRef.current.value = "";
                toast.success("Todo added successfully");
            }
        }
        catch (err) {
            console.log("Error:", err);
        }
    }

    return (
        <>
            <form className="input" onSubmit={handleButtonClick}>
                <input type="text" ref={todoNameRef} className="todo" placeholder="Enter Todo Here" />
                <input type="date" ref={todoDateRef} className="date" />
                <button type="submit" className="btn btn-success add-btn"><MdOutlineAddComment className="add-icon" /></button>
            </form>
        </>
    );
}

export default Input;
