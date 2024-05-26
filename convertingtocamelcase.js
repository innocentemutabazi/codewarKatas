// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"




function toCamelCase(str){
    let finalarray=[]
    if (str==='') return ''
  let strarray=str.split(/[-_]/)
  for (let i=1.;i<strarray.length;i++){
    let wordarray =strarray[i].split('')
    wordarray[0]= wordarray[0].toUpperCase()
    word = wordarray.join('')
    finalarray.push(word)
  }
    
    return strarray[0]+((finalarray).join(''))
  }

  //Refractor
  function toCamelCase(str){
    let strarray=str.split('')
    for (let i=0;i<strarray.length;i++){
      if (strarray[i]==='-'|| strarray[i]==='_'){
        strarray[i+1]=strarray[i+1].toUpperCase()
        strarray[i]=''
      }
    }
      return strarray.join('')
    }