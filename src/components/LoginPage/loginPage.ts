import Block from '../../utils/Block';
import template from './loginPage.hbs';

import Button from '../Button';
import FormInputCase from '../FormInputCase';

export class LoginPage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.formInputCase1 = new FormInputCase({
            title: 'Логин',
            type: 'text',
            required: true,
            id: 'loginLogin',
            validationLabel: 'LOGIN',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this),
            },
            errorMessage: '',
        });

        this.children.formInputCase2 = new FormInputCase({
            title: 'Пароль',
            type: 'password',
            required: true,
            id: 'registerPassword',
            validationLabel: 'PASSWORD',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this),
            },
            errorMessage: '',
        });

        this.children.button = new Button({
            type: 'submit',
            text: 'Войти',
        });
    }

    render() {
        return this.compile(template, []);
    }
}
