// DESCRIPTION:
// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr){
    let resobj ={}
    for (let num of arr){
      if (!resobj[num]){
        resobj[num] = 0
      }resobj[num] ++
    }
    console.log(resobj)
    let res ={}
    for (numb in resobj){
      res[resobj[numb]]= numb
  }
    let arry =[]
    for (occur in res){
      arry.push(parseInt(occur))
    }
   return parseInt(res[Math.max(...arry)])
}