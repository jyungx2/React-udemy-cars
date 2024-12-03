import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(
    ({ cars: { data, searchTerm } }) =>
      data
        .filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc, car) => acc + car.cost, 0)

    // Total Car Cost
    // ✅ 다음 for-of loop대신에 위의 reducer() 메소드 이용
    // let cost = 0;
    // for (let car of filteredCars) {
    //   cost += car.cost;
    // }
    // return cost;
  );
  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
