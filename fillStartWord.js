const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word === undefined){
    return console.log('undefined')
  }
  else if(word === null){
    return console.log('undefined')
  }
  else if(word.includes(startWord) == true){
    return console.log(`"${word}"`)
  }
  else{
    return console.log(`"${startWord}${word}"`)
  }
}
module.exports = fillStartWord

 