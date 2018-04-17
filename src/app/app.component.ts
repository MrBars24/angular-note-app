import { NoteService } from './note.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteListComponent } from './note-list/note-list.component';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(NoteListComponent) noteList:NoteListComponent;
  title = 'app';
  addForm: FormGroup;

  constructor(private _service: NoteService) { }
  
  ngOnInit(){
    this.createForm();
  }

  saveNote() {
    this._service.saveNote(this.addForm.value).subscribe(data => {
      this.noteList.appendData(data);
      $("#noteModal").modal('toggle');
    });
  }

  createForm() {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl(),
      status: new FormControl('', Validators.required)
    });
  }
}
