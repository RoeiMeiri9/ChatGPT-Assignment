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
  // NOTE: We are using a span instead of a real textarea, since it handles overflows automatically.
  textArea = viewChild<ElementRef>('textarea');
  promptContent: string = '';
  hebrewStrings = hebrewStrings;

  emittingPrompt = output<string>({
    alias: 'promptToSend',
  });

  /**
   * Sending prompt to outer component and clearing the textarea
   * @param event The event interface
   * @param preventDefault When true, will call event.preventDefault(), thus prevent things like adding new lines when enter was pressed
   */
  sendPrompt(event: Event, preventDefault: boolean = false) {
    if (preventDefault) {
      event.preventDefault();
    }
    this.emittingPrompt.emit(this.promptContent);
    (this.textArea()?.nativeElement as HTMLSpanElement).innerText = '';
  }
}
