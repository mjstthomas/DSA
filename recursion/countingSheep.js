const countingSheep = (sheep) =>{
  if (sheep <= 0){
    return console.log('all sheep jumped over the fence');
  }
  console.log(`${sheep}: Another sheep jumps over the fence`)
   setTimeout(()=>{
     countingSheep(sheep - 1)
   }, 1000);
}

module.export = countingSheep;