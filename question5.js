function reverseString(string){
  let stringToReturn = ''
  for (let i = 1; i <= string.length; i++) {
    stringToReturn += string[string.length - i]
  }
  console.log(String(stringToReturn))
}

reverseString('nicolas')

//Expected output = 'salocin'