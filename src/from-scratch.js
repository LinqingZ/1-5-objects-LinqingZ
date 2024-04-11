const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};
const person = {
  name: 'Sara',
  bio: 'Too cool 4 skool.',
  age: 32,
  isCool: true
}

// console.log(coolGreeting(person))

// Q2
const haveBirthday = (person) => {
  person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person['spyHandle'] = spyHandle
};
// becomeSecretAgent(person, 'hello')
// console.log(person)


// Q4
const carMaker = (name, maker, year) => {
  return {
    name: name,
    year: year,
    maker: maker,
    needsOilChange: false
  }
};

const weAreNotFriends = (person) => {

};

const listHobbies = () => {
};

const getNextOpponent = () => {
};

const listAllKeys = () => {
};

const listAllValues = () => {
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
