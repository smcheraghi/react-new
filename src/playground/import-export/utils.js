// ======================================== named export 
console.log('utils.js is running')

// const square = (a, b) => a * b 
// const add = (a, b) => a + b

// export {square, add}

// export const square = (a, b) => a * b 
// export const add = (a, b) => a + b


// =======================================default export

// const square = (a, b) => a * b 
// const add = (a, b) => a + b
// const subtract = (a, b) => a - b

// export {square, add, subtract as default}           // we can have only 0 or 1 default export


export const square = (a, b) => a * b 
export const add = (a, b) => a + b
// const subtract = (a, b) => a - b

// export default subtract           // we can have only 0 or 1 default export


export default (a, b) => a - b           