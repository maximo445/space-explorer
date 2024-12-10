import PropTypes from "prop-types";

function DatePicker({
  searchType,
  startDate,
  endDate,
  handleStartDate,
  handleEndDate,
  rover,
}) {
  let landingDate = "";

  if (rover === "curiosity") landingDate = "2012-08-05";
  if (rover === "spirit") landingDate = "2004-01-04";
  if (rover === "opportunity") landingDate = "2004-01-25";

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
              min={landingDate}
            />
          </span>
        </span>
      )}
    </>
  );
}

DatePicker.propTypes = {
  searchType: PropTypes.string.isRequired,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  handleStartDate: PropTypes.func.isRequired,
  handleEndDate: PropTypes.func.isRequired,
  rover: PropTypes.string.isRequired,
};

export default DatePicker;
