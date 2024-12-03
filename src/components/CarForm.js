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
