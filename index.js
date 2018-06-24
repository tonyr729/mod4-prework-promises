const testNum = (num) => {
  return new Promise((resolve, reject) => {
    if (num >= 10) {
      resolve(num + ' is greater than 10, success!')
    } else {
      reject(num + ' is less than 10, error!')
    }
  })
}

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))


  const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const upperWords = words.map(word => word.toUpperCase())
        resolve(upperWords)
      } else {
        reject('No, the array you passed in contained an element that was not a string!')
      }
    })
  }
  
  const sortWords = (words) => {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const sortedWords = words.sort()
        resolve(sortedWords)
      } else {
        reject('No, the array you passed in contained an element that was not a string!')
      }
    })
  }

  makeAllCaps(['wowow', 'pants', 'bird'])
    .then(words => sortWords(words))
    .then(result => console.log(result))
    .catch(error => console.log(error))

  makeAllCaps(['wowow', 5, 'bird'])
    .then(words => sortWords(words))
    .then(result => console.log(result))
    .catch(error => console.log(error))