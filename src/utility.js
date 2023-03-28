const moment = require("moment");

const formatDateString = (data) => {
  return moment(data).format("DD-MM-YYYY HH:MM:SS");
};

const isDateOlderThanXDays = (targetDate, daysToCheck = 1) => {
  try {
    console.log(targetDate)
    console.log(daysToCheck)
    const now = new Date();
    const newDate = new Date(targetDate);
    const xDayMilliseconds = daysToCheck * 24 * 60 * 60 * 1000;
    return now - newDate > xDayMilliseconds;
  } catch (error) {
    console.log(
      `Error in calculating Date Difference : ${JSON.stringify(error)}`
    );
    return false;
  }
};

module.exports = {
  formatDateString,
  isDateOlderThanXDays
};
