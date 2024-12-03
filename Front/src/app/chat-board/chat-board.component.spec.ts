import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoardComponent } from './chat-board.component';
import { APIService } from '../services/api.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Message } from '../shared/interfaces';
import { Observable, of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { ChangeDetectorRef, DebugElement, ElementRef } from '@angular/core';
import { errorMessages } from '../shared/error';

describe('ChatBoardComponent', () => {
  let component: ChatBoardComponent;
  let componentRef: DebugElement;
  let fixture: ComponentFixture<ChatBoardComponent>;

  let apiService: APIService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatBoardComponent],
      providers: [APIService, provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChatBoardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.debugElement;
    fixture.detectChanges();
    apiService = TestBed.inject(APIService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Ensuring empty prompt are not sent', () => {
    // Empty messages should be ignored
    it('Should ignore empty prompt', () => {
      expect(() => apiService.sendPrompt('')).toThrowError(
        errorMessages.emptyPrompt,
      );
    });
  });

  describe('Displaying messages on the board', () => {
    it('Should display one question and one answer', () => {
      // For every prompt the user is sending to the backend, the result should be a list of two messages:
      // 1. The prompt with ID and origin attached to it
      // 2. The actual answer from the API.
      // Both of them should be represented on the UI.

      // Setting a mockup (making an observer out of a list of messages)
      component.messageList = [
        { id: '0', content: 'foo', origin: 'User' },
        { id: '1', content: 'bar', origin: 'GPT' },
      ];

      const changeDetectorRef = componentRef.injector.get(ChangeDetectorRef);
      changeDetectorRef.markForCheck();

      // Detecting for changes on the UI
      fixture.detectChanges();

      // Get all rendered components inside the chat-board
      const messageClient = fixture.nativeElement.querySelectorAll(
        'app-chat-message-client',
      );
      const messageGPT = fixture.nativeElement.querySelectorAll(
        'app-chat-message-gpt',
      );

      // Making sure all both of the messages are presented
      expect(messageClient.length).toEqual(1);
      expect(messageGPT.length).toEqual(1);
    });
  });
});
