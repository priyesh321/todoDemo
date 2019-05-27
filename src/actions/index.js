import { ADD_ITEM, DELETE_ITEM } from '../actionConstants';

export const addItem = text => ({
    type: ADD_ITEM,
    text
});

export const deleteItem = (text, id) => ({
    type: DELETE_ITEM,
    id
});


