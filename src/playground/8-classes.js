class Person {
    constructor(name='anonymous', age=0) {
        this.name = name,
        this.age = age
    }

    getDescription(){
        return `${this.name} is ${this.age} years old!`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

const p = new Student('Mohammad', 37, 'computer science')
console.log(p.getDescription())

const p1= new Student('Ali', 30)
console.log(p1.getDescription())
