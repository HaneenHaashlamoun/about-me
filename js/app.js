'use strict';

//name box prompt

let score = 0;
let answer1 = '';
function Q1(answer1) {

    answer1 = answer1.toUpperCase();
    if (answer1 == 'Y') {
        //console.log(answer1);
        alert('Correct!... Great you knew name.😊');
        score++;
    } else if (answer1 == 'N') {
        //console.log(answer1);
        alert('Wrong answer ...! 🙁');
    }
    else {
        alert('Please answer with yes or no only..!');
    }
    return;
}





let answer2 = '';
function Q2(answer2) {

    answer2 = answer2.toUpperCase();
    if (answer2 == 'Y') {
        //console.log(answer);
        alert('Correct!... Great you knew age.😊');
        score++;
    } else if (answer2 == 'N') {
        //console.log(answer2);
        alert('Wrong answer2 ...! 🙁');
    }
    else {
        alert('Please answer2 with yes or no only..!');
    }
    return;
}


let answer3 = '';
function Q3(answer3) {

    answer3 = answer3.toUpperCase();
    if (answer3 == 'Y') {
        //console.log(answer3);
        alert('Correct!... Great you knew major.😊');
        score++;
    } else if (answer3 == 'N') {
        //console.log(answer3);
        alert('Wrong answer ...! 🙁');
    }
    else {
        alert('Please answer with yes or no only..!');
    }
    return;
}



let answer4 = '';
function Q4(answer4) {

    answer4 = answer4.toUpperCase();
    if (answer4 == 'Y') {
        //console.log(answer4);
        alert('Correct!... Great you knew experince.😊');
        score++;
    } else if (answer4 == 'N') {
        //console.log(answer4);
        alert('Wrong answer ...! 🙁');
    }
    else {
        alert('Please answer with yes or no only..!');
    }
    return;
}





let answer5 = '';
function Q5(answer5) {

    answer5 = answer5.toUpperCase();
    if (answer5 == 'Y') {
        //console.log(answer5);
        alert('Correct!... Great you knew kids😊');
        score++;
    } else if (answer5 == 'N') {
        //console.log(answer5);
        alert('Wrong answer ...! 🙁');
    }
    else {
        alert('Please answer with yes or no only..!');
    }
    return;
}

// Guess Game
let gameAnswer = '';
function guessGame(gameAnswer) {
    for (let x = 0; x < 4; x++) {
        guessnum = prompt('Guess a number between 1-10 ?');
        guessnum = parseInt(guessnum);

        if (guessnum == 5) {
            alert('Correct!... Great Job.😊');
            score++;
            break;
        }
        else if (guessnum > 5) {
            alert('Try less 😊');
        }
        else if (guessnum < 5) {
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
}


// movie guess
let movie = '';
function movieGuess(movie) {
    attemptsLoop: for (let x = 0; x < 6; x++) {
        movie = prompt('What is my favorite movie ??...');
        movie = movie.toLocaleLowerCase();
        for (let j = 0; j < movieArr.length; j++) {
            if (movie == movieArr[j]) {
                alert('Great Job..! 😊');
                alert('My Movies: (forest gump, matrix, die hard, pinocchio, the exorcist, carol, casablanca, theintern,godfather,the dark knight)');
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
            alert('My Movies: (forest gump, matrix, die hard, pinocchio, the exorcist, carol, casablanca, theintern,godfather,the dark knight)');
        }
    }
}




let name = prompt('what is your name ?');
alert('Welcome to this quiz ..!' + name);
alert('Please Answer the following questions...');


// Calling ************************
//MYNAME
let myname = prompt('Is my name Haneen Y/N?');
Q1(myname);


//MYAGE
let myage = prompt('am I 32 years Y/N ?');
Q2(myage);



//MYMAJOR
let mymajor = prompt('Is my major related to computer Y/N ?');
Q3(mymajor);



//MYEXPERIENCE
let myexp = prompt('I have two years of experience Y/N ?');
Q4(myexp);


// MYKIDS
let mykids = prompt('I have two Kids write Y/N ?');
Q5(mykids);


// Counter of the number
let guessnum = prompt('Guess a number between 1-10 ?');
guessGame(guessnum);



//the movie guess Array
let movieArr = ['forest gump', 'matrix', 'die hard', 'pinocchio', 'the exorcist', 'carol', 'casablanca', 'theintern', 'godfather', 'the dark knight'];
let movieAnswer = prompt('What is my favorite movie ??...');
movieGuess(movieAnswer);






alert(`DONE 😊, thanks for answering ${name} 😊😊😊. Your scored ${score} /7 `);





