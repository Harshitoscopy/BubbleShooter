var mainNumber;
var counter = 0;
var timmer = 30;
var missedCounter = 0;

var generateRandomNumber = () => {
  mainNumber = Math.floor(Math.random() * 10) + 1;
  document.querySelector("#random-number").innerHTML = mainNumber;
  document.querySelector("#random-number").style.backgroundColor = coloring(
    mainNumber.toString()
  );
};

var bubbleMaker = () => {
  const bubblesContainer = document.querySelector("#bubbles");
  let fragment = document.createDocumentFragment();

  for (var i = 0; i <= 274; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("balls");
    bubble.id = `balls${i}`;
    bubble.textContent = Math.floor(Math.random() * 10) + 1;
    let color = coloring(bubble.textContent);
    bubble.style.backgroundColor = color;
    fragment.appendChild(bubble);
  }
  bubblesContainer.appendChild(fragment);
};

document.querySelector("#bubbles").addEventListener("click", (event) => {
  if (event.target.classList.contains("balls")) {
    let ballVallue = parseInt(event.target.innerHTML);
    if (mainNumber === ballVallue) {
      document.querySelector("#" + event.target.id).style.visibility = "hidden";
      generateRandomNumber();
      score(++counter);
    } else {
      missedCounter++;
    }
  }
});

var score = (count) => {
  document.querySelector("#score").innerHTML = count;
};

var clock = setInterval(() => {
  if (timmer >= 0) {
    document.querySelector("#timmer").innerHTML = timmer;
    timmer--;
  } else {
    gameOver(counter);
    clearInterval(clock);
  }
}, 1000);

var gameOver = (counter) => {
  document.querySelector("#bubbles").style.display = "none";
  document.querySelector("#game-over").style.display = "block";
  document.querySelector("#final-score-box").innerHTML = counter;
  document.querySelector("#missed-clicks").innerHTML = missedCounter;
  let accuracy =
    ((counter / (counter + missedCounter)) * 100).toFixed(2) + " %";
  document.querySelector("#acuracy").innerHTML =
    accuracy != "NaN %" ? accuracy : "0 %";
  document.querySelector("#random-number").style.backgroundColor =
    "rgb(146, 219, 214)";
};

var coloring = (bubbletext) => {
  switch (bubbletext) {
    case "1":
      return "#CC8899";
    case "2":
      return "#F3E5AB";
    case "3":
      return "#C8A2C8";
    case "4":
      return "#FFDAB9";
    case "5":
      return "#98FF98";
    case "6":
      return "#B0E0E6";
    case "7":
      return "#FFF0F5";
    case "8":
      return "#FF7F50";
    case "9":
      return "#87CEEB";
    case "10":
      return "#00FF99";
    default:
      return "red";
  }
};
bubbleMaker();
generateRandomNumber();
score(counter);
