import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  // 344. Derived State in useSelector
  // data(= list of cars) + searchTerm(검색어에 따른 데이터 필터링!) => filterdCars (Derived State!)
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  console.log(cars);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
