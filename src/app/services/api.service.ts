import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {}

  sendPrompt(promptToSend: string): Observable<Message[]> {
    return this.httpClient.post<Message[]>('http://localhost:3200/prompt', {
      promptToSend,
    });
  }
}
