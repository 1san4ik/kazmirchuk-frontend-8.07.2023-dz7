//Task 1
const userRow1 = String(prompt('Введіть перше слово:'))
const userRow2 = String(prompt('Введіть друге слово:'))
const userRow3 = String(prompt('Введіть третє слово:'))
alert(userRow1+userRow2+userRow3)

// Task 2
const numberUser = prompt('Введіть п\'ятизначне число:')
const numberUser2 = numberUser.toString().split('').map(Number)
const numberOutput = numberUser2.join(' ')
alert('Цифри у вихідному порядку: ' + numberOutput)
