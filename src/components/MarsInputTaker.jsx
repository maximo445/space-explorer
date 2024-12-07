import { useState } from "react";
import TimeFramePicker from "./TimeFramePicker";
import MarsRoverPicker from "./MarsRoverPicker";
import CuriosityCameraPicker from "./CuriosityCameraPicker";

function MarsInputTaker() {
  const [searchType, setSearchType] = useState("randon");
  const [marsRover, setMarsRover] = useState("curiosity");
  const [camera, setCamera] = useState("fhaz");

  return (
    <div className="w-1/2">
      <div className="flex justify-center w-full p-8">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
          Explore Mars
        </h1>
      </div>

      <div className="p-10">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex w-full items-start">
            <TimeFramePicker
              searchType={searchType}
              handleSetSearchType={setSearchType}
            />
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
          </div>

          <div className="flex w-full justify-between my-8">
            <MarsRoverPicker
              marsRover={marsRover}
              handleSetMarsRover={setMarsRover}
            />
            {marsRover === "curiosity" && (
              <CuriosityCameraPicker
                camera={camera}
                handleSetCamera={setCamera}
              />
            )}
          </div>
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}

export default MarsInputTaker;
