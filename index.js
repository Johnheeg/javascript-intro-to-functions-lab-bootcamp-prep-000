function shout(string) {
  return string.toUpperCase() //makes it upper case
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) { //lower case so she can't hear
    return "I can\'t hear you!"
  }
  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  else {
    return "I love you, too."
  }

}



var uppercase = "HELLO!"

uppercase.toUpperCase() === uppercase //true
