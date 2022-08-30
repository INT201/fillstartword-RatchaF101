const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  if(word === undefined){
    return undefined
  }
  else if(word === null){
    return undefined
  }
  else if(word.includes(startWord) == true){
    return word
  }
  else{
    return word = startWord+word
  }
}
module.exports = fillStartWord

 