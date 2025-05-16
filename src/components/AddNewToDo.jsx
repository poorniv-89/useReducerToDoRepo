import { useState } from "react";

export default function AddNewToDo({ dispatch }) {
    const [item, setItem] = useState("");

    return (
        <div>
            <input
                type="text"
                value={item}
                onChange={(e) => { setItem(e.target.value) }}
                placeholder="Add task..."
            />
            <button onClick={() => {
                if (!item) {
                    alert("Add something to the to-do list! It cannot be blank!");
                    return;
                } dispatch({ type: "addItem", text: item }); setItem("")
            }}>Add</button>
        </div>
    );
}