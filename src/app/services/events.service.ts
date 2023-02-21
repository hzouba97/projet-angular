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

  createEvents(createEvents: any):Observable<void>{
    return this.http.post<void>('http://localhost:3000/events',createEvents);
  }

  deleteEvent(id: number): Observable<any> {
    const url = `http://localhost:3000/events/${id}`;
    return this.http.delete(url);
  }

  updateEvent(event: Event): Observable<any> {
    const url = `http://localhost:3000/events/${id}`;
    return this.http.put(url, event);
  }





}
