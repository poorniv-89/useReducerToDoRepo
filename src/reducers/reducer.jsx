
const ACTIONS = {
    ADD_ITEM: "addItem",
    DELETE_ITEM: "deleteItem",
    IS_COMPLETED: "isCompleted",
    EDIT_ITEM: "editItem",
    SAVE_EDIT: "saveEdit"
};

export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            const newState = [
                ...state,
                {
                    text: action.text,
                    id: Date.now(),
                    completed: false,
                    isEditing: false
                }
            ];
            console.log("New state after ADD_ITEM:", newState);
            return newState;

        case ACTIONS.DELETE_ITEM:
            return state.filter(item => item.id !== action.id);

        case ACTIONS.IS_COMPLETED:
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            );
        case ACTIONS.EDIT_ITEM:
            return state.map(item =>
                item.id === action.id ? { ...item, isEditing: true } : item
            );

        case ACTIONS.SAVE_EDIT:
            return state.map(item =>
                item.id === action.id ? { ...item, text: action.newText, isEditing: false } : item
            );



        default:
            return state;
    }
}