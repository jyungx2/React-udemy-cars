import { createSlice, nanoid } from "@reduxjs/toolkit";
// * nanoid: function for getting a randomly generated ID.

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    // ✅ 되도록이면 slice 객체 name 속성값과 겹치지 않도록!
    // car -> data로 바꿔 써주자.
    // 액션 객체의 type 속성값 = (slice name) + '/' + (reducer name)으로 지정되기 때문에 헷갈리고, 나중에 store에 저장된 각각의 리듀서들이 다루는 state값에 접근해야 할 때, 코드가 좀 부적절..?하게 짜여질 수 있어서. ex) state.cars.cars
    data: [],
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
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // nanoid: Math.random()대신, redux-toolkit에 의해 제공되는 함수 사용!
      });
    },

    removeCar(state, action) {
      // ✍🏼 Assumption:
      // action.payload === the id of the car we want to remove
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
