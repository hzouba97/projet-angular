import {Component, OnInit} from '@angular/core';
import {Events} from "../../models/events";
import {EventsService} from "../../services/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events?: Events[];

  constructor(private eventsService: EventsService, private router: Router) {
  }

  ngOnInit(): void{
    this.eventsService
      .fetchEvents()
      .subscribe(
        data => {
          this.events = data;
        });
  }

  onDeleteEvent(id: number) {
    this.eventsService.deleteEvent(id)
      .subscribe(ok => alert("Event supprime"))
    location.reload();
  }

  onEditEvent(event:any){
    this.router.navigate(['events/add/'+event.id])
  }



}
