import { useReducer } from "react";
import AddNewToDo from "./AddNewToDo";
import reducer from "../reducers/reducer";


export default function ToDoListItems() {
    const [items, dispatch] = useReducer(reducer, []);

    return (
        <div className="toDoListCtnr">
            <AddNewToDo dispatch={dispatch} />
            <ul>
                {items.map((item) => (
                    <li><input type="checkbox"/>{item.text}
                    <button>Edit</button><button>Delete</button></li>
                ))}
            </ul>
        </div>
    );
}