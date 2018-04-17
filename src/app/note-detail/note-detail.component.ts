import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteService } from './../note.service';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { INote } from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnChanges {
  //public note : INote;
  public updateForm : FormGroup;
  @Input('singleNote') note : INote;
  @Output() rnote = new EventEmitter<any>();
  stat : any;

  constructor(private data : NoteService) { 
    this.stat = this.data.status;
    this.createUpdateForm();
  }

  ngOnChanges() {
    this.rebuildForm();
    //this.data.currentNote.subscribe(note => this.note = note);
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      title: new FormControl('', Validators.required),
      desc: new FormControl(),
      status: new FormControl('', Validators.required)
    });
  }

  rebuildForm(){
    if(this.note != null){
      this.updateForm.reset({
        title:this.note.note,
        desc:this.note.des,
        status: this.note.status
      });
    }
  }

  update(){
    this.updateForm.value.id = this.note.id;
    this.data.updateNote(this.updateForm.value).subscribe(data => {
      Object.assign(this.note, data);
    });
    //this.unote.emit(this.note);
  }

  destroy(){
    this.data.deleteNote({ id : this.note.id}).subscribe(data => {});
    this.rnote.emit(this.note.id);
    this.note = null;
  }

}
