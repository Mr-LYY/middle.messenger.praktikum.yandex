import Block from '../../utils/Block';
import template from './indexPage.hbs';
import Header from '../Header';
import ChatItem from '../ChatItem';
import { ICONS } from '../../icons/icons';

export class IndexPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.header = new Header({
            heading: 'Чаттер',
            icons: ICONS,
        });
        this.children.chat1 = new ChatItem({
            name: 'Андрей',
            avatar: 'https://via.placeholder.com/150',
            isMine: false,
            unreadCount: 2,
            lastMessage: 'Изображение',
            lastMessageTime: '10:47',
        });
        this.children.chat2 = new ChatItem({
            name: 'Василий',
            avatar: 'https://via.placeholder.com/150',
            isMine: true,
            unreadCount: 0,
            lastMessage: 'Пойдем гулять!',
            lastMessageTime: '11:01',
        });
        this.children.chat3 = new ChatItem({
            name: 'Петька',
            avatar: 'https://via.placeholder.com/150',
            isMine: true,
            unreadCount: 0,
            lastMessage: 'Ууу, Петька, ты даёшь!',
            lastMessageTime: '11:23',
        });
        this.children.chat4 = new ChatItem({
            name: 'Сашка',
            avatar: 'https://via.placeholder.com/150',
            isMine: true,
            unreadCount: 0,
            lastMessage: 'Как дела, Сашка?',
            lastMessageTime: '11:24',
        });
        this.children.chat5 = new ChatItem({
            name: 'Garry',
            avatar: 'https://via.placeholder.com/150',
            isMine: true,
            unreadCount: 0,
            lastMessage: 'Hi,dude! How re u doing?',
            lastMessageTime: '12:41',
        });
    }

    render() {
        return this.compile(template, []);
    }
}
