import { ADD_ITEM, DELETE_ITEM } from '../actionConstants';

const initialState = [
    {
        id: 0,
        text: 'This is a todo',
        completed: false,
    },
];

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return [
                ...state,
                {
                    id: state.length,
                    completed: false,
                    text: action.text,
                },
            ];
        case types.DELETE_ITEM:
            return state.filter(todo =>
                todo.id !== action.id
            );
        default:
            return state;
    }
}
