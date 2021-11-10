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

// - Movi a função que apaga o form pra cá pra poder fazer uso dos valores dos inputs em alguns testes antes de apagar o formulário -

function apgForm() {
  const form = document.getElementById('evaluation-form');
  for (let i = form.children.length - 1; i >= 0; i -= 1) {
    form.children[i].remove();
  }
}
// btnEnviar.addEventListener('click', apgForm);

btnEnviar.addEventListener('click', (event) => {
  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name').value;
  const surname = document.getElementById('input-lastname').value;
  const email = document.getElementById('email').value;

  form.appendChild(document.createElement('p')).innerText = 'Nome: ' + name + ' ' + surname;
  console.log(name);

  event.preventDefault();
});
