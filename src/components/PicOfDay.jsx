import { useEffect, useState } from "react";
import spacePhoto from "../assets/space-photo.jpg";

function PicOfDay() {
  const [pic, setPic] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/picofday")
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log(dataResponse);
        setPic(dataResponse);
      });
  }, []);

  let imageElement = null;

  if (pic?.url.includes("youtube")) {
    imageElement = (
      <iframe
        className="w-full"
        height="380"
        src={pic?.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    );
  } else {
    imageElement = <img className="w-2/3" src={pic?.url}></img>;
  }

  return (
    <div className="flex justify-center items-center">
      {pic ? (
        <div className="w-4/6">
          <h1>{pic.title}</h1>
          <div className="flex flex-col gap-10">
            {imageElement}
            <p className="w-full">{pic.explanation}</p>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen bg-slate-800 flex justify-center items-center">
          <h1 className="text-slate-50 text-4xl">Loading</h1>
        </div>
      )}{" "}
    </div>
  );
}

export default PicOfDay;
