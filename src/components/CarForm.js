import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state) => {
    return state.form.name;
  });

  const handleNameChange = (e) => {
    // Every single one of our reducer functions expects to receive a payload property!
    // which is the new value the use type in.
    // ex) changeName(state, action) {
    // state.name = action.payload;
    // };
    dispatch(changeName(e.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
