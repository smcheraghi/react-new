const obj={
    name: 'ali',
    getname() {
        return this.name
    }
}

const d = obj.getname.bind(obj)
console.log(d())

const e = obj.getname.bind({name: 'mohi'})
console.log(e())