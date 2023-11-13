
// Função para trocar os valores de duas posições de um vetor
const swap = (arr, pos1, pos2) => {
  [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (arr, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const randomPos1 = Math.floor(Math.random() * arr.length);
    const randomPos2 = Math.floor(Math.random() * arr.length);
    swap(arr, randomPos1, randomPos2);
  }
};

// Função Bubble Sort para ordenar um vetor de inteiros
const bubble_sort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

// Função Selection Sort para ordenar um vetor de inteiros
const selection_sort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
};

// Função Quick Sort para ordenar um vetor de inteiros (recursivo)
const quick_sort = (arr, start, end) => {
  if (start < end) {
    const pivotIndex = particionamento(arr, start, end);
    quick_sort(arr, start, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, end);
  }
};

// Função de apoio ao Quick Sort para o particionamento do vetor
const particionamento = (arr, start, end) => {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, end);
  return i + 1;
};

// Adicione as funções add, ordenar e misturar aqui
function add() {
  const inputValue = document.getElementById('valor').value;
  const listaValores = document.getElementById('valores');
  const node = document.createElement('li');
  const textNode = document.createTextNode(inputValue);
  node.appendChild(textNode);
  listaValores.appendChild(node);
}

function ordenar() {
  const listaValores = document.getElementById('valores');
  const selectAlgoritmo = document.getElementById('algoritmo');
  const valoresArray = Array.from(listaValores.children).map((li) => eval(li.innerHTML));

  // Escolha do algoritmo de ordenação
  switch (selectAlgoritmo.selectedIndex) {
    case 0:
      bubble_sort(valoresArray);
      break;
    case 1:
      selection_sort(valoresArray);
      break;
    case 2:
      quick_sort(valoresArray, 0, valoresArray.length - 1);
      break;
    default:
      break;
  }

  // Atualização da lista de valores
  listaValores.innerHTML = valoresArray.map((val) => `<li>${val}</li>`).join('');
}

function misturar() {
  const listaValores = document.getElementById('valores');
  const valoresArray = Array.from(listaValores.children).map((li) => eval(li.innerHTML));

  // Embaralhamento dos valores
  shuffle(valoresArray, valoresArray.length);

  // Atualização da lista de valores
  listaValores.innerHTML = valoresArray.map((val) => `<li>${val}</li>`).join('');
}