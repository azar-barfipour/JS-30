const inventors = [
  { first: "Albert", last: "Anistein", year: "1889", passed: "1995" },
  { first: "Isac", last: "Newton", year: "1643", passed: "1727" },
  { first: "Galileo", last: "Galilei", year: "1564", passed: "1642" },
  { first: "Marie", last: "Curie", year: "1867", passed: "1934" },
  { first: "Juhannes", last: "Kepler", year: "1571", passed: "1630" },
  { first: "Nicolaus", last: "Kopernicus", year: "1473", passed: "1543" },
  { first: "Max", last: "Planck", year: "1858", passed: "1947" },
];

// born in 1500's

const inventor1500 = inventors.filter(
  (inventor) => inventor.year >= "1550" && inventor.year < "1600"
);
console.table(inventor1500);

// array of first and last

const fullName = inventors.map(
  (inventor) => `${inventor.first} , ${inventor.last}`
);
console.log(fullName);

// sort year from oldest to youngest
const sorted = inventors.sort((a, b) => a.year - b.year);
console.log(sorted);

// how many years live
const live = inventors.reduce(
  (acc, inventor) => acc + (inventor.passed - inventor.year),
  0
);
console.log(live);

// sort by years lived

const sortLived = inventors.sort((a, b) => {
  const old = a.passed - a.year;
  const young = b.passed - b.year;
  return old > young ? -1 : 1;
});
console.log(sortLived);

//
const arr = ["azar barfi", "masoud arefi", "azade carfi", "ana darfi"];
const alph = arr.sort((a, b) => {
  const [first, last] = a.split(" ");
  const [first2, last2] = b.split(" ");
  return last > last2 ? 1 : -1;
});
console.log(alph);

// section 2

const people = [
  { name: "Wes", year: "1988" },
  { name: "Kate", year: "1986" },
  { name: "Irv", year: "1970" },
  { name: "Lux", year: "2015" },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Supper good", id: 523424 },
  { text: "You are the best", id: 523425 },
  { text: "Nice Nice Nice", id: 523426 },
];

// any 19
const nighteen = people.some((person) => {
  return new Date().getFullYear() - person.year >= 19;
});
console.log(nighteen);

// every 19
const everyNighteen = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(everyNighteen);

// find a comment with an ID = 523424
const commentId = comments.find((comment) => comment.id === 523424);
console.log(commentId);

// find index of comment with id = 523426
const commentIndex = comments.findIndex((comment) => comment.id === 523426);

console.log(commentIndex);

const newComments = [...comments];
console.log(newComments);

const del = newComments.splice(commentIndex, 1);
console.log(del);
console.log(newComments);
console.log(comments);
