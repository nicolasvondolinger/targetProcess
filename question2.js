function fibonacci(num){
  let sequence = [0, 1]

  if(num == 0 || num == 1){
    return true
  }

  quantity = num + 10

  for(let i = 2; i<quantity; i++){
    sequence[i] = sequence[i-1] + sequence[i-2]
    if(sequence[i] == num){
      return true
    }
  }

  return false
}

console.log(fibonacci(5))

//Expected output = true