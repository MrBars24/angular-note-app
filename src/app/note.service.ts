import { RequestOptions } from '@angular/http';
import { INote } from './note';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NoteService {
  public _url = 'http://localhost/note/';
  public _add = 'http://localhost/note/add.php';
  public n : INote = {
    id: null,
    note : '',
    des : '',
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

  saveNote(data){
    let options = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.http.post(this._add,data,{headers:options});
  }

}
