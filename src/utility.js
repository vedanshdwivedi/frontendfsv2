const moment = require("moment");

const formatDateString = (data) => {
  return moment(data).format("DD-MM-YYYY HH:MM:SS");
};

module.exports = {
  formatDateString,
};
