// import { value, label, returnFalse } from './test'
// const v1 = value
// const v2 = label
// const v3 = returnFalse

// console.log('発火')
// console.log(v1)
// console.log(v2)
// console.log(v3)

import UsersJson from './users.json'

interface User {
  "id": number,
  "created_at": string,
  "profile": {
    "name": {
      "first": string,
      "last": string
    },
    "age": number,
    "gender": string,
    "enable": boolean
  }
}

function output(user: User): void {
  console.log('通過')
  console.log(user)
}

// type Users = User[]
UsersJson.forEach(user => {
  output(user as User)
});

interface Props {
  "amount": number
}

function boxed(props: Props) {
  return { value: props.amount.toFixed(1) }
}

// function boxed<T extends Props>(props: T) {
//   return { value: props.amount.toFixed(1) }
// }


const box1 = boxed({ amount: 0 })

console.log('通過')
console.log(box1);


interface PersonProps {
  name: string
  age: number
  gender: 'male' | 'female' | 'other'
}

class Person<T extends PersonProps> {
  name: T['name']
  age: T['age']
  gender: T['gender']

  constructor (props: T) {
    this.name = props.name
    this.age = props.age
    this.gender = props.gender
  }
}

const person = new Person({
  name: 'Taro',
  age: 28,
  gender: 'male'
})

console.log('パーソン')
console.log(person)