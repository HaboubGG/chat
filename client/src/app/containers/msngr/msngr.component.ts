import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-msngr',
  templateUrl: './msngr.component.html',
  styleUrls: ['./msngr.component.scss']
})
export class MsngrComponent {
  messages: any[] = [];
  username!: string;
  recipient!: string;
  message!: string;
 
  constructor(private chatService: ChatService) {}
 
  ngOnInit() {
     this.chatService.getMessages().subscribe((message) => {
       this.messages.push(message);
     });
  }
 
  joinChat() {
     this.chatService.joinChat(this.username, this.recipient);
  }
 
  sendMessage() {
     this.chatService.sendMessage(this.message, this.username, this.recipient);
     this.message = '';
  }
}
