import {Component, OnInit} from '@angular/core';
import {Events} from "../../models/events";
import {EventsService} from "../../services/events.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  events?: Events[];

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void{
    this.eventsService
      .fetchEvents()
      .subscribe(
        data => {
          this.events = data;
        });
  }

}
