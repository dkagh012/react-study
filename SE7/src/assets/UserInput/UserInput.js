import { useState } from "react";

function UserInput() {
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initialUserInput);
  const submitHandler = (evnet) => {
    evnet.preventDefault();
  };
  const resetHandler = () => {
    setUserInput(initialUserInput);
  };
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        // ...은 스프레드 연산자로써 이전 입력 상태 즉 10000의 라는 값을 복사하는것이다
        [input]: value,
      };
    });
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={
              (event) =>
                inputChangeHandler("current-savings", event.target.value)
              // 첫번쨰는 input 값 두번째는 value값
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={
              (event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              // 첫번쨰는 input 값 두번째는 value값
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={
              (event) =>
                inputChangeHandler("expected-return", event.target.value)
              // 첫번쨰는 input 값 두번째는 value값
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={
              (event) => inputChangeHandler("duration", event.target.value)
              // 첫번쨰는 input 값 두번째는 value값
            }
            value={userInput["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
export default UserInput;
