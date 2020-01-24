const form = document.getElementById('form');
const searchBtn = document.getElementById('searchBtn');

const formPrevent = () => {

  form.addEventListener('submit', e => {
     e.preventDefault();
  });

};

export {
    formPrevent,
}