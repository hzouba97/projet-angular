import {Component} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent  {

  event = {
    id: '',
    title: '',
    time: '',
    type: '',
  };

  constructor(private eventService:EventsService, private router: Router) {
  }

 addEvent(){
   this.eventService
     .createEvents(this.event)
     .subscribe(ok => alert("Event ajoute"))
   this.router.navigate(['/events']);
 }


}
