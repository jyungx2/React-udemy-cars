import { createSlice, nanoid } from "@reduxjs/toolkit";
// * nanoid: function for getting a randomly generated ID.

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      // ✅ we're gonna assume action obj is gonna have a payload attached to it that should be the new search term.
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      // ✨Redux에서 payload: 상태 변경에 필요한 데이터를 담는 용도로 표준화되어 사용
      // ✍🏼 Assumption:
      // action.payload === {name: 'ab, cost: 150}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // nanoid: Math.random()대신, redux-toolkit에 의해 제공되는 함수 사용!
      });
    },

    removeCar(state, action) {
      // ✍🏼 Assumption:
      // action.payload === the id of the car we want to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
