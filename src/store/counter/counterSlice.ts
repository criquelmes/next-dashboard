import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    increment: (state) => {
      state.count += 1;
    },
    // increment(state) {
    //     state.count ++;
    // },
    decrement: (state) => {
      state.count -= 1;
    },
    // decrement(state) {
    //   state.count--;
    // },
    reset: (state) => {
      state.count = 0;
    },
    // reset(state) {
    //   state.count = 0;
    // },
    setCounter: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    // setCounter(state, action: PayloadAction<number>) {
    //   state.count = action.payload;
    // }
  },
});

export const { increment, decrement, reset, setCounter, initCounterState } =
  counterSlice.actions;

export default counterSlice.reducer;
