export class Chat {
    public avatar: string;
    public chatClass: string;
    public imagePath: string;
    public time: string;
    public messageType: string;

    // For timeline post
    public id: number;
    public messages: string[];
    public ts: number;
    public user: number;
  
    constructor(
                avatar: string, 
                chatClass:string, 
                imagePath: string, 
                time: string, 
                messages: string[], 
                messageType: string,
                id: number, 
                ts: string,
                user: number
              ) {

      this.avatar = avatar;
      this.chatClass = chatClass;
      this.imagePath = imagePath;
      this.time = time;
      this.messages = messages;
      this.messageType = messageType;
      this.id = id;
      this.ts = ts;
      this.user = user;
    }
  }
  