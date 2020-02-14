

//-------Error documentation------------//
//recieving the error Property 'apiUrl' does not exist on type '{ production: boolean; }'
//on line 20 related to environment and the apikey, also issue with apiUrl


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import * as moment from 'moment';
//const apiKey: string = environment.apiKey;
 const apiKey: string = '077808485fa26003a5b99b7d2834832c';
 const apiUrl: string = 'http://api.openweathermap.org';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }
  getCurrentWeather(loc: string) {
    //console.log(apiKey);
    return this.http.get(`${apiUrl}/weather?q=${loc}&appid=${apiKey}`)
  }
  getForecast(loc: string) {
    return this.http.get(`${apiUrl}/forecast?q=${loc}&appid=${apiKey}`)
  }
  getUv(lat: number, lon: number) {
    let startDate = Math.round(+moment(new Date()).subtract(1, 'week').toDate() / 1000);
    let endDate = Math.round(+moment(new Date()).add(1, 'week').toDate() / 1000);
    return this.http.get(`${apiUrl}/uvi/history?lat=${lat}&lon=${lon}&start=${startDate}&end=${endDate}&appid=${apiKey}`)
  }
}