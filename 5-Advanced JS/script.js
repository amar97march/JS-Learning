//funstions and constructor

//var Person = function (name, dob, job){
//    this.name = name;
//    this.dob = dob;
//    this.job = job;
////    this.calculateAge = function(){
////        console.log(2019 - this.dob);
////    }
//}
//
//var amar = new Person('Amar', 1997, 'Student');
//
//console.log(amar.name, amar.dob, amar.job);
////amar.calculateAge();
//
//Person.prototype.calculateAge = function(){
//    console.log(2019 - this.dob);
//}
//
//amar.calculateAge();
//
//var arr = [1995,1992,1998,1994,1997];
//
//function ageArray(arr, fn){
//    var returnArray = [];
//    for(var i = 0; i < arr.length; i++){
//        returnArray.push(fn(arr[i]));
//    }
//    return returnArray;
//}
//
//function calculateAge(a){
//    return (2019 - a);
//}
//
//console.log(ageArray(arr,calculateAge))

//function interviewQues(job){
//    if (job === 'teacher'){
//        return function(name){
//            console.log(name + ', what do you teach?');
//        }
//    }else if (job === 'designer'){
//        return function(name){
//            console.log(name + ', what do you design?');
//        }
//    } else {
//        return function(name){
//            console.log(name + ', what do you do?');
//        }
//    }
//}
//
//
//var teacherQues = interviewQues('teacher');
//var designerQues = interviewQues('designer');
//
//teacherQues('amar');
//designerQues('Amar');

//
////IIFE
//
//(function (luck) {
//    var score = Math.random() * 10;
//    console.log(score >= 5 - luck );
//  })(5) ;
//
////Closure
//function retirement(year){
//    var a = ' to be retired.';
//    return function (age){
//        console.log((year - age) + a);
//    }
//}
//
//var usRetirment = retirement(65);
//var indianRetirement = retirement(63);
//var europeRetirement = retirement(60);
//
//usRetirment(22);
//indianRetirement(22);
//europeRetirement(22);

//
//// bind, call, apply
//
//john = {
//    name: 'John',
//    job : 'student',
//    age : 22,
//    presentation : function (style, timeOfDay){
//        if (style === 'formal'){
//            console.log('Good ' + timeOfDay + ' I\'m ' + this.name + ' .I\'m ' + this.age + ' years old '+ this.job + '.');
//        } else if(style === 'friendly'){
//            console.log('Heyya. It\'s ' + timeOfDay + ' I\'m ' + this.name + ' .I\'m ' + this.age + ' and a '+ this.job + '.')
//        }
//        
//    }
//};
//
//john.presentation('friendly','morning');
//
////now call
//var emily = {
//    name : 'Emily',
//    job : 'teacher',
//    age : 24
//};
//
//john.presentation.call(emily,'formal','night');
//
//// now bind
//var emilyFunc = john.presentation.bind(emily,'friendly','noon');
//emilyFunc();
//
//// now apply. its only for passing arguments as array



//coding challenge - the input challenge
(function(){
function Question(ques,answers, correct){
    this.ques = ques;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQues = function(){
    
    console.log(this.ques);
    
    for(var i = 0; i< this.answers.length; i++){
        console.log(i + '. '+ this.answers[i]); 
    }
}

Question.prototype.checkAnswer = function(ans){
    if (this.correct === ans){
        console.log('Correct answer!');
    } else {
        console.log('Wrong answer. Try again')
    }
}

var q1 = new Question('Who is Microsoft\'s owner?',['No one', 'Bill Gates','Tim cook'],1);
var q2 = new Question('Biggest car company?',['Honda','maruti','Ferarri'],0);


var questions = [q1, q2];
var n = Math.floor(Math.random() * questions.length);
questions[n].displayQues();

var answer = parseInt(prompt('Please select the correct answer'));

questions[n].checkAnswer(answer);



  
})();

