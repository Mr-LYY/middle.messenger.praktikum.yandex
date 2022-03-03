import Block from '../../utils/Block';
import template from './formInputCase.hbs';
import FormInput from "../FormInput";
import InputErrorMessage from "../InputErrorMessage";

interface FormInputCaseProps {
    value?: string;
    title: string;
    type: string;
    required: boolean;
    id: string;
    validationLabel: string;
    childEvents?: {
        focus?: (e: any) => void;
        blur?: (e: any) => void;
        keyup?: (e: any) => void;
    };
    errorMessage: string;
}

export class FormInputCase extends Block {
    constructor(props: FormInputCaseProps) {
        super(props);
    }

    protected initChildren() {
        this.children.formInput = new FormInput({
            type: this.props.type,
            value: this.props.value,
            required: this.props.required,
            id: this.props.id,
            validationLabel: this.props.validationLabel,
            events: this.props.childEvents
        })

        this.children.errorMessage = new InputErrorMessage({
            message: this.props.errorMessage
        })
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
