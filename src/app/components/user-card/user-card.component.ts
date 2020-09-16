import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() UserName: string = 'Hello';
  @Output() OnSendMesssage: EventEmitter<{message: string}> = new EventEmitter();
  @Output() OnClose: EventEmitter<{close: boolean}> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSend(message: string) {
    this.OnSendMesssage.emit({message});
  }

  close() {
    this.OnClose.emit({close: true});
  }

}
