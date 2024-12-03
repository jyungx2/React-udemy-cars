import { useSelector } from "react-redux";

function CarList() {
  const cars = useSelector((state) => {
    return state.cars.data;
  });
  console.log(cars);

  const handleCarDelete = (car) => {};

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
