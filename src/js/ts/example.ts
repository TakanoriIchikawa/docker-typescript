// function expo2(amount: number) {
//   return amount ** 2
// }

// console.log(expo2(1000))

// function taxed(amount: number): number {
//   return amount * 1.1
// }

// function fee(amount: number): number {
//   return amount * 1.4
// }

// function price(amount: number): number {
//   return fee(amount)
// }

// console.log(price(500))

class Creature {
  numberOfHands: number
  numberOfFeet: number
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands
    this.numberOfFeet = numberOfFeet
  }
}

class Dog extends Creature {
  back: string
  constructor(back: string) {
    super(0, 4)
    this.back = back
  }
  barking() {
    return `${this.back}! ${this.back}!`
  }
  shakeTail() {
    console.log(this.barking())
  }
}

class Human extends Creature {
  name: string
  constructor(name: string) {
    super(2, 2)
    this.name = name
  }
  greet() {
    return `Hello! I'm ${this.name}.`
  }
  shakeHands() {
    console.log(this.greet())
  }
}

const creature = new Creature(0, 4)
const dog = new Dog('bow-wow')
const human = new Human('Hanako')

console.log('発火')
console.log(creature.numberOfHands)
console.log(creature.numberOfFeet)

console.log('ワンちゃん')
console.log(dog.numberOfHands)
console.log(dog.numberOfFeet)
console.log(dog.barking())
dog.shakeTail()

console.log('ヒューマン')
console.log(human.numberOfHands)
console.log(human.numberOfFeet)
console.log(human.greet())
human.shakeHands()

let list = ['this', 'is', 'a', 'test']

list.push('!')
console.log(list)

list = list.map(item => item.toUpperCase())
console.log(list)

let message = list.reduce((prev, current) => `${prev} ${current}`)
console.log(message)

function wait(duration: number): Promise<string> {
  return new Promise(resolve => {
    console.log(`ここから${duration}ミリ秒待機`)
    setTimeout(() => resolve(`${duration}ms passed`), duration)
  })
}

wait(2000).then(res => {
  console.log('2秒経過')
})


async function queue(): Promise<string> {
  const message = await wait(1000)
  return message
}

queue()



function waitThenString(duration: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve(`${duration}ms passed`), duration)
  })
}

function waitThenNumber(duration: number) {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(duration), duration)
  })
}

function waitAll() {
  return Promise.all([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(1000)
  ])
}

function waitRace() {
  return Promise.race([
    waitThenString(10),
    waitThenNumber(100),
    waitThenString(1000)
  ])
}

async function main() {
  const [a, b, c] = await waitAll()
  const result = waitRace()
}