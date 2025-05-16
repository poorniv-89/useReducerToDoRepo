import { useReducer, useState } from "react";
import AddNewToDo from "./AddNewToDo";
import reducer from "../reducers/reducer";


export default function ToDoListItems() {
    const [items, dispatch] = useReducer(reducer, []);
    const [editText, setEditText] = useState("");

    return (
        <div className="toDoListCtnr">
            <AddNewToDo dispatch={dispatch} />
            <ul>
                {[...items]
                    .sort((a, b) => b.id - a.id)
                    .map((item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={() => {
                                    dispatch({ type: "isCompleted", id: item.id });
                                }}
                            />
                            {!item.completed && item.isEditing ? (
                                <>
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        placeholder="Edit item..."
                                    />
                                    <button
                                        onClick={() => {
                                            dispatch({
                                                type: "saveEdit",
                                                id: item.id,
                                                newText: editText
                                            });
                                            setEditText("");
                                        }}
                                    >
                                        Save
                                    </button>
                                </>
                            ) : (
                                <>
                                    {item.text}
                                    <button
                                        onClick={() => {
                                            setEditText(item.text);
                                            dispatch({ type: "editItem", id: item.id });
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        disabled={!item.completed}
                                        onClick={() => {
                                            if (item.completed) {
                                                dispatch({ type: "deleteItem", id: item.id });
                                            }
                                        }}
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}