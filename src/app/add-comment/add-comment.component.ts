import { MessageService } from "./../comment-service/comment.service";
import { Component, OnInit } from "@angular/core";
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

  constructor(private comment: MessageService) {}

  ngOnInit(): void {
    this.comment.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  addComment() {
    data.comments.push({
      id: 5,
      content: this.message,
      createdAt: `${new Date().toLocaleDateString()}`,
      replies: [],
      score: 0,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
        },
        username: data.currentUser.username,
      },
    });
    this.message = "";
  }
}
