import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../../../Shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { errorMessages } from '../shared/error';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Sending the prompt to the BE
   * @param promptToSend prompt to send to the BE. Must not be empty
   * @returns Observable of the request to be listened to
   */
  sendPrompt(promptToSend: string): Observable<Message[]> {
    if (promptToSend.trim() !== '') {
      return this.httpClient.post<Message[]>('http://localhost:3200/prompt', {
        content: promptToSend,
      });
    } else {
      throw errorMessages.emptyPrompt;
    }
  }
}
