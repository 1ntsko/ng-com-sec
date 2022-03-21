import { MessageService } from "../comment-service/comment.service";
import { Component, OnInit } from "@angular/core";
import { default as data } from "/src/data.json";

interface User {
  content: string;
  createdAt: number;
  id: number;
  score: number;
  user: string;
  replyingTo: string;
}

@Component({
  selector: "app-comment-shell",
  templateUrl: "./comment-shell.component.html",
  styleUrls: ["./comment-shell.component.scss"],
})
export class CommentShellComponent implements OnInit {
  message = {};
  comments = data.comments.sort((a: any, b: any) => b.score - a.score);
  currentUser = data.currentUser;
  isReplyActive: boolean = false;

  constructor(private comment: MessageService) {}

  ngOnInit(): void {
    this.comment.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  changeScoreHandler(data: any) {
    this.comments.forEach((item: any) => {
      if (item.id == data.id) {
        if (data.type == "plus") {
          item.score++;
          return;
        }
        if (item.score > 0) item.score--;
      }
    });
  }

  handleOnReplyScoreChange(data: any) {
    this.comments.forEach((item: any) => {
      item.replies.forEach((reply: any) => {
        if (reply.id == data.id) {
          if (data.type == "plus") {
            ++reply.score;
            return;
          }
          if (reply.score > 0) --reply.score;
        }
      });
    });

    // localStorage.setItem('bla', this.comments);
  }

  handleReplyContent(data: any) {
    const toReplyUser = this.comments.find((user: any) => user.id == data.id);
    const reply: User = {
      id: this.calculateId(),
      content: data.content,
      createdAt: new Date().getDate(),
      score: 0,
      user: this.currentUser,
      replyingTo: toReplyUser.user.username,
    };

    toReplyUser.replies.push(reply);
  }

  calculateId() {
    let id = 1;

    this.comments.forEach((mainComment: any) => {
      if (mainComment.id > id) id = mainComment.id;
    });

    this.comments.forEach((mainComment: any) => {
      mainComment.replies.forEach((reply: any) => {
        if (reply.id > id) id = reply.id;
      });
    });

    return ++id;
  }

  deleteCommentHandler(id: number) {
    this.comments.splice(id, 1);
  }
}
