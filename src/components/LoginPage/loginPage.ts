import Block from '../../utils/Block';
import template from './loginPage.hbs';
import FormInput from "../FormInput";
import Button from "../Button";

export class LoginPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.formInput1 = new FormInput({
            heading: "Логин",
            type: "text",
            required: true
        })
        this.children.formInput2 = new FormInput({
            heading: "Пароль",
            type: "password",
            required: true
        })
        this.children.button = new Button({
            type: 'submit',
            text: 'Войти'
        })
    }

    render() {
        return this.compile(template, []);
    }
}
