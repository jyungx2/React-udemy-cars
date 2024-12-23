import { createSlice } from "@reduxjs/toolkit";
// 340~341. Form Reset on Submission & Reminder on ExtraReducers
import { addCar } from "./carsSlice";

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
      state.cost = action.payload; // 오타 발생 -> undefined -> parseInt(e.target.value) = NaN || 0 ... 한글만 입력되고, 숫자는 입력 안됨
    },
  },

  // 340~341. Form Reset on Submission & Reminder on ExtraReducers
  extraReducers(builder) {
    // addCar === action obj - type: 'cars/addCar'
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

// 각각의 리듀서들로부터 동일한 이름으로 자동으로 생성되는 action creator들을 actions 객체로부터 뽑아옴과 동시에 송출!
export const { changeName, changeCost } = formSlice.actions;
// One single combined mega reducer (s ❌)
export const formReducer = formSlice.reducer;
