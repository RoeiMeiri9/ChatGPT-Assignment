import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-message-gpt',
  imports: [],
  templateUrl: './chat-message-gpt.component.html',
  styleUrl: './chat-message-gpt.component.scss'
})
export class ChatMessageGptComponent {
  message = input.required<string>({
    alias: "message",
  });
}
