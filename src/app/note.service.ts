import { INote } from './note';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteService {
  public _url = 'http://localhost/note/';
  public n : INote = {
    id: null,
    note : '',
    status : '',
    created_at : new Date(),
    updated_at : new Date()
  };
  private temp = new BehaviorSubject<INote>(this.n);
  currentNote = this.temp.asObservable();

  constructor(private http: HttpClient) { 
    
  }

  getNotes() : Observable<INote[]>{
    return this.http.get<INote[]>(this._url);
  }

  changeNote(note:INote){
    this.temp.next(note);
  }

}
