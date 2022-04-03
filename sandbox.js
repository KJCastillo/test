const now = new Date();

console.log(dateFns.isToday(now));

console.log(dateFns.format(now, "YYYY"));
console.log(dateFns.format(now, "MMM"));
console.log(dateFns.format(now, "Do"));
console.log(dateFns.format(now, "dddd, MMMM Do YYYY"));

const before = new Date('March 18 2022 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));