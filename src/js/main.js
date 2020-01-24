import '@fortawesome/fontawesome-free/js/all';
import '../assets/sass/styles.scss';
import { formPrevent, getFormData, searchBtn } from './dom';
import { weatherApi } from './api';

let data;

formPrevent();

searchBtn.addEventListener('click', () => {

    data = getFormData();

    if (data) {
        weatherApi(data.city, data.units).then(json  => {

            if (json.cod === 200) {

            } else {

            }

        });
    }

});

// TODO: get api info
// TODO: render data on view