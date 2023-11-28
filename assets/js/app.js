
// se agrega url
const baseEndpoint = 'https://api.github.com';

const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

// falta completar el await y no sé si se tiene que convertir a json 
function displayUser(username) {
  $n.textContent = 'cargando...';
  try{
  const response = await fetch(`${usersEndpoint}/${username}`);
  const otros = await response.json();
  }
  console.log(data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);