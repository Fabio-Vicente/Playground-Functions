// Desafio 10
function order(i, j, array) {
  if (array[i] > array[j]) {
    const aux = array[i];
    array[i] = array[j];
    array[j] = aux;
  }
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - 1 - i; j += 1) {
      order(j, j + 1, array);
    }
  }
}

function techList(array, myName) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  bubbleSort(array);
  let objects = [];
  for (const techie of array) {
    const node = {
      tech: techie,
      name: myName,
    };
    objects.push(node);
  }
  return objects;
}

// Desafio 11
function generateSummaryOfNumbers() {
  let numbers = [];
  for (let i = 0; i <= 9; i += 1) {
    numbers.push({ times: 0 });
  }
  return numbers;
}

function numbersSummarized(listOfNumbers) {
  let summary = generateSummaryOfNumbers();
  for (const number of listOfNumbers) {
    summary[number].times += 1;
  }
  return summary;
}

function notPhoneDigits(phoneNumber) {
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (phoneNumber[i] > 9 || phoneNumber[i] < 0) {
      return false;
    }
  }
  return true;
}

function tooManyTimes(phoneNumber) {
  let phoneNumberSummarized = numbersSummarized(phoneNumber);
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (phoneNumberSummarized[phoneNumber[i]].times >= 3) {
      return false;
    }
  }
  return true;
}

function initialTests(phoneNumber) {
  let test;
  test = notPhoneDigits(phoneNumber);
  if (test) {
    test = tooManyTimes(phoneNumber);
  }
  return test;
}

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let correctNumber = initialTests(phoneNumber);
  if (!correctNumber) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let strPhoneNumber = phoneNumber.join('');
  const DDD = strPhoneNumber[0] + strPhoneNumber[1];
  const prefix = strPhoneNumber[2] + strPhoneNumber[3] + strPhoneNumber[4] + strPhoneNumber[5]
  + strPhoneNumber[6];
  const sufix = strPhoneNumber[7] + strPhoneNumber[8] + strPhoneNumber[9] + strPhoneNumber[10];
  return `(${DDD}) ${prefix}-${sufix}`;
}

/* console.log(generatePhoneNumber([7, 1, 9, 9, 1, 3, 6, 6, 0, 8, 8])); */
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
