
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mflix-visualizer';
  results : Object[];
  obs : Observable<object>;
  constructor(private http : HttpClient){}

  load10Movies()
  {
    this.obs = this.http.get("https://3000-ca29810d-bc56-4ba4-bca3-48190a92f5c6.ws-eu01.gitpod.io/movies");
    this.obs.subscribe(this.getData);
  }

  getData = (data) => {
    this.results = data;
  }
}
