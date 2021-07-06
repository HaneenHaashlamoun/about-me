'use strict';

//name box prompt
let name = prompt('what is your name ?');
alert('Welcome to this quiz ..!' + name);
alert('Please Answer the following questions...');

let score = 0;

//MYNAME
let myname = prompt('Is my name Haneen Y/N?');
myname = myname.toUpperCase();
if (myname == 'Y') {
    //console.log(myname);
    alert('Correct!... Great you knew my name.😊');
    score++;
}
else {
    //console.log(myname);
    alert('Wrong answer ...! 🙁');
}

//MYAGE
let myage = prompt('am I 32 years Y/N ?');
myage = myage.toUpperCase();
if (myage == 'Y') {
    //console.log(myage);
    alert('Correct!... Great you knew my age.😊');
    score++;
}
else {
    //console.log(myage);
    alert('Wrong answer ...! 🙁');
}

//MYMAJOR
let mymajor = prompt('Is my major related to computer Y/N ?');
mymajor = mymajor.toLowerCase();
if (mymajor == 'y') {
    //console.log(mymajor);
    alert('Correct!... Great you knew my major.😊');
    score++;
}
else {
    //console.log(myage);
    alert('Wrong answer ...! 🙁');
}

//MYEXPERIENCE
let myexp = prompt('I have two years of experience Y/N ?');
myexp = myexp.toLowerCase();
if (myexp == 'y') {
    //console.log(myexp);
    alert('Correct!... Great you knew my experience.😊');
    score++;
}
else {
    //console.log(myexp);
    alert('Wrong answer ...! 🙁');
}

// //MYKIDS
let mykids = prompt('I have two Kids write Y/N ?');
mykids = mykids.toLowerCase();
if (mykids == 'y') {
    //console.log(mykids);
    alert('Correct!... Great you knew the number of my kids.😊');
    score++;
}
else {
    //console.log(mykids);
    alert('Wrong answer ...! 🙁');
}


// Counter of the number

for (let x = 0; x < 4; x++) {
    let guessnum = prompt('Guess a number between 1-10 ?');
    guessnum = parseInt(guessnum);

    if (guessnum == 5) {
        alert('Correct!... Great Job.😊');
        score++;
        break;
    }
    else if (guessnum > 5) {
        alert('Try less 😊');
    }
    else if (guessnum < 5){
        alert('Try more 😊');
    }
    else {
        alert('Enter valid value');
    }

    //Number of attempts
    if (x == 3) {
        alert('Wrong answer the right answer is 5...! 🙁');
    }

}

//the movie guess Array

let movieArr = ['Forest Gump', 'matrix', 'Die Hard', 'Pinocchio', 'The Exorcist', 'Carol', 'Casablanca', 'TheIntern'];

attemptsLoop: for (let x = 0; x < 6; x++) {
    let movie = prompt('What is my favorite movie ??...');
    movie = movie.toLocaleLowerCase();
    for (let j = 0; j < 10; j++) {
        if (movie == movieArr[j] ) {
            alert('Great Job..! 😊');
            // console.log(movieArr);
            scores++;
            break attemptsLoop;
        }
        else {
            alert("ERROR");
            break;
        }
    }
    //Test Number of attempts
    if (x == 5) {
        alert('My Movies: (Forest Gump, matrix, Die Hard, Pinocchio, The Exorcist, Carol, Casablanca, TheIntern)');
    }
}

alert(`DONE 😊, thanks for answering ${name} 😊😊😊. Your scored ${score} /7 `);





