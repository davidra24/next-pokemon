import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface counterState {
    count: number
    isReeady: boolean,
}

const initialState: counterState = {
    count: 5,
    isReeady: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initContentState(state, action: PayloadAction<number>) {

            if (state.isReeady) return;

            state.count = action.payload
            state.isReeady = true
        },
        addOne(state: counterState) {
            state.count++
        },
        removeOne(state: counterState) {
            if (state.count === 0) return
            state.count--
        },
        resetCount(state: counterState, action: PayloadAction<number>) {
            if (state.count < 0) action.payload = 0
            state.count = action.payload
        }
    }
});

export const { addOne, removeOne, resetCount, initContentState } = counterSlice.actions

export default counterSlice.reducer