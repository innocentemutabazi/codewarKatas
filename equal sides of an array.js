function findEvenIndex(arr)
{
    let sum=0
    let sum1=0
    for (var i=0 ; i<arr.length;i++){

        for (var j=0;j<i;j++){
            sum += arr[j]
            console.log(sum)

        }
        for (let l=j;l<arr.length;i++){
           sum1 += arr[l]
           console.log(sum1)
        }
    }
}
console.log(findEvenIndex([9,7,5,10,6]))