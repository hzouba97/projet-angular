import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Events} from "../models/events";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  fetchEvents(): Observable<Events[]>{
    return this.http.get<Events[]>('http://localhost:3000/events');
  }

}
