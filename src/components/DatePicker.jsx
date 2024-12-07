import PropTypes from "prop-types";

function DatePicker({
  searchType,
  startDate,
  endDate,
  handleStartDate,
  handleEndDate,
}) {
  return (
    <>
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
            <input
              value={startDate}
              onChange={(e) => handleStartDate(e.target.value)}
              type="date"
              name="start"
              id="start"
            />
          </span>
          {searchType !== "single" && (
            <span className="flex flex-col">
              <label htmlFor="end">End Date</label>
              <input
                value={endDate}
                onChange={(e) => handleEndDate(e.target.value)}
                type="date"
                name="end"
                id="end"
              />
            </span>
          )}
        </span>
      )}
    </>
  );
}

DatePicker.propTypes = {
  searchType: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  handleStartDate: PropTypes.func.isRequired,
  handleEndDate: PropTypes.func.isRequired,
};

export default DatePicker;
