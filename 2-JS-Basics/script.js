/*Js basics
*/
/*
console.log("Hello World !!!!!");
var firstName = 'Amar';
console.log(firstName);

var lastName = 'Singh';
var age = 28;
var fullAge = true
console.log(fullAge)
*/
//
//var firstName = 'Amar';
//var age = 22;
//
//console.log(firstName + ' ' + age);
//
//var job, isMarried;
//job = 'student';
//isMarried = false;
//console.log(firstName + ' is a ' + age + ' years old ' + job + '.Is he married? ' + isMarried);
//age = 'twenty two';
//alert(firstName + ' is a ' + age + ' years old ' + job + '.Is he married? ' + isMarried);
//
//var lastName = prompt('What is his last name?');
//console.log(firstName + ' ' + lastName);
//age = 22;
//var now = 2019;
//var yob = now - age;
//console.log('age is ' + yob);
//var checkBool = now < age;
//console.log('Bool is ' + checkBool);
//

//functions
//function calculateAge(birthYear){
//    return 2019 - birthYear;
//}
//
//var ageAmar = calculateAge(1997);
//console.log(ageAmar);
//
//function retirement(firstName, year){
//    var age = calculateAge(year);
//    retirementYears = 65 - age;
//    if (retirementYears > 0) {
//        console.log(firstName + ' retires in ' + retirementYears + ' years');
//    }
//    else {
//        console.log(firstName + ' is already retired.')
//    }
//}
//
//retirement('Amar', 1997);
////Function expression
//var whatDoYouDo = function(job, firstName){
//    switch(job){
//        case 'teacher':
//            return firstName + ' teaches.';
//        case 'driver':
//            return firstName + ' drives';
//        case 'designer':
//            return firstName + ' designs';
//        default:
//            return firstName + ' does something else.';
//    }
//}
//
//console.log(whatDoYouDo('teacher', 'Amar'));

////Arrays
//var names = ['amar','John','Rahul'];
//names[4] = 'Raj';
//names.push('Suraj');
//
//names.unshift('Mr.');
//console.log(names);
//var popped = names.pop();
//console.log(popped);
//
//function tipCal(amount){
//    if (amount < 50){
//        return (amount *20)/100;
//    }else if(amount > 50 && amount < 200){
//        return (amount *15)/100;
//    }else{
//        return (amount *10)/  100;
//    }
//}
//
//bill = [22,73,250]
//tips = []
//totalBill = []
//
//for(i = 0;i<bill.length;i++){
//    tips.push(tipCal(bill[i]));
//    totalBill.push(bill[i] + tipCal(i));
//}
//
//console.log(tips);
//console.log(totalBill);

////Objects
//var amar = {
//    firstName : 'Amar',
//    lastName : 'Singh',
//    job : 'Student',
//    isMarried : false,
//    birthYear : 1997,
//    calAge : function() {
//        this.age = 2019 - this.birthYear;
//    }
//};
//
//amar.job = 'Employee';
//amar['job'] = 'designer';
//console.log(amar);
//amar.calAge();
//console.log(amar);
    
//This Keyword
calculateAge(1985);

function calculateAge(year){
    console.log(2019-year);
    console.log(this);
}