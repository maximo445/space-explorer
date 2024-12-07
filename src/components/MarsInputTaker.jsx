import { useState } from "react";

function MarsInputTaker() {
  const [searchType, setSearchType] = useState("randon");

  return (
    <div className="w-1/2">
      <div className="flex justify-center w-full p-8">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
          Explore Mars
        </h1>
      </div>

      <div className="p-10">
        <div className="flex justify-between items-center">
          <select
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            id="dropdown"
            name="options"
          >
            <option value="randon">Randon Day</option>
            <option value="single">Single Day</option>
            <option value="range">Range</option>
          </select>
          {searchType !== "randon" && (
            <span
              className={
                searchType === "single "
                  ? "flex justify-start w-full"
                  : "flex justify-around w-full"
              }
            >
              <span className="flex flex-col">
                <label htmlFor="start">Start Date</label>
                <input type="date" name="start" id="start" />
              </span>
              {searchType !== "single" && (
                <span className="flex flex-col">
                  <label htmlFor="end">End Date</label>
                  <input type="date" name="end" id="end" />
                </span>
              )}
            </span>
          )}
          <div>
            <label htmlFor="rover">Choose a Mars Rover:</label>
            <select id="rover" name="rover">
              <option value="FHAZ"> Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="MAST">Mast Camera</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default MarsInputTaker;
