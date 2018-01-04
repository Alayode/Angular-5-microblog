import { Injectable } from '@angular/core';
import { Chat } from './chat.model';

@Injectable()
export class ChatService {

    constructor() { }
    
    public chat1: Chat[] = [
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-1.png',
            '',
            [
                'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
            ],
            'text',
            4629293242,
            '4:14 AM',
            3),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '1 hour ago',
            [
               'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
            ],
            'text',
            4629293242,
            '4:14 AM',
            3),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-1.png',
            '30 minutes ago',
            [
                'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
            ],
            'text',
            4629293242,
            '4:14 AM',
            3),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '20 minutes ago',
            [
                'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
            ],
            'text',
            4629293242,
            '4:14 AM',
            3),
        new Chat(
            'left',
            'chat chat-left',
            'assets/img/portrait/small/avatar-s-3.png',
            '10 minutes ago',
            [
                'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
            ],
            'text',
            4629293242,
            '4:14 AM',
            3)
         ];
        public chat2: Chat[] = [
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-3.png',
                '1 hour ago',
                [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 5 bootstrap compatible.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '30 minutes ago',
                [
                    'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '20 minutes ago',
                [
                    'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'http://static.videogular.com/assets/audios/videogular.mp3'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '10 minutes ago',
                [
                    'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3)    
        ];
        public chat3: Chat[] = [
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-3.png',
                '1 hour ago',
                [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 5 bootstrap compatible.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '30 minutes ago',
                [
                    'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '20 minutes ago',
                [
                    'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'http://static.videogular.com/assets/audios/videogular.mp3'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '10 minutes ago',
                [
                    'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3)    
                new Chat(
                    'left',
                    'chat chat-left',
                    'assets/img/portrait/small/avatar-s-1.png',
                    '',
                    [
                        'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3),
                new Chat(
                    'left',
                    'chat chat-left',
                    'assets/img/portrait/small/avatar-s-3.png',
                    '1 hour ago',
                    [
                        'Hey John, I am looking for the best admin template.',
                        'Could you please help me to find it out?',
                        'It should be angular 5 bootstrap compatible.'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3),
                new Chat(
                    'left',
                    'chat',
                    'assets/img/portrait/small/avatar-s-1.png',
                    '30 minutes ago',
                    [
                        'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3),
                new Chat(
                    'left',
                    'chat',
                    'assets/img/portrait/small/avatar-s-3.png',
                    '20 minutes ago',
                    [
                        'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3),
                new Chat(
                    'left',
                    'chat',
                    'assets/img/portrait/small/avatar-s-1.png',
                    '',
                    [
                        'http://static.videogular.com/assets/audios/videogular.mp3'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3),
                new Chat(
                    'left',
                    'chat',
                    'assets/img/portrait/small/avatar-s-3.png',
                    '10 minutes ago',
                    [
                        'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3),
                new Chat(
                    'left',
                    'chat',
                    'assets/img/portrait/small/avatar-s-1.png',
                    '',
                    [
                        'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                    ],
                    'text',
                    4629293242,
                    '4:14 AM',
                    3)    
        ];
        public chat5: Chat[] = [
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-3.png',
                '1 hour ago',
                [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 5 bootstrap compatible.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '30 minutes ago',
                [
                    'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '20 minutes ago',
                [
                    'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'http://static.videogular.com/assets/audios/videogular.mp3'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '10 minutes ago',
                [
                    'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3)    
        ];
        public chat6: Chat[] = [
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-3.png',
                '1 hour ago',
                [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 5 bootstrap compatible.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '30 minutes ago',
                [
                    'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '20 minutes ago',
                [
                    'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'http://static.videogular.com/assets/audios/videogular.mp3'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '10 minutes ago',
                [
                    'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3)    
        ];
        public chat7: Chat[] = [
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat chat-left',
                'assets/img/portrait/small/avatar-s-3.png',
                '1 hour ago',
                [
                    'Hey John, I am looking for the best admin template.',
                    'Could you please help me to find it out?',
                    'It should be angular 5 bootstrap compatible.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '30 minutes ago',
                [
                    'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '20 minutes ago',
                [
                    'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'http://static.videogular.com/assets/audios/videogular.mp3'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-3.png',
                '10 minutes ago',
                [
                    'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3),
            new Chat(
                'left',
                'chat',
                'assets/img/portrait/small/avatar-s-1.png',
                '',
                [
                    'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.'
                ],
                'text',
                4629293242,
                '4:14 AM',
                3)    
        ];


    }
