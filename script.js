const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnEntrar = document.getElementById('btn-entrar');
const btnEnviar = document.getElementById('submit-btn');
const agreementButton = document.getElementById('agreement');
const contador = document.getElementById('counter');
const textArea = document.getElementById('textarea');

btnEntrar.addEventListener('click', (event) => {
  if (email.value !== 'tryber@teste.com' && senha.value !== '123456') {
    event.preventDefault();
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agreementButton.addEventListener('click', () => {
  if (btnEnviar.disabled === true) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});

textArea.addEventListener('input', () => {
  const countMax = 500;
  const count = countMax - textArea.value.length;
  contador.innerText = count;
});

function apgForm() {
  const form = document.getElementById('evaluation-form');
  for (let i = form.children.length - 1; i >= 0; i -= 1) {
    form.children[i].remove();
  }
}

const house = document.getElementById('house');
let houseValue = '';

function selectedHouse() {
  for (let i = 0; i < house.children.length; i += 1) {
    if (house.children[i].selected) {
      houseValue = house.children[i].value;
    }
  }
}

const materiasInput = document.querySelectorAll('.subject');
const materiasSelec = [];
const form = document.getElementById('evaluation-form');

function selectedSubjects() {
  for (let i = 0; i < materiasInput.length; i += 1) {
    if (materiasInput[i].checked) {
      materiasSelec.push(materiasInput[i].value);
    }
  }
  return materiasSelec.join(', ');
}

btnEnviar.addEventListener('click', (event) => {
  const nameValue = document.getElementById('input-name').value;
  const surnameValue = document.getElementById('input-lastname').value;
  const emailValue = document.getElementById('input-email').value;
  const observationValue = document.getElementById('textarea').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const avaliation = document.querySelector('input[name="rate"]:checked').value;
  selectedHouse();
  apgForm();
  form.appendChild(document.createElement('p')).innerText = `Nome: ${nameValue} ${surnameValue}`;
  form.appendChild(document.createElement('p')).innerText = `Email: ${emailValue}`;
  form.appendChild(document.createElement('p')).innerText = `Casa: ${houseValue}`;
  form.appendChild(document.createElement('p')).innerText = `Família: ${family}`;
  form.appendChild(document.createElement('p')).innerText = `Matérias: ${selectedSubjects()}`;
  form.appendChild(document.createElement('p')).innerText = `Avaliação: ${avaliation}`;
  form.appendChild(document.createElement('p')).innerText = `Observações: ${observationValue}`;
  event.preventDefault();
});
