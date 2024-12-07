import PropTypes from "prop-types";

function MarsRoverPicker({ marsRover, handleSetMarsRover }) {
  return (
    <div>
      <label htmlFor="rover">Choose a Mars Rover:</label>
      <select
        value={marsRover}
        onChange={(e) => handleSetMarsRover(e.target.value)}
        id="rover"
        name="rover"
      >
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
  );
}

MarsRoverPicker.propTypes = {
  marsRover: PropTypes.string.isRequired,
  handleSetMarsRover: PropTypes.func.isRequired,
};

export default MarsRoverPicker;
