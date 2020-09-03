const powerCalculator =(num, exp)=>{

  if(exp <= 0){
    return console.log('increase number')
  } 
  if ( exp === 1){
    return num
  }
  return num * powerCalculator(num , exp-1) 

}

module.export = powerCalculator