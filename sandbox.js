const before = new Date('March 18 2022 3:18:00');
const now = new Date();

const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(`the blog was written ${days} days ago`);

const timestamp = 1675938474990;
console.log(new Date(timestamp));