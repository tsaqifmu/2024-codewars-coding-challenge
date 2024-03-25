function getDaysAndYear(year) {
  const daysInYear = isLeapYear(year) ? 366 : 365;
  return `${daysInYear} days, ${year}`;
}

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 !== 0) {
    return true;
  } else if (year % 400 !== 0) {
    return false;
  } else {
    return true;
  }
}
