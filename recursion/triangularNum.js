const triangularNum = (n, num = 0, newNum = 1) =>{
    if (n < 0){
        return -1;
    } else if (n === 0){
        return num
    }

    return triangularNum(n -1, num + newNum, newNum + 1 )
}

module.export = triangularNum