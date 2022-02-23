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
kittenEl.textContent = "You are timed for each answer";
nameEl.textContent = "If you miss a question you are deducted time";
favoriteEl.textContent = "Answer A, B, C or D";

//Text for options
li1.textContent = "Apples";
listEl.appendChild(li1);
li2.textContent = "Pizza";
listEl.appendChild(li2);
li3.textContent = "Dumplings";
listEl.appendChild(li3);
li4.textContent = "Cupcakes";
listEl.appendChild(li4);

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);

// Append ordered list
favoriteEl.appendChild(listEl);

//Append list of favorite foods to ordered LE
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

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
