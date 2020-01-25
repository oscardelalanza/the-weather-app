const form = document.getElementById('form');
const searchBtn = document.getElementById('searchBtn');
const labelTemp = document.getElementById('labelTemp');
const city = document.getElementById('name');
const temp = document.getElementById('temp');
const minMax = document.getElementById('minMax');
const description = document.getElementById('description');
const wind = document.getElementById('wind');
const clouds = document.getElementById('clouds');
const country = document.getElementById('country');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const body = document.getElementById('body');

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

const setData = (json, units) => {
  labelTemp.innerText = units === 'metric' ? 'Temp: °C' : 'Temp: °F';
  city.innerText = json.name;
  temp.innerText = `${json.main.temp}°`;
  minMax.innerText = `${json.main.temp_min}° / ${json.main.temp_max}°`;
  description.innerText = json.weather[0].description;
  wind.innerText = json.wind.speed + (units === 'metric' ? ' m/s' : ' mi/s');
  clouds.innerText = `${json.clouds.all}%`;
  country.innerText = json.sys.country;
  humidity.innerText = `${json.main.humidity}%`;
  pressure.innerText = `${json.main.pressure}hPa`;
  body.style.backgroundImage = `url("https://source.unsplash.com/random/?${json.weather[0].main}-weather")`;
};

const setError = json => {
  temp.innerText = json.message;
};

export {

  formPrevent,
  getFormData,
  searchBtn,
  setData,
  setError,

};