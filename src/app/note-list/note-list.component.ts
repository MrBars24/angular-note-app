import { Observable } from 'rxjs/Observable';
import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { INote } from '../note';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

declare var $ : any;

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
    this.currentNote = note;
    this._noteService.changeNote(note);
  }

  appendData(data){
    this.notes.push(data);
  }

  openModal(){
     $('#noteModal').modal();
  }

  removeNote(e){
    for(var i=0; i<this.notes.length; i++){
      if(this.notes[i].id == e){
        this.notes.splice(i,1);
      }
    }
  }
  // updateNotes(e){
  //   this.notes.find(n=>n.id === e.id);
  //   const newHero = Object.assign(oldHero, hero);
  // }

}
