import Block from '../../utils/Block';
import template from './message.hbs';

interface MessageProps {
    time: string;
    text: string;
    isMine: boolean;
    isRead: boolean;
    icons: any;
}

export class Message extends Block {
    constructor(props: MessageProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
