
const ACTIONS = {
    ADD_ITEM: "addItem"
};

export default function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_ITEM:
            return [...state, { text: action.payload.text }];
        default:
            return state;
    }
}