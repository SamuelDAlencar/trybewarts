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

btnEnviar.addEventListener('click', apgForm);
