'use strict';

alert('Hello!  My name is Pratiibh and welcome to my questionaire!');

var hat_question = prompt('I am usually wearing a hat.  Is this hat a Mariners hat?');
console.log('Do I wear my Mariners hat?  Their answer was ' + hat_question + '.');
var question_correct_answer = 'Correct!';
var question_wrong_answer = 'Wrong!';
var wat = 'That doesn\'t answer the question.';

if(hat_question === 'no' || hat_question === 'NO' || hat_question === 'n' || hat_question === 'N') {
   alert(question_correct_answer);
} else if (hat_question === 'yes' || hat_question === 'YES' || hat_question === 'y' || hat_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}

var seat_question = prompt('Do I sit in the back of the classroom?');
console.log('Do I sit in the back of the class?  Their answer was ' + seat_question + '.');

if(seat_question === 'no' || seat_question === 'NO' || seat_question === 'n' || seat_question === 'N') {
    alert(question_wrong_answer);
} else if (seat_question === 'yes' || seat_question === 'YES' || seat_question === 'y' || seat_question === 'Y') {
    alert(question_correct_answer);
} else {
    alert(wat);
}

var comp_question = prompt('Do I use a Macbook?');
console.log('Am I a victim of Steve Jobs in terms of the laptop market?  Their answer was ' + comp_question + '.');

if(comp_question === 'no' || comp_question === 'NO' || comp_question === 'n' || comp_question === 'N') {
    alert(question_correct_answer);
} else if (comp_question === 'yes' || comp_question === 'YES' || comp_question === 'y' || comp_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}

var phone_question = prompt('Do I use an Android phone?');
console.log('Did I still end up becoming a victim of Steve Jobs through the phone market?  Their answer was ' + phone_question + '.');

if(phone_question === 'no' || phone_question === 'NO' || phone_question === 'n' || phone_question === 'N') {
    alert(question_correct_answer);
} else if (phone_question === 'yes' || phone_question === 'YES' || phone_question === 'y' || phone_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}

var clothes_question = prompt('Do I wear the color pink often?');
console.log('Do I wear pink often?  Their answer was ' + clothes_question + '.  The real question should\'ve been how often is too often?');

if(clothes_question === 'no' || clothes_question === 'NO' || clothes_question === 'n' || clothes_question === 'N') {
    alert(question_correct_answer);
} else if (clothes_question === 'yes' || clothes_question === 'YES' || clothes_question === 'y' || clothes_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}

