import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    initialState: initialState,
    name: 'counter',
    reducers: {
        increment: (state) => {
            state.counter = state.counter + 1;
        },
        decrement: (state) => {
            state.counter = state.counter - 1;
        },
        incrementFromUserInput: (state, action) => {
            state.counter = state.counter + action.payload;
        },
        reset: (state) => {
            state.counter = 0;
        }
    }
});

export const { increment, decrement, reset, incrementFromUserInput } = counterSlice.actions;
export default counterSlice.reducer;