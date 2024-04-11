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
  return person.friends.pop()
};
const person1 = {
  name: 'Sara',
  age: 30,
  friends: ['Bob', 'Joe', 'Sally'],
}
// weAreNotFriends(person1)
// console.log(person1.friends)


const listHobbies = (person) => {
  // if (person && person.hobbies && person.hobbies.length > 0){}
  for (let hobby of person.hobbies){
    console.log(`${person.name} likes ${hobby}.`)
  }
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

// Q8
const listAllKeys = (anObject) => {
  return Object.keys(anObject)
};

const listAllValues = (obj) => {
  return Object.values(obj)
};
//console.log(listAllValues(fighters))


// Q10
const convertToMatrix = (objects) => {
  let output = []
  if (objects.length>0){
    // console.log(`object inside`)
    output.push(Object.keys(objects[0]))
    // console.log(Object.keys(objects[0]))
    for (let obj of objects){
      output.push(Object.values(obj))
    }
  return output
  }else{
    return output
  }
};

const users = [
  {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
  },
  {
    name: 'Bob',
    age: 30,
    bio: "Kind of mean if we're being honest",
  },
];

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
