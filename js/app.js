'use strict';

//name box prompt
let name = prompt('what is your name ?');
alert('Welcome to this quiz ..!' + name);
alert('Please Answer the following questions...');


//MYNAME
let myname = prompt('Is my name Haneen Y/N?');
myname = myname.toUpperCase();
if (myname == 'Y') {
    console.log(myname);
    alert('Correct!... Great you knew my name.😊');
}
else {
    console.log(myname);
    alert('Wrong answer ...! 🙁');
}

//MYAGE
let myage = prompt('am I 32 years Y/N ?');
myage = myage.toUpperCase();
if (myage == 'Y') {
    console.log(myage);
    alert('Correct!... Great you knew my age.😊');
}
else {
    console.log(myage);
    alert('Wrong answer ...! 🙁');
}

//MYMAJOR
let mymajor = prompt('Is my major related to computer Y/N ?');
mymajor = mymajor.toLowerCase();
if (mymajor == 'y') {
    console.log(mymajor);
    alert('Correct!... Great you knew my major.😊');
}
else {
    console.log(myage);
    alert('Wrong answer ...! 🙁');
}

//MYEXPERIENCE
let myexp = prompt('I have two years of experience Y/N ?');
myexp = myexp.toLowerCase();
if (myexp == 'y') {
    console.log(myexp);
    alert('Correct!... Great you knew my experience.😊');
}
else {
    console.log(myexp);
    alert('Wrong answer ...! 🙁');
}

//MYKIDS
let mykids = prompt('I have two Kids write Y/N ?');
mykids = mykids.toLowerCase();
if (mykids == 'y') {
    console.log(mykids);
    alert('Correct!... Great you knew the number of my kids.😊');
}
else {
    console.log(mykids);
    alert('Wrong answer ...! 🙁');
}

alert('thanks for answering the quiz ...! 😊😊😊')

