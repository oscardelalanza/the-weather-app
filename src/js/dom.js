const form = document.getElementById('form');
const searchBtn = document.getElementById('searchBtn');

const formPrevent = () => {

  form.addEventListener('submit', e => {
     e.preventDefault();
  });

};

const getFormData = () => {

    let data = false;
    const city = document.getElementById('city');

    if (form.city.value !== '') {

        if (city.classList.contains('required')) {
            city.classList.remove('required');
        }

        data = {
            city: form.city.value,
            units: form.units.value,
        };

        form.reset();

    } else {

        city.classList.add('required');

    }

    return data;

};

export {
    formPrevent,
    getFormData,
    searchBtn
}