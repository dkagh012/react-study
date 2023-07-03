function UserInput() {
  const submitHandler = (evnet) => {
    evnet.preventDefault();
  };
  const resetHandler = () => {};
  const inputChangeHandler = (input, value) => {};
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
