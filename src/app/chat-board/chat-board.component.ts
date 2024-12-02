import { Component } from '@angular/core';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatMessageClientComponent } from './components/chat-message-client/chat-message-client.component';
import { ChatMessageGptComponent } from './components/chat-message-gpt/chat-message-gpt.component';

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

  

  sendMessages(messageToSend: string){

  }
}
