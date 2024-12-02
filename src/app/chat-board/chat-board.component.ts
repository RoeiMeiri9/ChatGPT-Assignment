import { Component } from '@angular/core';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatMessageClientComponent } from './components/chat-message-client/chat-message-client.component';
import { ChatMessageGptComponent } from './components/chat-message-gpt/chat-message-gpt.component';
import { APIService } from '../services/api.service';
import { Message } from '../shared/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-board',
  imports: [
    ChatInputComponent,
    ChatMessageClientComponent,
    ChatMessageGptComponent,
    CommonModule,
  ],
  templateUrl: './chat-board.component.html',
  styleUrl: './chat-board.component.scss',
})
export class ChatBoardComponent {
  messageList!: Observable<Message[]>;

  constructor(private api: APIService) {}

  sendPrompt(promptToSend: string) {
    this.messageList = this.api.sendPrompt(promptToSend);
  }
}
