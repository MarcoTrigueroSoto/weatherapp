const api_key ="9615f4b4ea56d013a90f49128a0e289d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const location = "Heredia, CR";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
