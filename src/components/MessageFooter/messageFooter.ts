import Block from '../../utils/Block';
import template from './messageFooter.hbs';

interface MessageFooterProps {
    icons: any;
}

export class MessageFooter extends Block {
    constructor(props: MessageFooterProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
