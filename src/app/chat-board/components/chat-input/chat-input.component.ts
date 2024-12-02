import { CommonModule } from '@angular/common';
import { Component, ElementRef, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { hebrewStrings } from '../../../shared/hebrewStrings';

@Component({
  selector: 'app-chat-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.scss',
})
export class ChatInputComponent {
  textArea = viewChild<ElementRef>('textarea');
  messageContent: string = '';
  hebrewStrings = hebrewStrings;

  emittingMessage = output<string>({
    alias: 'messageToSend',
  });

  sendMessage(event: Event, preventDefault: boolean = false) {
    if(preventDefault){
      event.preventDefault();
    }
    this.emittingMessage.emit(this.messageContent);
    (this.textArea()?.nativeElement as HTMLSpanElement).innerText = '';
  }
}
