import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-reply-item",
  templateUrl: "./reply-item.component.html",
  styleUrls: ["./reply-item.component.scss"],
})
export class ReplyItemComponent implements OnInit {
  @Input() reply!: any;
  @Input() replies!: any;
  @Output() onReplyScoreChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteReply: EventEmitter<any> = new EventEmitter<any>();

  isEditable: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  changeReplyScore(type: string) {
    this.onReplyScoreChange.emit({ id: this.reply.id, type });
  }

  deleteReplyComment() {
    this.onDeleteReply.emit(this.reply.id);
  }

  makeEditable() {
    this.isEditable = !this.isEditable;
  }
}
