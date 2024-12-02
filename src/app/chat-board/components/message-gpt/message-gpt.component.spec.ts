import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageGptComponent } from './message-gpt.component';

describe('MessageGptComponent', () => {
  let component: MessageGptComponent;
  let fixture: ComponentFixture<MessageGptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageGptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageGptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
