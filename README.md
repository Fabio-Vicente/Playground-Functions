<div align=center>
  <h1>Playground Functions</h1>
  <p>A didactical project that enforces javascript abilities</p>

  ![Javascript](assets/images/javascript-badge.svg)
  
</div>
<br />

## About

Here is my first code lines using javascript. 🙃

This project consists on 13 problem challenges that must be solved using javascript functions.
See each one problem described [below](#challenges).

### Development Skills

- Javascript (ES6);
- Variables;
- Primitive/Reference types;
- Condictional structures (if/else);
- Loop structures (for/for of/for in)
- Functions;
- ESLint;
- Divide and Conquer strategy;
- Programming logical.

<br />

## Getting Started

### Prerequisites

  - Node >= 16.13.0

### Instalation

  Use one of these three ways to install project properly.

#### 1. Download ZIP:
>
>  - Click on the `Code` green button at repository top;
>
>      ![Code Button](assets/images/GitHub-code-button.png)
>
>  - Click on `Download ZIP` button;
>
>      ![Code Button](assets/images/GitHub-downloadZIP-button.png)
>  
>  - Unzip the downloaded file in a choosen directory;
>  - Enter on `Playground-Functions-main` extracted folder;

#### 2. Clone repository via HTTPS:
>
>  - Use `https://github.com/Fabio-Vicente/Playground-Functions.git` endpoint for clonning via HTTPS (credencials may be needed);
>  - Enter on `Playground-Functions` cloned folder;


#### 3. Clone repository via SSH:
>
>  - Use `git@github.com:Fabio-Vicente/Playground-Functions.git` endpoint for clonning via SSH (it must be need set a SSH Key);
>  - Enter on `Playground-Functions` cloned folder;

<br />

## Usage

Follow [challenges instructions](#challenges) for running each one of the functions developed by this project.

<br />

## Lint

The project was staticly tested using [ESLint](https://eslint.org/), whose appoints no error on code analyses. This enforces code readbility and standart development style.

### Check ESLint running

#### Requiriments:
  - NPM >= 8.1.0

Since you have project [installed locally](#instalation), you must install dependencies using [npm](https://www.npmjs.com/).

```sh
  npm install
```

After that, you can verify [ESLint](https://eslint.org/) rules attendance running command:

```sh
  npm run lint
```

###### Obs: you'll probably have no response here. It occurs whenever is found no errors on the code styling. Try to make some mess 💩 on the code format and run this command again. Now you must see some errors pointed in your terminal.

<br />

## Challenges

<details>
  <Summary>
    <h4>Compare True</h4>
  </Summary>

  Do you know the truth? This challenge consists on verify if both of two statement are true.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh compareTrue [statement1] [statement2]
  ```

  Examples:

  ```sh
    sh execChallenge.sh compareTrue true false
  ```

  ```sh
    sh execChallenge.sh compareTrue 1+1==2 2+5==6
  ```

  ```sh
    sh execChallenge.sh compareTrue test!=production 0/1==0
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Calculate Area</h4>
  </Summary>

  How can I get the area of a triangle? This challenge calculates a triangle area given both base and height measures.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh calcArea [base] [height]
  ```

  Example:

  ```sh
    sh execChallenge.sh calcArea 5 10
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Split Sentence</h4>
  </Summary>

  Why having an entire sentence when we can have it word by word? This challenge consists in split a long sentence in the words which compose it.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh splitSentence [sentence]
  ```

  >⚠️ `sentence` must be a string enclosed by quotes. It must start with a alphabetic literal (neither numbers nor symbols).

  Example:

  ```sh
    sh execChallenge.sh splitSentence "Hello there! How are you?"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Concat Name</h4>
  </Summary>

  Have a big full name? No worries! Let's reduce this. In this challenge, was built a function which take a array of strings and concat only the last and the first one, at this order. Perfect to abbreviate names.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh concatName [array of strings]
  ```

  >⚠️ By shell limitations, all array must be enclosed by quotes and inner string must be enclosed by a different quote type. For example: if you use double quote to enclose array, you must use single quote to enclose strings.

  Example:

   ```sh
    sh execChallenge.sh concatName "['Fábio', 'Lima', 'Vicente', 'dos', 'Santos']"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Football Points</h4>
  </Summary>

  Do you like football? Let's calculate the points! This challenge was porpose to calculate a football team points following the rule: 3 points for each victory and 1 point for each tie.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh footballPoints [number of victories] [number of ties]
  ```
  Examples:

   ```sh
    sh execChallenge.sh footballPoints 14 8
  ```

  ```sh
    sh execChallenge.sh footballPoints 1 2
  ```

  ```sh
    sh execChallenge.sh footballPoints 0 0
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Highest Count</h4>
  </Summary>

  How much times we have the highest number here? Given a array of numbers, the challenge here is find out how much times the higher of those repeat on this array.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh highestCount [array of numbers]
  ```

  >⚠️ By shell limitations, the array must be enclosed by quotes.

  Examples:

   ```sh
    sh execChallenge.sh highestCount "[9, 1, 2, 3, 9, 5, 7]"
  ```

  ```sh
    sh execChallenge.sh highestCount "[0, 4, 4, 4, 9, 2, 1]"
  ```

  ```sh
    sh execChallenge.sh highestCount "[0, 0, 0]"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Cat and Mouse</h4>
  </Summary>

  Can you tell which cat gonna finally catch the mouse? Will one of them really achieve this stunt? In this challenge is needed tell which of cats going to catch the mouse, if they will. Imagine that each number is a localization point and the diference between them, is their distance. Given each character position, return which one reach her goal.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh catAndMouse [cat1 position] [cat2 position] [mouse position]
  ```

  Examples:

   ```sh
    sh execChallenge.sh catAndMouse 0 3 2
  ```

  ```sh
    sh execChallenge.sh catAndMouse 10 4 22
  ```

  ```sh
    sh execChallenge.sh catAndMouse 1 0 2
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>

<details>
  <Summary>
    <h4>FizzBuzz</h4>
  </Summary>

  This is a FizzBuzz! In this challenge, is required to read a number array and return another one, with the same length, where elements follows the rules:

  - If the number of original is divisible by 3, it's according must be "fizz";
  - If the number of original is divisible by 3, it's according must be "buzz";
  - If the number of original is divisible by 3 and 5, it's according must be "fizzBuzz";
  - In case original number don't follow any of these rules, it's according must be "bug!";

  #### How can I run this function?

  ```sh
    sh execChallenge.sh fizzBuzz [array of numbers]
  ```
  >⚠️ By shell limitations, the array must be enclosed by quotes.

  Examples:

   ```sh
    sh execChallenge.sh fizzBuzz "[2, 15, 7, 9, 45]"
  ```

  ```sh
    sh execChallenge.sh fizzBuzz "[7, 9]"
  ```

  ```sh
    sh execChallenge.sh fizzBuzz "[9, 25]"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Encode</h4>
  </Summary>

  Have you ever experience a encode? This challenge porpose a encode system. Check the rules:

  ```
    a -> 1
    e -> 2
    i -> 3
    o -> 4
    u -> 5
  ```

  - C1n w2 h1v2 3t h1pp2n2d?

  #### How can I run this function?

  ```sh
    sh execChallenge.sh encode [message]
  ```
  >⚠️ Remeber to enclose message by quotes!

  Example:

   ```sh
    sh execChallenge.sh encode "hi there"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Decode</h4>
  </Summary>

  Have you encoded your message? Let's decode! This challenge is the opposite of the previous one. Following the same rules (see below) is needed to decode the previous encoded message.

  ```
    a -> 1
    e -> 2
    i -> 3
    o -> 4
    u -> 5
  ```

  - L2t's f3n1lly d2c3ph2r?

  #### How can I run this function?

  ```sh
    sh execChallenge.sh decode [encoded message]
  ```
  >⚠️ Remeber to enclose message by quotes!

  Example:

   ```sh
    sh execChallenge.sh decode "h3 th2r2"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Tech List</h4>
  </Summary>

  Let's learn some news technologies? This challenge consists in getting a technologies list and a person name. It must associate each technology with the person in a new array of objects. Important: this new array must be sorted by technology name. 

  #### How can I run this function?

  ```sh
    sh execChallenge.sh techList [technologies list] [person name]
  ```
  >⚠️ Remeber to enclose both list and name with quotes! Furthermore, enclose each technology with a different type quote of the array. For example: if you use double quote to enclose array, you must use single quote to enclose each technology.

  Examples:

   ```sh
    sh execChallenge.sh techList "['React', 'Jest', 'HTML', 'CSS', 'JavaScript']" "Fábio"
  ```

  ```sh
    sh execChallenge.sh techList "[]" "Fábio"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Generate Phone Number</h4>
  </Summary>

  Having trouble for getting a final phone number format? In this challenge was made a function with receive a array of 11 numbers and returns a phone number formated.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh generatePhoneNumber [array of numbers]
  ```
  >⚠️ Remeber to enclose array with quotes!

  Example:

   ```sh
    sh execChallenge.sh generatePhoneNumber "[7, 1, 9, 9, 1, 3, 6, 6, 0, 8, 8]"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Triangle Check</h4>
  </Summary>

  This mesures is really from a triangle? This problem consist in verify if, given 3 numbers equivalent to lengths, they can form a triangle.

  #### How can I run this function?

  ```sh
    sh execChallenge.sh triangleCheck [lineA] [lineB] [lineC]
  ```

  Examples:

   ```sh
    sh execChallenge.sh triangleCheck 10 14 8
  ```

  ```sh
    sh execChallenge.sh triangleCheck 16 9 2
  ```

  ```sh
    sh execChallenge.sh triangleCheck 10 13 2
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>
<details>
  <Summary>
    <h4>Hydrate</h4>
  </Summary>

  Don't forget of being hydrated! The logic here is quite simple. For each one drink that you get, you must drink a glass of water. The entry must be as follow:

  ```
    "{Quantity 1} {Drink Kind 1}, {Quantity 2} {Drink Kind 2}, {Quantity 3} {Drink Kind 3}..."
  ```

  #### How can I run this function?

  ```sh
    sh execChallenge.sh hydrate [string]
  ```

  > Remember to enclose string with quotes. For this problem, numeral must be interpreted as strings. By this reason, enclose each of them with a different type quote of the outer string. For example: if you use double quote to enclose outer string, you must use single quote to enclose each numeral.

  Examples:

   ```sh
    sh execChallenge.sh hydrate "'1' orange juice"
  ```

  ```sh
    sh execChallenge.sh hydrate "'1' orange juice, '5' lemonades e '1' wine"
  ```

  <br />

  > Obs: Do you have [npm](https://www.npmjs.com/)? Try `npm run exec` instead.

</details>

<br />

## Authors & contributors

The development of this project, as well all documentation, was made by [Fábio Vicente(Me)](https://github.com/Fabio-Vicente).

<br />

## Acknowledgements

- [Trybe](https://www.betrybe.com/) by porpose this project and specify requirements;
- [Amazing Github Template](https://github.com/dec0dOS/amazing-github-template) which provides a Readme Template for inspiration.

<br />
<br />
<br />
<br />

<div align=right>

[![Code with love by Fábio Vicente](assets/images/made-with-love.svg)](https://github.com/Fabio-Vicente)

</div>

