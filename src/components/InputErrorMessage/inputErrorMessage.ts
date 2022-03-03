import Block from '../../utils/Block';
import template from './inputErrorMessage.hbs';

interface InputErrorMessageProps {
    message: string;
}

export class InputErrorMessage extends Block {
    constructor(props: InputErrorMessageProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
