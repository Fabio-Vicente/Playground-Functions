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
function generatePhoneNumber() {
  // seu código aqui
}

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
