function calc(num1,num2,z){
var x = parseInt(num1);
var y = parseInt(num2);
var res =0;
var z ;
switch (z) {
    case "+":
        res=x+y;
        break;
        case "-":
            res=x-y;
        break;
        case "*":
            res=x*y;
            break;
            case "/":
                res=x/y;
                break;
    default:
        alert("enter a correct operator")
        break;
}
        return res ;
}
var x = prompt("enter frist numper");
var z = prompt("enter the operator");
var y = prompt("enter secound numper");
alert(calc(x,y,z));