
var x = prompt("enter numpers");
let myFunc = num => Number(num);
var intArr = Array.from(String(x), myFunc);
console.log(intArr);
function  clcc2 (intArr){
    var sum =0;
    var average =0;
    for(i=0;i<intArr.length;i++){
        sum+=intArr[i];
    }
    average = sum/intArr.length;
    return alert(sum) , alert(average) ;
}
clcc2(intArr);
  
