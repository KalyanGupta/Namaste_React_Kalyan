import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "cart",

    initialState: {
        items: []
    },

    reducers:{
        addItem: (state, action) =>{

            //Mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) =>{
            //  state.items.pop();
            // console.log(action.payload);

            // const itemIndex = state.items.indexOf(action.payload);
            // //console.log(itemIndex);
            console.log(current(state));
            console.log(action.payload);

            const itemIdToremove = action.payload.card.info.id;
            console.log(itemIdToremove);

            // Find the index of the item with the matching id

            const itemIndex = state.items.findIndex(
                item => item.card.info.id === itemIdToremove
            )
            console.log(itemIndex);

            // Remove the item from the array using splice
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }

        },
        clearCart: (state, action) =>{
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} = cartSlice.actions;