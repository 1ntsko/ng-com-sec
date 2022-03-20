import { MessageService } from './comment-service/comment.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [AppComponent, AddCommentComponent, CommentsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
