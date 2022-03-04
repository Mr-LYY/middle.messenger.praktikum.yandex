import Block from '../../utils/Block';
import template from './formInput.hbs';

interface FormInputProps {
    value?: string;
    type: string;
    id: string;
    validationLabel: string;
    required?: boolean;
    events?: {
        focus?: () => void;
        blur?: () => void;
    };
}

export class FormInput extends Block {
    constructor(props: FormInputProps) {
        super(props);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
