function MarsInputTaker() {
  return (
    <div className="w-1/2">
      <h1>Explore Mars</h1>
      <div>
        <div className="flex justify-between items-center">
          <select id="dropdown" name="options">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <span>
            <input type="date" name="start" id="start" />
            <input type="date" name="end" id="end" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarsInputTaker;
