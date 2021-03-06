const key = '291f2db75d12957358be3e8e29761005';

export default async function weatherApi(city, units = 'metric') {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${key}`;
  const response = await fetch(url);
  return response.json();
}