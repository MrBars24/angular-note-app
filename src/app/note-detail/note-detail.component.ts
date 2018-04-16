import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { INote } from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  public note : INote;

  constructor(private data : NoteService) { }

  ngOnInit() {
    this.data.currentNote.subscribe(note => this.note = note);
  }

}
