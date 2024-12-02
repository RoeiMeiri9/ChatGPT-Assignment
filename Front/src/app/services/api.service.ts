import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { errorMessages } from '../shared/error';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:3200/').subscribe(console.log);

  }


  test(){
    
  }

  sendPrompt(promptToSend: string): Observable<Message[]> {
    // if (promptToSend.trim() !== '') {
    return this.httpClient.post<Message[]>('http://localhost:3200/prompt', {
      content: promptToSend,
    });
    // } else {
    //   throw errorMessages.emptyPrompt;
    // }
  }
}
