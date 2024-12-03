import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  // 344. Derived State in useSelector
  // data(= list of cars) + searchTerm(검색어에 따른 데이터 필터링!) => filterdCars (Derived State!)
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    // ✍🏼바로 리턴하지 않고, 변수를 만들어서 리턴하도록!
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      // 1) 유저가 입력한 검색어를 포함한 car 객체들만 배열로 리턴.
      cars: filteredCars, // ✍🏼바로 리턴하지 않고, 변수를 만들어서 cars라는 속성으로 리턴하도록! -> 밑에 renderedCars 렌더링할 때 쓰일 배열.

      // 2) 유저가 Name 입력창에 입력한 값 = form.name 을
      // name이라는 속성값에 저장하고, 💫이걸 렌더링 하기 직전에
      // 'bold' 라는 변수를 통해 해당 car 객체가 text-bold 처리가 돼야할 지 결정💫
      name: form.name, // ✅ 이 부분 때문에, 객체로 한꺼번에 같이 리턴한 것!
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    // 💫 DECIDE IF THIS CAR SHOULD BE BOLD
    // * name = form.name = 유저가 Name 인풋에 입력한 스트링
    // * car.name의 '소문자 버전'이 지금 유저가 입력한 스트링의 '소문자 버전'을 포함하고 있니? => True이면, 포함한다는 얘기 = bolded 처리..
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
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
