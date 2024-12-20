import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatMessageClientComponent } from './components/chat-message-client/chat-message-client.component';
import { ChatMessageGptComponent } from './components/chat-message-gpt/chat-message-gpt.component';
import { APIService } from '../services/api.service';
import { Message } from '../../../../Shared/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-board',
  imports: [
    ChatInputComponent,
    ChatMessageClientComponent,
    ChatMessageGptComponent,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-board.component.html',
  styleUrl: './chat-board.component.scss',
  host: { class: 'container' },
})
export class ChatBoardComponent implements AfterViewChecked {
  messageList: Message[] = [];

  messageBoard = viewChild<ElementRef>('messageBoard');

  constructor(
    private api: APIService,
    private cdr: ChangeDetectorRef,
  ) {}

  /**
   * Sends the prompt and listen to the results
   * @param promptToSend Prompt to send to the BE
   */
  sendPrompt(promptToSend: string): void {
    this.api.sendPrompt(promptToSend).subscribe((result) => {
      this.messageList = this.messageList.concat(result);
      this.cdr.markForCheck(); // Manually trigger change detection
    });
  }

  ngAfterViewChecked() {
    const messageBoardElement = this.messageBoard()
      ?.nativeElement as HTMLElement;

    if(messageBoardElement.scrollTo){
      messageBoardElement.scrollTo(0, messageBoardElement.scrollHeight);
    }
  }
}
