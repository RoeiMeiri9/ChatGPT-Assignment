import { Component } from '@angular/core';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatMessageClientComponent } from './components/chat-message-client/chat-message-client.component';
import { ChatMessageGptComponent } from './components/chat-message-gpt/chat-message-gpt.component';
import { APIService } from '../services/api.service';
import { Message } from '../shared/interfaces';

@Component({
  selector: 'app-chat-board',
  imports: [
    ChatInputComponent,
    ChatMessageClientComponent,
    ChatMessageGptComponent,
  ],
  templateUrl: './chat-board.component.html',
  styleUrl: './chat-board.component.scss',
})
export class ChatBoardComponent {
  messageList: Message[] = [];

  constructor(private api: APIService) {}

  sendPrompt(promptToSend: string) {
    this.api.sendPrompt(promptToSend).subscribe((result) => {
      this.messageList.concat(result);
    });
  }
}
