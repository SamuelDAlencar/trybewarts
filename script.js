/* eslint-disable max-lines-per-function */
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

// - Movi e comentei a função que apaga o form pra cá pra poder fazer uso dos valores dos inputs em alguns testes antes de apagar o formulário -

// function apgForm() {
//   const form = document.getElementById('evaluation-form');
//   for (let i = form.children.length - 1; i >= 0; i -= 1) {
//     form.children[i].remove();
//   }
// }
// btnEnviar.addEventListener('click', apgForm);

btnEnviar.addEventListener('click', (event) => {
  const form = document.getElementById('evaluation-form');
  const nameValue = document.getElementById('input-name').value;
  const surnameValue = document.getElementById('input-lastname').value;
  const emailValue = document.getElementById('input-email').value;
  const house = document.getElementById('house');
  // Espaço da variavel do pai dos elementos Familia 
  // Espaço da variavel do pai dos elementos Matérias
  // Espaço da variavel do pai dos elementos Feedback
  const observationValue = document.getElementById('textarea').value;

  let houseValue = '';
  let familyValue = '';
  let selectedSubjectsValue = '';
  let feedbackValue = '';

  for (let i = 0; i < house.children.length; i += 1) {
    if (house.children[i].selected) {
      houseValue = house.children[i].value;
    }
  }

  // - Templates de loop pra encontrar o elemento filho selecionado -

  // for (let i = 0; i < family.children.length; i += 1) {
  //   if (family.children[i].selected) {
  //     familyValue = family.children[i].value;
  //   }
  // }

  // for (let i = 0; i < selectedSubjects.children.length; i += 1) {
  //   if (selectedSubjects.children[i].selected) {
  //     selectedSubjectsValue = selectedSubjects.children[i].value;
  //   }
  // }

  // for (let i = 0; i < feedback.children.length; i += 1) {
  //   if (feedback.children[i].selected) {
  //     feedbackValue = feedback.children[i].value;
  //   }
  // }

  form.appendChild(document.createElement('p')).innerText = `Nome: ${nameValue} ${surnameValue}`;

  form.appendChild(document.createElement('p')).innerText = `Email: ${emailValue}`;

  form.appendChild(document.createElement('p')).innerText = `Casa: ${houseValue}`;

  // - Criação das tags 'p' com o conteúdo dos input -

  // form.appendChild(document.createElement('p')).innerText = `Familia: ${familyValue}`;

  // form.appendChild(document.createElement('p')).innerText = `Matérias: ${selectedSubjectsValue}`;

  // form.appendChild(document.createElement('p')).innerText = `Feedback: ${feedbackValue}`;

  form.appendChild(document.createElement('p')).innerText = `Observações: ${observationValue}`;

  event.preventDefault();
});
