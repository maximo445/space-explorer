import PropTypes from "prop-types";

function CameraPicker({ camera, handleSetCamera, cameraTypes }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="camera">Camera:</label>
      <select
        value={camera}
        onChange={(e) => handleSetCamera(e.target.value)}
        id="camera"
        name="camera"
      >
        {cameraTypes.map((cam) => (
          <option key={cam.a} value={cam.a}>
            {cam.camera}
          </option>
        ))}
      </select>
    </div>
  );
}

CameraPicker.propTypes = {
  camera: PropTypes.string.isRequired,
  handleSetCamera: PropTypes.func.isRequired,
  cameraTypes: PropTypes.array.isRequired,
};

export default CameraPicker;
