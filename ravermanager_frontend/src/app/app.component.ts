import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Raver } from './Raver';
import { RaverService } from './raver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ravers: Raver[] = [];
  public editRaver: Raver = {id: -1, name: '', city: '', favDJ: '', phone: '', imageUrl: '', raverCode: ''};
  public deleteRaver: Raver = {id: -1, name: '', city: '', favDJ: '', phone: '', imageUrl: '', raverCode: ''};

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

  public onAddRaver(addForm: NgForm): void {
    document.getElementById('add-raver-form')?.click();
    this.raverService.addRaver(addForm.value).subscribe(
      (response: Raver) => {
        console.log(response);
        this.getRavers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateRaver(raver: Raver): void {
    document.getElementById('edit-raver-form')?.click();
    this.raverService.updateRaver(raver).subscribe(
      (response: Raver) => {
        console.log(response);
        this.getRavers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteRaver(raverID: number): void {
    document.getElementById('edit-raver-form')?.click();
    this.raverService.deleteRaver(raverID).subscribe(
      (response: void) => {
        console.log(response);
        this.getRavers();
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
      this.editRaver = raver;
      button.setAttribute('data-target', '#editRaverModal');
    }
    if (mode === 'delete') {
      this.deleteRaver = raver;
      button.setAttribute('data-target', '#deleteRaverModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
