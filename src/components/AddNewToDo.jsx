import { useState } from "react";

export default function AddNewToDo({ dispatch }) {
    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick() {
            dispatch({ type: "addItem", payload: { text: item } });
            setItem(""); 
    }

    return (
        <div>
            <input
                type="text"
                value={item}
                onChange={handleChange}
                placeholder="Add task..."
            />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}