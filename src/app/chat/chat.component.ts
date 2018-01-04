import { Component, ViewChild, ElementRef, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./chat.component.scss'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  chat: Chat[];
  @ViewChild('messageInput') messageInputRef: ElementRef;

  messages = new Array();
  item: number = 0;
  constructor(private elRef: ElementRef, private chatService: ChatService) {
    this.chat = chatService.chat1;
  }

  ngOnInit() {
    $.getScript('./assets/js/chat.js');
  }

  //send button function calls
  onAddMessage() {
    if (this.messageInputRef.nativeElement.value != "") {
      this.messages.push(this.messageInputRef.nativeElement.value);
    }
    this.messageInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.focus();
  }

  //chat user list click event function
  SetActive(event, chatId: string) {
    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.getElementsByClassName('list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item no-border');
    });
    //set active class for selected item 
    event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

    this.messages = [];

    if (chatId === 'chat1') {
      this.chat = this.chatService.chat1;
    }
    else if (chatId === 'chat2') {
      this.chat = this.chatService.chat2;
    }
    else if (chatId === 'chat3') {
      this.chat = this.chatService.chat3;
    }
    else if (chatId === 'chat4') {
      this.chat = this.chatService.chat4;
    }
    else if (chatId === 'chat5') {
      this.chat = this.chatService.chat5;
    }
    else if (chatId === 'chat6') {
      this.chat = this.chatService.chat6;
    }
    else if (chatId === 'chat7') {
      this.chat = this.chatService.chat7;
    }

  }

}
