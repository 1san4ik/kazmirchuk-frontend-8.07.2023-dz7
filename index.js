//Task 1
const userRow1 = String(prompt('Введіть перше слово:'))
const userRow2 = String(prompt('Введіть друге слово:'))
const userRow3 = String(prompt('Введіть третє слово:'))
alert(userRow1+userRow2+userRow3)

// Task 2
const numberUser = prompt('Введіть п\'ятизначне число:')
const numberUser2 = numberUser.toString()
console.log('numberUser2 =>' + numberUser2)
const numberUser3 = numberUser2.split('')
console.log('numberUser3 =>' + numberUser3)
const numberUser4 = numberUser3.map(Number)
console.log('numberUser4 =>' + numberUser4)

const numberOutput = numberUser4.join(' ')
alert('Цифри у вихідному порядку: ' + numberOutput)
