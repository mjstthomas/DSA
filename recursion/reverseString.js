const reverseString = str =>{
    if (str === ''){
      return ''
    }
  
    const newStr = str[0];
  
    return reverseString(str.slice(1)) + newStr
  }

  module.export = reverseString