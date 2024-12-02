import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageGptComponent } from './chat-message-gpt.component';

describe('ChatMessageGptComponent', () => {
  let component: ChatMessageGptComponent;
  let fixture: ComponentFixture<ChatMessageGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessageGptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
