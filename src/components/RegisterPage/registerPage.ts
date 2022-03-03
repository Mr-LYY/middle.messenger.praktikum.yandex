import Block from '../../utils/Block';
import template from './register.hbs';

import Button from "../Button";
import FormInputCase from '../FormInputCase';

export class RegisterPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.formInputCase = new FormInputCase({
            title: 'Почта',
            type: "email",
            required: true,
            id: 'registerEmail',
            validationLabel: 'EMAIL',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase2 = new FormInputCase({
            title: 'Логин',
            type: "text",
            required: true,
            id: 'registerLogin',
            validationLabel: 'LOGIN',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase3 = new FormInputCase({
            title: 'Имя',
            type: "text",
            required: true,
            id: 'registerName',
            validationLabel: 'NAMES',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase4 = new FormInputCase({
            title: 'Фамилия',
            type: "text",
            required: true,
            id: 'registerLastname',
            validationLabel: 'NAMES',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase5 = new FormInputCase({
            title: 'Телефон',
            type: "tel",
            required: true,
            id: 'registerPhone',
            validationLabel: 'PHONE',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase6 = new FormInputCase({
            title: 'Пароль',
            type: "password",
            required: true,
            id: 'registerPassword',
            validationLabel: 'PASSWORD',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase7 = new FormInputCase({
            title: 'Пароль (повторно)',
            type: "password",
            required: true,
            id: 'registerRepeatPassword',
            validationLabel: 'PASSWORD_AGAIN',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.button = new Button({
            type: 'submit',
            text: 'Зарегистрироваться'
        })
    }

    render() {
        return this.compile(template, []);
    }
}
