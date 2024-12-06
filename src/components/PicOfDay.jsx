import { useEffect, useState } from "react";

function PicOfDay() {
  const [pic, setPic] = useState(null);
  const [isError, setIsError] = useState(false);
  const [imageElement, setImageElement] = useState(null);
  const [showFullText, setShowFullText] = useState(false);

  const buttonStyle =
    "px-3 py-1 mx-3  bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-purple-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300 ease-in-out";

  useEffect(() => {
    console.log("fecthing data");
    fetch("http://localhost:3000/picofday")
      .then((response) => response.json())
      .then((dataResponse) => {
        if (!dataResponse?.error) {
          setPic(dataResponse);
        }
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  useEffect(() => {
    if (!pic) return;
    if (pic?.url?.includes("youtube")) {
      setImageElement(
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
      setImageElement(<img className="w-full" src={pic?.url}></img>);
    }
  }, [pic?.url]);

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-purple-900 to-blue-800 w-1/2 p-8 rounded-lg text-slate-300">
      {pic && !isError && (
        <div className="flex flex-col items-center gap-4">
          <span className="flex gap-4">
            <h1 className="text-3xl font-bold">Todays highlight:</h1>
            <h1 className="text-3xl text-slate-400">{pic.title}</h1>
          </span>

          <div className="flex flex-col gap-6">
            {imageElement}
            <p className="w-full">
              {showFullText ? (
                <>
                  <span> {pic.explanation}</span>
                  <button
                    className={buttonStyle}
                    onClick={() => setShowFullText(false)}
                  >
                    hide
                  </button>
                </>
              ) : (
                <>
                  <span>{pic.explanation.substring(0, 100)}</span>
                  <button
                    className={buttonStyle}
                    onClick={() => setShowFullText(true)}
                  >
                    show
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
      {!isError && !imageElement && (
        <div className="w-full h-96 bg-slate-800 flex justify-center items-center">
          <h1 className="text-slate-50 text-4xl">Loading</h1>
        </div>
      )}
      {isError && (
        <div className="w-full h-96 bg-slate-800 flex justify-center items-center">
          <h1 className="text-slate-50 text-4xl">Error fecthing data</h1>
        </div>
      )}
    </div>
  );
}

export default PicOfDay;
