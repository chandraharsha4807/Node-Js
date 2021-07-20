const addDays = require("date-fns/addDays");

function getAddedDate(days) {
  const newDate = addDays(new Date(2020, 7, 22), days);
  console.log(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
}

getAddedDate(7);
