import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Raver } from './Raver';
import { RaverService } from './raver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ravers: Raver[] = [];

  constructor(private raverService: RaverService){}

  ngOnInit() {
    this.getRavers();
  }

  public getRavers(): void {
    this.raverService.getRavers().subscribe(
      (response: Raver[]) => {
        this.ravers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
