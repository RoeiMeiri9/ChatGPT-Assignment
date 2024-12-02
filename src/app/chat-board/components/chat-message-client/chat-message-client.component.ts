import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chat-message-client',
  imports: [],
  templateUrl: './chat-message-client.component.html',
  styleUrl: './chat-message-client.component.scss'
})
export class ChatMessageClientComponent {
  message = input.required<string>({
    alias: "message",
  });
}
