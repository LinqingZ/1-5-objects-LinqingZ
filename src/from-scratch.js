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


const carMaker = () => {
};

const weAreNotFriends = (person) => {
  return person.friends.pop()
};
const person1 = {
  name: 'Sara',
  age: 30,
  friends: ['Bob', 'Joe', 'Sally'],
}
// weAreNotFriends(person1)
// console.log(person1.friends)


const listHobbies = () => {
};

const getNextOpponent = (team) => {
  if (team.matches[0] === undefined) {
    return null
  } else {
    return team.matches[0].teamName
  }
};

const fighters = {
  name: 'Fighters',
  sport: 'basketball',
  wins: 3,
  location: {
    city: 'Bridgeport',
    state: 'CT',
  },
  matches: [
    {
      teamName: 'Dunkaroos',
      skill: 9,
      wins: 12,
    },
    {
      teamName: 'Space Jammers',
      skill: 10,
      wins: 16,
    },
    {
      teamName: 'Mustangs',
      skill: 6,
      wins: 10,
    },
  ]
}

//console.log(getNextOpponent(fighters))

const listAllKeys = () => {
};

const listAllValues = (obj) => {
  return Object.values(obj)
};
//console.log(listAllValues(fighters))


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
