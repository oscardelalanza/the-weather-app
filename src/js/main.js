import '@fortawesome/fontawesome-free/js/all';
import '../assets/sass/styles.scss';
import {
  formPrevent, getFormData, searchBtn, setData, setError,
} from './dom';
import { weatherApi } from './api';

let data;

formPrevent();

searchBtn.addEventListener('click', () => {
  data = getFormData();

  if (data) {
    weatherApi(data.city, data.units).then(json => {
      if (json.cod === 200) {
        setData(json, data.units);
      } else {
        setError(json);
      }
    });
  }
});