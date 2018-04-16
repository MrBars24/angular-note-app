import { Observable } from 'rxjs/Observable';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { INote } from '../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  public notes : INote[];
  public currentNote : INote;

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
    this._noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  viewNote(note){
    this._noteService.changeNote(note);
  }

}
