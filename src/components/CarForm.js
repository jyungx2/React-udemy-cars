import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (e) => {
    // Every single one of our reducer functions expects to receive a payload property!
    // which is the new value the use type in.
    // ex) changeName(state, action) {
    // state.name = action.payload;
    // };
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0; // 유저가 숫자가 아닌, 다른 데이타타입을 입력해서 NaN이 나오게 되면 0을 반환해라.
    dispatch(changeCost(carCost)); // carCost = action.payload (slice 객체 만들 당시에 가정함.)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addCar({ name: name, cost: cost }));
    dispatch(addCar({ name, cost }));

    // 💥 Form Reset on Submission => 이렇게 해도 우리의 의도대로 작동은 하지만,(유저가 submit버튼 누른 후, 모든 인풋창이 리셋) react-redux의 관점에서는 dispatch() 함수를 최대한 안 쓰는 방향으로 가는게 맞다!
    // 👉 slice 객체 내에 extraReducers 함수를 생성하여 그 안에서 다른 슬라이스에서 가져온 리듀서를 첫번째 매개변수로 추가하여 사용할 수 있도록 설정하고, 두번째 매개변수로는 현재 슬라이스의 (state, action)을 불러와, state의 name, cost을 각각 '', 0으로 리셋하는 방법이 맞는 방법!.

    // ❌ 다음 코드는 되도록 쓰지 말자.
    // dispatch(changeCost(0));
    // dispatch(changeName(""));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          {/* # No.1 field */}
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          {/* # No.2 field */}
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
