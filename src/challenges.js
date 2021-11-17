// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let v = str.split(' ');
  return v;
}

// Desafio 4
function concatName(arr) {
  let s = [];
  s.push(arr[arr.length - 1]);
  s.push(arr[0]);
  s = s.join(', ');
  return s;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let higher = numbers[0];
  let count = 1;
  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] === higher) {
      count += 1;
    } else if (numbers[i] > higher) {
      higher = numbers[i];
      count = 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((mouse - cat1) ** 2 < (mouse - cat2) ** 2) {
    return 'cat1';
  }
  if ((mouse - cat1) ** 2 > (mouse - cat2) ** 2) {
    return 'cat2';
  }
  if ((mouse - cat1) ** 2 === (mouse - cat2) ** 2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function singleFizzBuzz(number, array) {
  if (number % 15 === 0) {
    array.push('fizzBuzz');
  } else if (number % 5 === 0) {
    array.push('buzz');
  } else if (number % 3 === 0) {
    array.push('fizz');
  } else {
    array.push('bug!');
  }
}
function fizzBuzz(numbers) {
  let v = [];
  for (const number of numbers) {
    singleFizzBuzz(number, v);
  }
  return v;
}

fizzBuzz([9, 25]);

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
