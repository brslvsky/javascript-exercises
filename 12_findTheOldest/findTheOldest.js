const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  const findTheOldest = function(people) {
    let oldestPerson = null;
    let highestAge = 0;
  
    // loop through all the people
    for (let person of people) {
      // calculate the age of the person
      let age = 0;
      if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
      } else {
        age = new Date().getFullYear() - person.yearOfBirth;
      }
  
      // if this person is older than the current oldest person, update the variables
      if (age > highestAge) {
        oldestPerson = person;
        highestAge = age;
      }
    }
  
    return oldestPerson;
  };

console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
