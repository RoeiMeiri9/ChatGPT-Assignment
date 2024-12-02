import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageClientComponent } from './chat-message-client.component';

describe('ChatMessageClientComponent', () => {
  let component: ChatMessageClientComponent;
  let fixture: ComponentFixture<ChatMessageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMessageClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
