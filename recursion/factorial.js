const factorial = (num, fac = 1) => {
    if (num < 0){
      return -1
    } else if (num === 0){
      return fac
    }
    return factorial(num -1, fac * num)
  }

  module.export = factorial