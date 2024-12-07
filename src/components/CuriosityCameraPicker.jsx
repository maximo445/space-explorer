import PropTypes from "prop-types";
import { curiosityCameras } from "../utils/cameras";

function CuriosityCameraPicker({ camera, handleSetCamera }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="camera">Camera:</label>
      <select
        value={camera}
        onChange={(e) => handleSetCamera(e.target.value)}
        id="camera"
        name="camera"
      >
        {curiosityCameras.map((cam) => (
          <option key={cam.a} value={cam.a}>
            {cam.camera}
          </option>
        ))}
      </select>
    </div>
  );
}

CuriosityCameraPicker.propTypes = {
  camera: PropTypes.string.isRequired,
  handleSetCamera: PropTypes.func.isRequired,
};

export default CuriosityCameraPicker;
