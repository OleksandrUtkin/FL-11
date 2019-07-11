function getMin(){
  let args = Array.from(arguments)
  let min = args[0];
  for (let i=0; i<args.length; i++) {
    if (min>args[i]) {
      min = args[i]
    }
  }
  return min
}
getMin(15,12,18)