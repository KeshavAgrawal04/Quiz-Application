const user = {
    name: "Demo Name"
};

const setA = [
    {
        question: "What is JavaScript?",
        answers: [
            "A type of coffee",
            "A programming language",
            "A tool for creating animations",
            "A web browser"
        ],
        answer: "A programming language",
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: [
            "Using the 'var' keyword",
            "Using the 'let' keyword",
            "Using the 'const' keyword",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "What is the data type of '42' in JavaScript?",
        answers: [
            "Number",
            "String",
            "Boolean",
            "Undefined"
        ],
        answer: "String"
    },
    {
        question: "What is the result of adding a number and a string in JavaScript?",
        answers: [
            "An error",
            "A concatenated string",
            "The string is converted to a number",
            "The number is converted to a string"
        ],
        answer: "A concatenated string"
    },
    {
        question: "What is the purpose of comments in JavaScript?",
        answers: [
            "To make the code look colorful",
            "To add notes for other developers",
            "To prevent code execution",
            "To create new variables"
        ],
        answer: "To prevent code execution"
    },
    {
        question: "What is the operator for addition in JavaScript?",
        answers: [
            "+",
            "-",
            "*",
            "/"
        ],
        answer: "+"
    },
    {
        question: "What is the result of '5' + '5' in JavaScript?",
        answers: [
            "10",
            "55",
            "5 (as a string)",
            "Syntax error"
        ],
        answer: "5 (as a string)"
    },
    {
        question: "What is the operator for equality comparison in JavaScript?",
        answers: [
            "==",
            "===",
            "!=",
            "!=="
        ],
        answer: "==="
    },
    {
        question: "What does the '&&' operator do in JavaScript?",
        answers: [
            "Logical AND",
            "Logical OR",
            "Bitwise AND",
            "Bitwise OR"
        ],
        answer: "Logical AND"
    },
    {
        question: "What is the result of 'true && false' in JavaScript?",
        answers: [
            "true",
            "false",
            "Syntax error",
            "NaN"
        ],
        answer: "false"
    }
];

const setB = [
    {
        question: "What is a variable in JavaScript?",
        answers: [
            "A reserved word in JavaScript",
            "A container for storing data values",
            "A way to perform mathematical calculations",
            "A type of function"
        ],
        answer: "A container for storing data values"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answers: [
            "var",
            "let",
            "const",
            "variable"
        ],
        answer: "var"
    },
    {
        question: "What is the difference between 'let' and 'const' for variable declaration?",
        answers: [
            "There is no difference",
            "'let' can be reassigned, but 'const' cannot",
            "'const' can be reassigned, but 'let' cannot",
            "Both cannot be reassigned"
        ],
        answer: "'let' can be reassigned, but 'const' cannot"
    },
    {
        question: "What is the scope of a variable declared with 'var'?",
        answers: [
            "Global scope",
            "Function scope",
            "Block scope",
            "Local scope"
        ],
        answer: "Global scope"
    },
    {
        question: "What is a block-scoped variable declaration in JavaScript?",
        answers: [
            "A variable declared with 'var'",
            "A variable declared with 'let' or 'const'",
            "A variable declared with 'function'",
            "A variable declared with 'block'"
        ],
        answer: "A variable declared with 'let' or 'const'"
    },
    {
        question: "What is the keyword used to declare a variable with block scope?",
        answers: [
            "var",
            "let",
            "const",
            "block"
        ],
        answer: "let"
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answers: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: "const"
    },
    {
        question: "What happens if you declare a variable without initializing it?",
        answers: [
            "It is automatically assigned 'undefined'",
            "It results in a syntax error",
            "It remains uninitialized",
            "It is assigned a random value"
        ],
        answer: "It is automatically assigned 'undefined'"
    },
    {
        question: "What are valid variable names in JavaScript?",
        answers: [
            "Any sequence of characters",
            "Names starting with a number",
            "Names containing spaces",
            "Names starting with a letter, underscore, or dollar"
        ],
        answer: "Names starting with a letter, underscore, or dollar"
    },
    {
        question: "What is the purpose of the 'let' keyword in modern JavaScript?",
        answers: [
            "To declare a variable with block scope",
            "To declare a variable with global scope",
            "To declare a variable with function scope",
            "To declare a constant variable"
        ],
        answer: "To declare a variable with block scope"
    }
];

const setC = [
    {
        question: "What is a function in JavaScript?",
        answers: [
            "A reserved word in JavaScript",
            "A container for storing data values",
            "A block of code that performs a specific task",
            "A type of loop"
        ],
        answer: "A block of code that performs a specific task"
    },
    {
        question: "How do you declare a function in JavaScript?",
        answers: [
            "Using the 'func' keyword",
            "Using the 'function' keyword",
            "Using the 'def' keyword",
            "Using the 'fn' keyword"
        ],
        answer: "Using the 'function' keyword"
    },
    {
        question: "What is the purpose of parameters in a function?",
        answers: [
            "To store global variables",
            "To specify the return type of the function",
            "To define values that the function can accept",
            "To limit the function's access to variables"
        ],
        answer: "To define values that the function can accept"
    },
    {
        question: "What is a return statement in a JavaScript function used for?",
        answers: [
            "To terminate the function's execution",
            "To specify the function's name",
            "To indicate the function's parameters",
            "To return a value from the function"
        ],
        answer: "To return a value from the function"
    },
    {
        question: "What is a function expression in JavaScript?",
        answers: [
            "A function that expresses its feelings",
            "A function defined as a variable assignment",
            "A function defined using 'function' keyword",
            "A built-in JavaScript function"
        ],
        answer: "A function defined as a variable assignment"
    },
    {
        question: "What is the scope of a variable declared inside a function?",
        answers: [
            "Global scope",
            "Function scope",
            "Block scope",
            "Local scope"
        ],
        answer: "Function scope"
    },
    {
        question: "What is a closure in JavaScript?",
        answers: [
            "A way to lock variables",
            "A function has access to its outer function's scope",
            "A built-in JavaScript function",
            "A way to define global variables"
        ],
        answer: "A function has access to its outer function's scope"
    },
    {
        question: "What does the 'this' keyword refer to in a JavaScript function?",
        answers: [
            "The current function",
            "The global object",
            "The parent function",
            "The object that owns the function"
        ],
        answer: "The object that owns the function"
    },
    {
        question: "How can you make a function accept a variable number of arguments in JavaScript?",
        answers: [
            "By using the 'arguments' keyword",
            "By using a loop",
            "By using the 'varargs' keyword",
            "By declaring a fixed number of parameters"
        ],
        answer: "By using the 'arguments' keyword"
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        answers: [
            "var",
            "let",
            "const",
            "constant"
        ],
        answer: "const"
    },
];

let interactionDiv = document.getElementById('interaction-div');
let quetionsDiv = document.getElementById('questions-div');
let resultDiv = document.getElementById('result-div');

let sets = document.querySelectorAll('#sets ul li');
let setsi = document.querySelectorAll('#sets ul li i');
let userName = document.getElementById('fullName');
let startQuizBtn = document.getElementById('start-quiz-btn')
let progressBar = document.getElementById('progress-bar');
let questionE = document.getElementById('question');
let element = document.getElementsByName('check');
let numbers = document.getElementById('numbers');
let option = document.getElementsByClassName('option');
let submitBtn = document.getElementById('submit-btn');
let preview = document.getElementById('preview');
let restart = document.getElementById('restart');
let tryAgain = document.getElementById('try-again');
let buttons = document.getElementsByName('check');
let labels = document.getElementsByClassName('answers');
let reviewCheck = document.getElementById('review');
let qButtons = document.getElementsByClassName('q-btn');
let qButtonsDiv = document.getElementsByClassName('question-buttons')[0];
let qButtonsArray = Array.from(qButtons);
let alert = document.getElementById('alert');
let reviewQuestionNumber = document.getElementById('review-questions-number');
let no = document.getElementById('no');
let yes = document.getElementById('yes');
let nextArrow = document.getElementById('next-arrow');
let previousArrow = document.getElementById('previous-arrow');
let prevImg = document.getElementById('prevImg');
let nextImg = document.getElementById('nextImg');
let indicators = document.getElementsByClassName('indicators')[0];
let indicators_2 = document.getElementsByClassName('indicators-2')[0];

let setsArray = Array.from(sets);
let setsiArray = Array.from(setsi);
let optionArray = Array.from(option);

let questions;
let questionCount = 0;
let questionStart = 0;
let reviewQuestionsNumber = 0;
let tempForRev = 0;
let reviewTemp = 0;
let totalQuestions = 0;
let newArray = [];

// (🔥) Start Quiz Button From Interaction Page
startQuizBtn.addEventListener('click', (e) => {
    if ((userName.value == '') || (user.set == undefined)) {

    } else {
        user.name = userName.value;
        interactionDiv.style.display = 'none';
        quetionsDiv.style.display = 'flex';
        (user.set == 'A') ? questions = setA : false;
        (user.set == 'B') ? questions = setB : false;
        (user.set == 'C') ? questions = setC : false;
        totalQuestions = questions.length;
        shuffleArray();
        startQuiz();
    }
});

// (🔥) Set Selection
setsArray.forEach(item => {
    item.addEventListener('click', (e) => {
        let i = e.target;
        setsiArray.forEach(item => {
            if (item.classList.contains('selected')) {
                item.classList.remove('selected');
            }
        })
        i.classList.toggle('selected');
        user.set = i.id;
    });
});

// (🔥) Array Shuffle
function shuffleArray() {
    questions = questions.sort(() => Math.random() - 0.5);
    questions.forEach((e) => {
        e.answers.sort(() => Math.random() - 0.5);
        e.answers.forEach((v, i) => {
            if (v == e.answer) {
                e.ans = i + 1;
            }
        })
    });
};

// (🔥) Start Quiz Function
function startQuiz() {
    questionCount = 0;
    qButtonsArray[0].click();
    removeClasses();
}

// (🔥) Function To Check Which Question Is Clicked On Navigator
function removeClasses() {
    optionArray.forEach((e) => {
        (e.classList.contains('correct')) ? e.classList.remove('correct') : false;
        (e.classList.contains('wrong')) ? e.classList.remove('wrong') : false;
        (e.classList.contains('unAttempt')) ? e.classList.remove('unAttempt') : false;
    });
}

// (🔥) Function To Uncheck Old Selections
function unCheck() {
    for (i = 0; i < element.length; i++) {
        if (element[i].checked) {
            element[i].checked = false;
        }
    }
}

// (🔥) Remove Hover Function To Remove Hover Class
function removeHover() {
    let hover = document.getElementsByClassName('hover');
    let hoverArr = Array.from(hover);
    hoverArr.forEach((key) => {
        key.classList.remove('hover');
    });
}

// (🔥) Add Hover Function To Add Hover Class
function addHover() {
    let hoverArr = Array.from(option);
    hoverArr.forEach((key) => {
        key.classList.add('hover');
    });
}

// (🔥) Function To Display Questions And Options
function showQuestionsAndOptions() {
    questionE.innerHTML = questions[questionCount].question;
    for (let i = 0; i <= labels.length - 1; i++) {
        labels[i].innerHTML = questions[questionCount].answers[i];
    }
    numbers.innerHTML = `${questionCount + 1} of ${totalQuestions}`;
}

// (🔥) PreviousQuestion For Arrow
function previousQuestion() {
    if (questionCount == 0) {
        previousArrow.disabled = true;
    } else {
        qButtonsArray[questionCount - 1].click();
        removeClasses();
        nextArrow.disabled = false;
        previousArrow.disabled = false;
    }
}

// (🔥) NextButton For All Question Buttons
function next(elem) {
    questionCount = elem.innerHTML - 1;
    reviewTemp = 0;
    reviewCheck.style.background = '#3c9a06';

    removeClasses();
    progressBar.style.width = `${elem.innerHTML * 10}%`;
    unCheck();

    if (questions[questionCount].hasOwnProperty('userAns')) {
        element[questions[questionCount].userAns - 1].checked = true;
    }

    showQuestionsAndOptions();

    optionArray.forEach((key) => {
        key.addEventListener('click', (e) => {
            try {
                e.target.firstElementChild.checked = true;
                questions[questionCount].userAns = Number(e.target.firstElementChild.value);
                qButtonsArray[questionCount].classList.add('answered');
            } catch (err) { }
        });
    });
}

// (🔥) NextQuestion For Arrow
function nextQuestion() {
    if (questionCount == 9) {
        nextArrow.disabled = true;
    } else {
        qButtonsArray[questionCount + 1].click();
        removeClasses();
        previousArrow.disabled = false;
        nextArrow.disabled = false;
    }
}

// (🔥) Result Calculation Function
function result() {
    qButtonsArray.forEach((e) => {
        e.style.display = 'block';
    })

    optionArray.forEach((e) => {
        e.disabled = false;
    })

    quetionsDiv.style.display = 'none';
    resultDiv.style.display = 'flex';

    let valid = document.getElementById('valid');
    let invalid = document.getElementById('invalid');
    let percentage = document.getElementById('parcentage');
    let userNameRes = document.getElementById('user-name');
    let unAttempts = document.getElementById('unAttempts');
    let score = 0;
    let unAttemp = 0;
    let wrongAnswer = 0;

    for (let key of questions) {
        if (key.hasOwnProperty('userAns')) {
            (key.userAns == key.ans) ? score++ : wrongAnswer++;
        } else {
            unAttemp++;
        }
    }

    userNameRes.innerHTML = `${user.name}`;
    valid.innerHTML = `Correct Answers : ${score}`;
    invalid.innerHTML = `Wrong Answers : ${wrongAnswer}`;
    unAttempts.innerHTML = `Un Attempts : ${unAttemp}`;
    percentage.innerHTML = `Percentage : ${(totalQuestions * score)}%`;
}

// (🔥) Previous Question For Review
function reviewPreviousQuestion() {
    qButtonsDiv.display = 'none';
    if (newArray[questionStart].hasOwnProperty('userAns')) {
        optionArray[newArray[questionStart].userAns - 1].checked = true;
        console.log();
    }
    if (questionStart == 0) {
        console.log('Previous', questionStart);
        previousArrow.disabled = true;
    } else {
        questionStart--;

        console.log('Previous', questionStart);
        nextArrow.disabled = false;

        unCheck();

        if (newArray[questionStart].userAns != undefined) {
            optionArray[newArray[questionStart].userAns - 1].firstElementChild.checked = true;
        }

        if (questionStart == reviewQuestionsNumber - 1) {
            submitBtn.innerHTML = "Submit";
            questions.forEach((q) => {
                newArray.forEach((n) => {
                    if (q.question == n.question) {
                        q.userAns = n.userAns;
                    }
                })
            });
        } else if (questionCount == reviewQuestionsNumber) {
            submitQuiz();
        }

        questionE.innerHTML = newArray[questionStart].question;

        for (let i = 0; i <= labels.length - 1; i++) {
            labels[i].innerHTML = newArray[questionStart].answers[i];
        }

        delete newArray[questionStart].review;

        // numbers.innerHTML = `${questionStart + 1} of ${reviewQuestionsNumber}`;

        optionArray.forEach((key) => {
            key.addEventListener('click', (e) => {
                try {
                    e.target.firstElementChild.checked = true;
                    newArray[questionStart].userAns = Number(e.target.firstElementChild.value);
                } catch (err) { }
            });
        })
    }
}

// (🔥) Next Question For Review
function reviewNextQuestion() {
    qButtonsDiv.display = 'none';
    if (questionStart == reviewQuestionsNumber - 1) {
        console.log('Next', questionStart);
        nextArrow.disabled = true;
    } else {
        questionStart++;

        console.log('Next', questionStart);
        previousArrow.disabled = false;

        unCheck();

        if (newArray[questionStart].userAns != undefined) {
            optionArray[newArray[questionStart].userAns - 1].firstElementChild.checked = true;
        }

        if (questionStart == reviewQuestionsNumber - 1) {
            submitBtn.innerHTML = "Submit";
            questions.forEach((q) => {
                newArray.forEach((n) => {
                    if (q.question == n.question) {
                        q.userAns = n.userAns;
                    }
                })
            });
        }


        else if (questionCount == reviewQuestionsNumber) {
            submitQuiz();
        }

        questionE.innerHTML = newArray[questionStart].question;

        for (let i = 0; i <= labels.length - 1; i++) {
            labels[i].innerHTML = newArray[questionStart].answers[i];
        }

        delete newArray[questionStart].review;

        // numbers.innerHTML = `${questionStart + 1} of ${reviewQuestionsNumber}`;

        if (newArray[questionStart].hasOwnProperty('userAns')) {
            optionArray[newArray[questionStart].userAns - 1].checked = true;
        }

        optionArray.forEach((key) => {
            key.addEventListener('click', (e) => {
                try {
                    e.target.firstElementChild.checked = true;
                    newArray[questionStart].userAns = Number(e.target.firstElementChild.value);
                } catch (err) { }
            });
        })
    }
}

// (🔥) Yes Button For Review Alert
yes.addEventListener('click', (e) => {
    newArray = [];
    alert.style.display = 'none';
    indicators.style.display = 'none';
    indicators_2.style.display = 'none';

    nextArrow.setAttribute('onclick', 'reviewNextQuestion()');
    previousArrow.setAttribute('onclick', 'reviewPreviousQuestion()');

    qButtonsArray.forEach((e) => {
        if (e.classList.contains('review-q-btn')) {

        } else {
            e.style.display = 'none';
        }
    })

    for (let key of questions) {
        if (key.review) {
            newArray.push(key);
            tempForRev++;
        }
    }

    reviewQuestionsNumber = newArray.length;

    unCheck();

    if (newArray[questionStart].userAns != undefined) {
        optionArray[newArray[questionStart].userAns - 1].firstElementChild.checked = true;
    }

    questionE.innerHTML = newArray[questionStart].question;

    for (let i = 0; i <= labels.length - 1; i++) {
        labels[i].innerHTML = newArray[questionStart].answers[i];
    }

    delete newArray[questionStart].review;

    numbers.innerHTML = `${questionStart + 1} of ${reviewQuestionsNumber}`;

    optionArray.forEach((key) => {
        key.addEventListener('click', (e) => {
            try {
                e.target.firstElementChild.checked = true;
                newArray[questionStart].userAns = Number(e.target.firstElementChild.value);
            } catch (err) { }
        });
    })
});

// (🔥) No Button For Review Alert
no.addEventListener('click', (e) => {
    alert.style.display = 'none';
    result();
});

// (🔥) Review Questions Answering
function reviewQuestions() {
    alert.style.display = 'flex';

    reviewCheck.style.display = 'none';
    progressBar.style.display = 'none';
    numbers.style.display = 'none';
    tempForRev = 0;
    newArray = [];
    reviewQuestionsNumber = 0;
}

// (🔥) Submit Quiz Function
function submitQuiz() {
    let tempForRev = 0;
    questionStart = 0;
    reviewQuestionsNumber = 0;

    for (let key of questions) {
        if (key.review) {
            tempForRev++;
        }
    }

    removeClasses();

    reviewQuestionNumber.innerHTML = `${tempForRev} Questions Are On Review !`;

    (tempForRev >= 1) ? reviewQuestions() : result();
}

// (4) Try Again Function
function tryAgainQuiz() {
    shuffleArray();
    indicators.style.display = 'flex';
    indicators_2.style.display = 'none';
    reviewCheck.style.display = 'block';
    numbers.style.display = 'block';
    nextArrow.disabled = false;
    previousArrow.disabled = false;
    nextArrow.setAttribute('onclick', 'nextQuestion()');
    previousArrow.setAttribute('onclick', 'previousQuestion()');
    submitBtn.innerHTML = "Submit";
    submitBtn.setAttribute('onclick', 'submitQuiz()');

    qButtonsArray.forEach((e) => {
        e.disabled = false;
        e.setAttribute('onclick', 'next(this)');
        (e.classList.contains('answered')) ? e.classList.remove('answered') : false;
        (e.classList.contains('review-q-btn')) ? e.classList.remove('review-q-btn') : false;

        e.style.display = 'block';
    });

    optionArray.forEach((e) => {
        e.disabled = false;
        removeClasses();
    });

    progressBar.style.display = 'block';
    newArray = [];
    interactionDiv.style.display = 'flex';
    quetionsDiv.style.display = 'none';
    resultDiv.style.display = 'none';
    reviewCheck.style.display = 'block';

    userName.value = user.name;
    userName.disabled = true;

    for (let key of questions) {
        delete key.userAns;
        delete key.review;
    }

    addHover();

    buttons.forEach(val => {
        val.disabled = false;
    })

    questionCount = 0;
    progress = 10;
    progressBar.style.width = `${progress}%`;
}

// (🔥) PreviousQuestion Button For Arrow (Preview)
function previousPreviewQuestion() {
    if (questionCount == 0) {
        previousArrow.disabled = true;
    } else {
        qButtonsArray[questionCount - 1].click();
        nextArrow.disabled = false;
        previousArrow.disabled = false;
    }
}

// (🔥) NextButton For All Preview Question Buttons
function nextPrevious(elem) {
    option[(questions[questionCount].ans) - 1].classList.remove('correct');

    if (option[(questions[questionCount].ans) - 1].classList.contains('unAttempt')) {
        option[(questions[questionCount].ans) - 1].classList.remove('unAttempt');
    } else {
        option[(questions[questionCount].ans) - 1].classList.remove('correct');
        if (questions[questionCount].hasOwnProperty('userAns')) {
            if (questions[questionCount].ans != questions[questionCount].userAns) {
                if (option[(questions[questionCount].userAns) - 1].classList.contains('wrong')) {
                    option[(questions[questionCount].userAns) - 1].classList.remove('wrong');
                }
            }
        }
    }

    nextArrow.disabled = false;
    previousArrow.disabled = false;

    // console.log(elem.innerHTML);
    questionCount = elem.innerHTML - 1;

    // console.log('Question Number', questionCount);
    reviewTemp = 0;
    reviewCheck.style.background = '#3c9a06';

    progressBar.style.width = `${elem.innerHTML * 10}%`;

    if (questions[questionCount].hasOwnProperty('userAns')) {
        element[questions[questionCount].userAns - 1].checked = true;
        option[(questions[questionCount].ans) - 1].classList.add('correct');
        if (questions[questionCount].ans != questions[questionCount].userAns) {
            option[(questions[questionCount].userAns) - 1].classList.add('wrong');
        }
    } else {
        option[(questions[questionCount].ans) - 1].classList.add('unAttempt');
        unCheck();
    }

    if (questionCount == 9) {
        submitBtn.innerHTML = "Exit Preview";
        submitBtn.setAttribute('onclick', 'result()');
    }

    showQuestionsAndOptions();
}

// (🔥) Preview Quiz Next Question Function
function nextPreviewQuestion() {
    if (questionCount == 9) {
        nextArrow.disabled = true;
    } else {
        qButtonsArray[questionCount + 1].click();
        previousArrow.disabled = false;
        nextArrow.disabled = false;
    }
}

// (🔥) Preview Quiz Function To Preview Quiz Answers
function previewQuiz() {
    removeClasses();
    progressBar.style.display = 'block';
    quetionsDiv.style.display = 'flex';
    resultDiv.style.display = 'none';
    reviewCheck.style.display = 'none';

    indicators.style.display = 'none';
    indicators_2.style.display = 'flex';

    nextArrow.disabled = false;
    previousArrow.disabled = false;
    submitBtn.innerHTML = 'Exit Preview';
    submitBtn.setAttribute('onclick', 'result()');
    nextArrow.setAttribute('onclick', 'nextPreviewQuestion()');
    previousArrow.setAttribute('onclick', 'previousPreviewQuestion()')

    qButtonsArray.forEach((e) => {
        e.disabled = false;
        e.setAttribute('onclick', 'nextPrevious(this)');
        if (e.classList.contains('review-q-btn')) {
            e.classList.remove('review-q-btn');
        }
        if (e.classList.contains('answered')) {
            e.classList.remove('answered');
        }
    })

    optionArray.forEach((e) => {
        e.disabled = false;
    })

    removeHover();
    questionCount = 0;
    qButtonsArray[0].click();
    progress = 10;

    buttons.forEach(val => {
        val.disabled = true;
    })

    progressBar.style.width = `${progress}%`;
}

// (🔥) Event To Check Which Question Is Selected For Review Or Not
reviewCheck.addEventListener('click', (e) => {
    if (reviewTemp == 0) {
        e.target.style.background = 'orange';
        questions[questionCount].review = true;
        qButtonsArray[questionCount].classList.add('review-q-btn');
        reviewTemp = 1;
    } else {
        e.target.style.background = '#3c9a06';
        qButtonsArray[questionCount].classList.remove('review-q-btn');
        reviewTemp = 0;
    }
});