import { MessageService } from './../comment-service/comment.service';
import { Component, OnInit } from '@angular/core';
import { default as data } from '/src/data.json';

interface User {
  content: string;
  createdAt: string;
  id: number;
  replies: any[];
  score: number;
  user: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  message = {};

  users = data.comments.sort((a: any, b: any) => b.score - a.score);
  currentUser = data.currentUser;

  constructor(private comment: MessageService) {}

  ngOnInit(): void {
    this.comment.currentMessage.subscribe(
      (message) => (this.message = message)
    );

    console.log(this.users);
  }

  increase(index: number) {
    this.users[index].score++;
    console.log(this.users[index].score);
  }

  decrease(index: number) {
    this.users[index].score--;
  }

  deleteFromReplies(index: number) {
    this.users[index].replies.splice(index, 1);
  }

  deleteFromComments(index: number) {
    this.users.splice(index, 1);
  }

  reply(index: number) {
    console.log(this.users[index]);
    console.log(this.message);
  }
}
