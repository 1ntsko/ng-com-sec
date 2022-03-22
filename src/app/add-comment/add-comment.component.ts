import { MessageService } from "./../comment-service/comment.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { default as data } from "/src/data.json";

@Component({
  selector: "app-add-comment",
  templateUrl: "./add-comment.component.html",
  styleUrls: ["./add-comment.component.scss"],
})
export class AddCommentComponent implements OnInit {
  imgPath: string = `./assets/${data.currentUser.image.png}`;
  username: string = `./assets/${data.currentUser.username}`;
  message: string = "";

  @Output() onMainComment: EventEmitter<any> = new EventEmitter<any>();

  constructor(private comment: MessageService) {}

  ngOnInit(): void {
    this.comment.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  addComment() {
    if (this.message.trim() !== "") {
      this.onMainComment.emit(this.message);
    }
    this.message = "";
  }
}
