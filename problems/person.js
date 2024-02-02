class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hello my name is ${this.name}`;
  }
  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }
  switchVisit(otherPerson) {
    otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object") {
      // console.error("invalid argument")
      throw new TypeError();
    }
    if (!obj.name || !obj.age) {
      throw new TypeError();
    }
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll() {}
}

module.exports = Person;
