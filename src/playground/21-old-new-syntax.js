// after adding plugin to .babelrc

class oldSyntax {
    constructor() {
        this.name= 'ali'
        this.getGreeding = this.getGreeding.bind(this)
    }
    getGreeding() {
        return `Hi, I am ${this.name}`
    }
}

const os = new oldSyntax()
console.log(os)

const getGreeding = os.getGreeding 
console.log(getGreeding())

//--------------------

class newSyntax {
    name='mohammad'
    getGreeding = () => {
        return `Hi, I am ${this.name}`
    }
}

const ns = new newSyntax()
console.log(ns)

const newGetGreeding = ns.getGreeding 
console.log(newGetGreeding())