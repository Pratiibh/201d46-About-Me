'use strict';

alert('Hello!  My name is Pratiibh and welcome to my questionaire!');

var correct_answers = 0;
var question_correct_answer = 'Correct!';
var question_wrong_answer = 'Wrong!';
var wat = 'That doesn\'t answer the question.';

function questionOne() {

var hat_question = prompt('I am usually wearing a hat.  Is this hat a Mariners hat?');
console.log('Do I wear my Mariners hat?  Their answer was ' + hat_question + '.');

if(hat_question === 'no' || hat_question === 'NO' || hat_question === 'n' || hat_question === 'N') {
   alert(question_correct_answer);
   correct_answers++;
} else if (hat_question === 'yes' || hat_question === 'YES' || hat_question === 'y' || hat_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}
}
questionOne();


function questionTwo() {
var question_correct_answer = 'Correct!';
var question_wrong_answer = 'Wrong!';
var wat = 'That doesn\'t answer the question.';

var seat_question = prompt('Do I sit in the back of the classroom?');
console.log('Do I sit in the back of the class?  Their answer was ' + seat_question + '.');

if(seat_question === 'no' || seat_question === 'NO' || seat_question === 'n' || seat_question === 'N') {
    alert(question_wrong_answer);
} else if (seat_question === 'yes' || seat_question === 'YES' || seat_question === 'y' || seat_question === 'Y') {
    alert(question_correct_answer);
    correct_answers++;
} else {
    alert(wat);
}
}
questionTwo();

function questionThree() {

var comp_question = prompt('Do I use a Macbook?');
console.log('Am I a victim of Steve Jobs in terms of the laptop market?  Their answer was ' + comp_question + '.');

if(comp_question === 'no' || comp_question === 'NO' || comp_question === 'n' || comp_question === 'N') {
    alert(question_correct_answer);
    correct_answers++;
} else if (comp_question === 'yes' || comp_question === 'YES' || comp_question === 'y' || comp_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}
}
questionThree();

function questionFour() {

var phone_question = prompt('Do I use an Android phone?');
console.log('Did I still end up becoming a victim of Steve Jobs through the phone market?  Their answer was ' + phone_question + '.');

if(phone_question === 'no' || phone_question === 'NO' || phone_question === 'n' || phone_question === 'N') {
    alert(question_correct_answer);
    correct_answers++;
} else if (phone_question === 'yes' || phone_question === 'YES' || phone_question === 'y' || phone_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}
}
questionFour();

function questionFive() {

var clothes_question = prompt('Do I wear the color pink often?');
console.log('Do I wear pink often?  Their answer was ' + clothes_question + '.  The real question should\'ve been how often is too often?');

if(clothes_question === 'no' || clothes_question === 'NO' || clothes_question === 'n' || clothes_question === 'N') {
    alert(question_correct_answer);
    correct_answers++;
} else if (clothes_question === 'yes' || clothes_question === 'YES' || clothes_question === 'y' || clothes_question === 'Y') {
    alert(question_wrong_answer);
} else {
    alert(wat);
}
}
questionFive();

function questionSix() {

var counter_var = 0;
var guesses_remaining = 4;
var shoe_question = prompt('How many pairs of shoes do I own?');
console.log('Asked the user how many shoes I own, user guessed ' + shoe_question + ' on the first try.')
var shoe_question_answer = 6;
if(shoe_question < shoe_question_answer) {
    alert('Your guess was too low!');
    counter_var++;
} else if(shoe_question > shoe_question_answer){
    alert('Your guess was too high!');
    counter_var++;
} else if (shoe_question == shoe_question_answer){
    alert('You guessed it correctly on the first try!')
    correct_answers++;
}
guesses_remaining--;

console.log(counter_var + ' is what the variable counter_var is equal to.');
console.log(correct_answers + ' is what the variable correct_answers is equal to.');
// console.logging these variables helps me keep track of the code and if it is running correctly or not

if(counter_var === 1){
    for (var i = 0; i < guesses_remaining; i++) {
        console.log(guesses_remaining + ' is what the variable guesses_remaining is equal to.');
        var shoe_guess_two = prompt('Guess again!');
        console.log('Prompted user to guess again, user guessed ' + shoe_guess_two + '.')
        console.log(guesses_remaining + ' guesses remaining.')
        if(shoe_guess_two < shoe_question_answer) {
            alert('Your guess was too low!');
        } else if(shoe_guess_two > shoe_question_answer){
            alert('Your guess was too high!');
        } else if(shoe_guess_two == shoe_question_answer){
            alert('You guessed correctly this time!')
            correct_answers++;
            break;
        }
    }
}
}
questionSix();

function questionSeven() {

var question_seven_guesses = 6;
var vacation_states = ['California' , 'Florida' , 'New York' , 'Nevada'];
var states_travel = prompt('Can you guess one of the states I would like to travel to?');
question_seven_guesses--;
function letterCheck() {
    states_travel = states_travel.toUpperCase();
    for (var m = 0; m < vacation_states.length; m++) {
        vacation_states[m] = vacation_states[m].toUpperCase();
    }
}
letterCheck();
console.log('Prompted user to guess one of the states I would like to travel to, user answered with ' + states_travel + '.');
    if(states_travel === vacation_states[0] || states_travel === vacation_states[1] || states_travel === vacation_states[2] || states_travel === vacation_states[3]){
        alert('Congratulations, you guessed one of them correctly.  The full list of answers was: ' + vacation_states + '.');
        console.log('The user correctly guessed the answer!')
        correct_answers++;
    } else {
        console.log('The variable i will show which # guess the user is on.')
        console.log('The variable j will show which index of the array is being checked, and the last index checked will be the index at which the answer was located (if correctly answered).')
        loop_one: for (var i = 0; i < question_seven_guesses; i++) {
            console.log('The variable i is currently equal to ' + i + '.');
            var states_guess_again = prompt('Guess again!');
            function letterCheckTwo() {
                states_guess_again = states_guess_again.toUpperCase(); 
            }
            letterCheckTwo();
        console.log('Prompted user to guess one of the states again, they guessed ' + states_guess_again + '.');
            for (var j = 0; j < vacation_states.length; j++) {
                console.log('The variable j is currently equal to ' + j + '.');
                if(states_guess_again === vacation_states[j]){
                    alert('You guessed correctly this time!  The full list of correct answers was: ' + vacation_states + '.');
                    console.log('The user correctly guessed the answer this time.');
                    correct_answers++;
                    break loop_one;
                } else if(i == (question_seven_guesses - 1)) {
                    alert('You ran out of guesses.  The full list of correct answers was: ' + vacation_states + '.');
                    console.log('The user ran out of guesses.');
                    break loop_one;
                }
            }
    }
}


var user_name = prompt('What is your name?')
console.log('The name of the user is ' + user_name + '.');
if(correct_answers <= 3){
    alert('You only answered ' + correct_answers + ' of the 7 questions correctly, ' + user_name + '..  You don\'t know me at all.')
    console.log(user_name +  ' was only able to get ' + correct_answers + ' of the answers correctly.');
} else if((correct_answers >= 4) && (correct_answers <= 5)){
    alert('Not bad, ' + user_name + '.  You seem to know a decent amount about me.  You answered ' + correct_answers + ' of the 7 questions correctly.')
    console.log(user_name + ' got ' + correct_answers + ' correct answers.  Not bad.');
} else {
    alert('Wow, ' + user_name + '! You answered ' + correct_answers + ' of the 7 questions correctly!  Are you stalking me?')
    console.log(user_name + ' knows too much.  How is it possible to know ' + correct_answers + ' of the 7 correct answers?');
}
}
questionSeven();