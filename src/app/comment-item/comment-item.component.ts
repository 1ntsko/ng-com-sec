import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-comment-item",
  templateUrl: "./comment-item.component.html",
  styleUrls: ["./comment-item.component.scss"],
})
export class CommentItemComponent implements OnInit {
  isReplyActive = false;
  @Input() comment!: any;
  @Output() onChangeScore: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyScore: EventEmitter<any> = new EventEmitter<any>();
  @Output() onReplyText: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteComment: EventEmitter<any> = new EventEmitter<any>();

  isEditable: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeScore(type: string) {
    this.onChangeScore.emit({ id: this.comment.id, type });
  }

  handleReplyScore(data: any) {
    this.onReplyScore.emit(data);
  }

  toggleReply() {
    this.isReplyActive = !this.isReplyActive;
  }

  handleReplyComment(text: string) {
    this.onReplyText.emit({ content: text, id: this.comment.id });
    this.toggleReply();
  }

  deleteComment() {
    this.onDeleteComment.emit(this.comment.id);
  }

  deleteReplyHandler(id: any) {
    this.comment.replies.splice(id, 1);
  }

  makeEditable() {
    this.isEditable = !this.isEditable;
  }
}
