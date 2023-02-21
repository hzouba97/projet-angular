import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Events} from "../../models/events";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private http: HttpClient) { }
  onSubmit(data: Events){
    this.http.post('http://localhost:3000/events',data)
      .subscribe((result)=>{
        console.warn("result",result)
        })
  }

}
