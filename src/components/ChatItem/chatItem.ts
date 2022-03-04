import Block from '../../utils/Block';
import template from './chatItem.hbs';

interface ChatItemProps {
    avatar: string;
    name: string;
    lastMessage: string;
    lastMessageTime: string;
    unreadCount: number;
    isMine: boolean;
}

export class ChatItem extends Block {
    constructor(props: ChatItemProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
