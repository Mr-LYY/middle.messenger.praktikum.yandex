import Block from '../../utils/Block';
import template from './errorPartial.hbs';

interface ErrorPartialProps {
    code: number;
    text: string;
}

export class ErrorPartial extends Block {
    constructor(props: ErrorPartialProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
