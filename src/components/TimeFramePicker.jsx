import PropTypes from "prop-types";

function TimeFramePicker({ searchType, handleSetSearchType }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="dates">Choose Time Frame:</label>
      <select
        value={searchType}
        onChange={(e) => handleSetSearchType(e.target.value)}
        id="days"
        name="options"
      >
        <option value="randon">Randon Day</option>
        <option value="single">Single Day</option>
        <option value="range">Range</option>
      </select>
    </div>
  );
}

TimeFramePicker.propTypes = {
  searchType: PropTypes.string.isRequired,
  handleSetSearchType: PropTypes.func.isRequired,
};

export default TimeFramePicker;
