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
  promptContent: string = '';
  hebrewStrings = hebrewStrings;

  emittingPrompt = output<string>({
    alias: 'promptToSend',
  });

  sendPrompt(event: Event, preventDefault: boolean = false) {
    if(preventDefault){
      event.preventDefault();
    }
    this.emittingPrompt.emit(this.promptContent);
    (this.textArea()?.nativeElement as HTMLSpanElement).innerText = '';
  }
}
