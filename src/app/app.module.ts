import { NoteService } from './note.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
