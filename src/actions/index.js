import axios from 'axios';

const API_KEY = 'e1ea0831d29d1d730b4e288865a79f73';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) { // action is an object that always has a type
    const url = `${ROOT_URL}&q=${city},us&appid=${API_KEY}`;
    const request = axios.get(url);

    console.log('Request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}