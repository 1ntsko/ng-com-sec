import { MessageService } from './comment-service/comment.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';
import { CommentShellComponent } from './comment-shell/comment-shell.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { ReplyItemComponent } from './comment-item/reply-item/reply-item.component';
import { ReplyCommentComponent } from './reply-comment/reply-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCommentComponent,
    CommentShellComponent,
    CommentItemComponent,
    ReplyItemComponent,
    ReplyCommentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
