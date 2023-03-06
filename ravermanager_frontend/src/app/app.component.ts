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

  public onOpenModal(raver: Raver, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRaverModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#editRaverModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteRaverModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
