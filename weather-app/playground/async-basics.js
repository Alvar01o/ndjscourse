console.log('Starting app')
setTimeout(() => {
console.log('inside of the callback')
} , 2000)
setTimeout(() => {
console.log('Second of the callback')
} ,0)
console.log('Finishing app')
