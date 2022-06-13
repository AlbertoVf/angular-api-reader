import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData() {
    await this.http
      .get<any>(environment.apiUrl + '/')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
