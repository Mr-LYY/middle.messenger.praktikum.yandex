import Block from '../../utils/Block';
import template from './formInput.hbs';

interface FormInputProps {
    heading: string;
    value?: string;
    type: string;
    required?: boolean;
}

export class FormInput extends Block {
    constructor(props: FormInputProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
