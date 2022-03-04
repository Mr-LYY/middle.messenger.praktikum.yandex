import Block from '../../utils/Block';
import template from './header.hbs';

interface HeaderProps {
    heading: string;
    back?: boolean;
    icons: any;
}

export class Header extends Block {
    constructor(props: HeaderProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
