# Fruit-Shuffle-Memory-Game
 Ironhack Module 1 Project
https://biljanakotev.github.io/fruit-shuffle/


This is a solution to the Ironhack Module 1 Project to build a game from scratch using HTML, CSS, Vanilla Javascript and the DOM.

## Table of contents

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

### Technical Requirements

Your app must:

- Render a game in the browser
- Have logic for winning and/or losing and show feedback to the player in either case
- Include seperate HTML/CSS/JavaScript files
- Use plain JavaScript for DOM manipulation (or HTML canvas for graphics)
- Have a repo on GitHub
- Be deployed online using GitHub Pages so that anybody can play it
- Stick with KISS and DRY principles

### Deliverables

- A working game, built by you that runs in the browser
- A deploy of your game in GitHub Pages
- The URL of the GitHub repository for your game
- The URL of the live game on the internet
- The URL of the slides for your game's presentation
- You must present your game during Project #1 final presentations (last day of Project #1 time)

### Screenshot

![Screenshot of start page for Fruit Shuffle Memory Game](https://github.com/BiljanaKotev/fruit-shuffle/blob/main/images/screenshot.png?raw=true "Desktop Screenshot")
![Screenshot of start page for Fruit Shuffle Memory Game](https://github.com/BiljanaKotev/fruit-shuffle/blob/main/images/fruit-shuffle-screen.png?raw=true "Desktop Screenshot")



### Links

- Solution URL: [code](https://github.com/BiljanaKotev/fruit-shuffle/tree/main)
- Live Site URL: [github pages live site](https://biljanakotev.github.io/fruit-shuffle/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Vanilla JavaScript
- DOM

### What I learned

I learned how to disable a function using boolean logic:
```
  let gameWon = false;

  function youWin() {
    popUpYouWin.style.display = "block";
    body.style.backgroundColor = "black";
    backgroundImgContainer.style.display = "none";
    gameboard.style.display = "none";
    matchedPairsContainer.style.display = "none";
    timer.style.display = "none";
    gameWon = true;
    popUpBtn.classList.toggle("active");
    playAudio(audioYouWin);
  }

  function gameover() {
    if (timerStart <= 0 && !gameWon) {
      gameboard.style.display = "none";
      matchedPairsContainer.style.display = "none";
      backgroundImgContainer.style.display = "none";
      body.classList.toggle("active");
      gameoverImg.classList.toggle("active");
      startOverBtn.classList.toggle("active");
      playAudio(audioGameover);
    }
  }
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [How to randomize shuffle with the Fisher-Yates algorithm](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) - I had never heard about this algorithim before so 
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.


## Author

- Linkedin - [Biljana Kotevska](https://www.linkedin.com/in/biljana-kotevska/)


## Acknowledgments

I am grateful for the whole Ironhack team for supporting me throughout the whole process!
