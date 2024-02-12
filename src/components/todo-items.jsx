import "../styles/items.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../slice/todoSlice";
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";

const Items = () => {
    const dispatch = useDispatch();
    const todoItems = useSelector((state) => state.todo);
    const handleDelete = (todoDate) => {
        dispatch(deleteTodo({ todoDate }));
        toast.error("Todo removed!", {
            icon: <MdDelete style={{ color: "red" }} />
        });
    }

    return (
        <div className="container text-center">
            {todoItems?.map((item, index) => (
                <div className="row" key={index}>
                    <div className="col-4 item">{item.todoName}</div>
                    <div className="col-4 item-date">{item.todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-danger delete-btn" onClick={()=>handleDelete(item.todoDate)}><RiDeleteBinLine className="delete-icon" /></button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items;