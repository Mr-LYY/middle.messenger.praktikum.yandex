import Block from '../../utils/Block';
import template from './chatPage.hbs';
import Header from '../Header';
import Message from '../Message';
import { ICONS } from '../../icons/icons';
import MessageFooter from '../MessageFooter';

export class ChatPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.header = new Header({
            back: true,
            heading: 'Андрей',
            icons: ICONS,
        });
        this.children.message1 = new Message({
            text: 'Привет Андрюха! Как дела?',
            isMine: true,
            isRead: true,
            time: '10:42',
            icons: ICONS,
        });
        this.children.message2 = new Message({
            text: 'Ооо, привет) Да всё хорошо, у тебя как?',
            isMine: false,
            isRead: true,
            time: '10:42',
            icons: ICONS,
        });
        this.children.message3 = new Message({
            text: 'Ну тоже все отлично, погнали в бар!',
            isMine: true,
            isRead: false,
            time: '10:42',
            icons: ICONS,
        });
        this.children.messageFooter = new MessageFooter({
            icons: ICONS,
        });
    }

    render() {
        return this.compile(template, []);
    }
}
