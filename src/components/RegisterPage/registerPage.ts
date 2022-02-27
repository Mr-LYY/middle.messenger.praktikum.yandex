import Block from '../../utils/Block';
import template from './register.hbs';
import FormInput from "../FormInput";
import Button from "../Button";

export class RegisterPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.formInput1 = new FormInput({
            heading: "Почта",
            type: "email",
            required: true
        })
        this.children.formInput2 = new FormInput({
            heading: "Логин",
            type: "text",
            required: true
        })
        this.children.formInput3 = new FormInput({
            heading: "Имя",
            type: "text",
            required: true
        })
        this.children.formInput4 = new FormInput({
            heading: "Фамилия",
            type: "text",
            required: true
        })
        this.children.formInput5 = new FormInput({
            heading: "Телефон",
            type: "tel",
            required: true
        })
        this.children.formInput6 = new FormInput({
            heading: "Пароль",
            type: "password",
            required: true
        })
        this.children.formInput7 = new FormInput({
            heading: "Пароль (еще раз)",
            type: "password",
            required: true
        })
        this.children.button = new Button({
            type: 'submit',
            text: 'Зерегистрироваться'
        })
    }

    render() {
        return this.compile(template, []);
    }
}
