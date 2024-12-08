import { useState } from "react";
import TimeFramePicker from "./TimeFramePicker";
import MarsRoverPicker from "./MarsRoverPicker";
import CameraPicker from "./CameraPicker";
import DatePicker from "./DatePicker";
import { curiosityCameras } from "../utils/cameras";
import { osCameras } from "../utils/cameras";

function MarsInputTaker() {
  const [searchType, setSearchType] = useState("randon");
  const [marsRover, setMarsRover] = useState("curiosity");
  const [camera, setCamera] = useState("fhaz");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  function getMarsStuff() {
    console.log({ rover: marsRover, camera, startDate, endDate });
  }

  async function fetchMarsData() {
    const params = {
      camera: camera,
      rover: marsRover,
    };

    if (startDate) {
      params.earth_date = startDate;
    } else {
      params.earth_date = "";
    }

    const queryString = new URLSearchParams(params).toString();

    const url = `http://localhost:3000/mars-photos?${queryString}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data response was not ok");
      } else {
        const data = await response.json();

        console.log(data);
      }
    } catch (error) {
      console.error("There was a problem fecthing the data:", error);
    }
  }

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
            <DatePicker
              searchType={searchType}
              startDate={startDate}
              endDate={endDate}
              handleStartDate={setStartDate}
              handleEndDate={setEndDate}
            />
          </div>

          <div className="flex w-full justify-between my-8">
            <MarsRoverPicker
              marsRover={marsRover}
              handleSetMarsRover={setMarsRover}
            />
            {marsRover === "curiosity" && (
              <CameraPicker
                camera={camera}
                handleSetCamera={setCamera}
                cameraTypes={curiosityCameras}
              />
            )}

            {marsRover !== "curiosity" && (
              <CameraPicker
                camera={camera}
                handleSetCamera={setCamera}
                cameraTypes={osCameras}
              />
            )}
          </div>
          <button onClick={fetchMarsData}>Go</button>
        </div>
      </div>
    </div>
  );
}

export default MarsInputTaker;
