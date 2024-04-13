/*Finding your seat on a plane is never fun, particularly for a long haul flight... You arrive, realise again just how little leg room you get, and sort of climb into the seat covered in a pile of your own stuff.

To help confuse matters (although they claim in an effort to do the opposite) many airlines omit the letters 'I' and 'J' from their seat naming system.

the naming system consists of a number (in this case between 1-60) that denotes the section of the plane where the seat is (1-20 = front, 21-40 = middle, 40+ = back). This number is followed by a letter, A-K with the exclusions mentioned above.

Letters A-C denote seats on the left cluster, D-F the middle and G-K the right.

Given a seat number, your task is to return the seat location in the following format:

'2B' would return 'Front-Left'.

If the number is over 60, or the letter is not valid, return 'No Seat!!'.

*/

function planeSeat(a){
   var seat1= a.split('')
   var seatarray = a.split('').map(Number);
   var lettersystem1=['A','B','C'];
   var letter2 =['D','E','F'];
   var letter3 =['G','H','K'];
   var letter4 =['I','J']
   var numbersystem = [];
     for (i=0;i<seatarray.length;i++){
        if (Number.isInteger(seatarray[i])){
           numbersystem.push(seatarray[i])
           }}
   var onlynumbers = numbersystem.join('');
   var seatnumber = Number(onlynumbers);
   var position=''
   if (seatnumber<=20){
     position='Front'
   } else if(seatnumber>20&&seatnumber<=40){
     position='Middle'
   }else if (seatnumber>40&&seatnumber<=60){
     position='Back'
   }
   
   var letterseat='';
   for (i=0; i<seat1.length;i++){
      for (j=0;j<lettersystem1.length;j++){
       if(seat1.includes(lettersystem1[j])){
         letterseat='Left'}
   
       } for(k=0;k<letter2.length;k++){if (seat1.includes(letter2[k])){
         letterseat='Middle'
       }} for (l=0;l<letter3.length;l++){if (seat1.includes(letter3[l])){
         letterseat='Right'
       }};
        var seatlocation=position +'-'+ letterseat   ;
       for (m=0;m<letter4.length;m++){
         if((seat1.includes(letter4[m])||(seatnumber>60))){
   seatlocation='No Seat!!'}
       }
    return seatlocation                                    
   }}