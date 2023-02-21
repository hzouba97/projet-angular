import {Component} from '@angular/core';
import {EventsService} from "../../services/events.service";
import {Router,ActivatedRoute} from "@angular/router";
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
  constructor(private eventService:EventsService, private router: Router,private route: ActivatedRoute,) {}
  

  ngOnInit() {
    const ID = this.route.snapshot.paramMap.get('id');
    if(ID){
      console.log("ID")
    }
    else{
      console.log("NO ID") 
    }
  }
  addEvent(){
    this.eventService
      .createEvents(this.event)
  }




}
