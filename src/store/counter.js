import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            //here we can use state.counter because behind the scene redux toolkit will form new object and
            // then the new object is returned and the existing state object is not manipulated.
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload;
        },
        decrease(state,action){
            state.counter = state.counter - action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
