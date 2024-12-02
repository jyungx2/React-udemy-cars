import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
      // ✅ we're gonna assume action.payload property is gonna tell us what the new name/cost should be. -> Big assumptions! -> Let's not forget that, we really just have to make a mental note!
    },
    changeCost(state, action) {
      state.cost = action.paylod;
    },
  },
});

// 각각의 리듀서들로부터 동일한 이름으로 자동으로 생성되는 action creator들을 actions 객체로부터 뽑아옴과 동시에 송출!
export const { changeName, changeCost } = formSlice.actions;
// One single combined mega reducer (s ❌)
export const formReducer = formSlice.reducer;
