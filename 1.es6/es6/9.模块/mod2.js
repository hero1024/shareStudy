export class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  show () {
    console.log(this.name, this.age);
  }
}