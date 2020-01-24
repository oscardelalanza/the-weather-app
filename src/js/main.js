import '@fortawesome/fontawesome-free/js/all';
import '../assets/sass/styles.scss';
import { formPrevent, getFormData, searchBtn } from './dom';

let data;

formPrevent();

searchBtn.addEventListener('click', () => {

    data = getFormData();

});

// TODO: get api info
// TODO: render data on view