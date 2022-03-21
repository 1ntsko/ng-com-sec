import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reply-comment',
  templateUrl: './reply-comment.component.html',
  styleUrls: ['./reply-comment.component.scss'],
})
export class ReplyCommentComponent implements OnInit {
  message: string = '';
  @Output() onReplySend: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  reply() {
    if (this.message !== '') {
      this.onReplySend.emit(this.message);
    }
  }
}
