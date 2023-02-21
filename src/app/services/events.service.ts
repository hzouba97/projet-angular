import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Events} from "../models/events";
import {catchError, Observable} from "rxjs";

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

  updateEvent(editEvents: any): Observable<any> {
    const url = `http://localhost:3000/events/${editEvents.id}`;
    return this.http.put(url,editEvents);
  }





}
