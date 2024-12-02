import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageClientComponent } from './message-client.component';

describe('MessageClientComponent', () => {
  let component: MessageClientComponent;
  let fixture: ComponentFixture<MessageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
