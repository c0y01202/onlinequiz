var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

// Create ordered list element
var listEl = document.createElement("ol");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to the Coders Quiz";
quizEl.textContent = "You are timed for each answer";
nameEl.textContent = "If you miss a question you are deducted time";
favoriteEl.textContent = "Answer A, B, C or D";

//Text for questions
var questionArray = {
    text: "The append.child element is an example of:",
    choices: ["A CSS condition", "Dynmaic Programming Language", "aritifical intelligence", "A Git Bash code"]
    answer: "Dynmaic Programming Language"
},
{ 
    text: "Else and If functions are commonly seen in:",
    choices: ["CSS Conditions", "HTML language", "Javascript elements", "APIs"]
    answer: "CSS Condition"
},
{
    text: "What is the function that happens when you pass a function into a function:",
    choices: ["An addevent listener", "A skip function", "A call back function", "a var function"]
    answer: "A call back"
}

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "assets/images/coding_image.png");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

//Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");

//Add styling to list items background
li1.setAttribute(
  "style",
  " color:white; background: #666666; padding: 5px; margin-left: 35px;"
);
li2.setAttribute(
  "style",
  " color:white; background: #777777; padding: 5px; margin-left: 35px;"
);
li3.setAttribute(
  "style",
  " color:white; background: #888888; padding: 5px; margin-left: 35px;"
);
li4.setAttribute(
  "style",
  " color:white; background: #999999; padding: 5px; margin-left: 35px;"
);
