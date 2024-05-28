function duplicateEncode(word){
    let strarray = word.split('')
    let resobj={}
    let newarray=[]
    for (let char of strarray){
        if(!resobj[char]){
            resobj[char]= 0
        }resobj[char] ++
        
    }
    for (let key in resobj){
        resobj[key]>1 ?  resobj[key]=')' :  resobj[key] ='('
           
       
    }
    for (let letter of strarray){
        for (let keys in resobj){
            if (letter === keys){
                newarray.push(resobj[keys])
            }
        }
    }
return newarray.join``
    
}
