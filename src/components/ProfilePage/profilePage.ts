import Block from '../../utils/Block';
import template from './profilePage.hbs';

import FormInputCase from "../FormInputCase";
import Header from "../Header";
import {ICONS} from "../../icons/icons";

export class ProfilePage extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.header = new Header({
            heading: 'Профиль',
            back: true,
            icons: ICONS
        })

        this.children.formInputCase1 = new FormInputCase({
            value: "pochta@yandex.ru",
            title: 'Почта',
            type: "email",
            required: true,
            id: 'profileEmail',
            validationLabel: 'EMAIL',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase2 = new FormInputCase({
            value: "lyulekin",
            title: 'Логин',
            type: "text",
            required: true,
            id: 'profileName',
            validationLabel: 'LOGIN',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase3 = new FormInputCase({
            value: "Дмитрий",
            title: 'Имя',
            type: "text",
            required: true,
            id: 'profileLogin',
            validationLabel: 'NAMES',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase4 = new FormInputCase({
            value: "Люлекин",
            title: 'Фамилия',
            type: "text",
            required: true,
            id: 'profileLastname',
            validationLabel: 'NAMES',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })

        this.children.formInputCase5 = new FormInputCase({
            value: "+7 (916) 889 72 93",
            title: 'Фамилия',
            type: "tel",
            required: true,
            id: 'profilePhone',
            validationLabel: 'PHONE',
            childEvents: {
                keyup: this.validateInput.bind(this),
                focus: this.validateInput.bind(this),
                blur: this.validateInput.bind(this)
            },
            errorMessage: ''
        })
    }

    render() {
        return this.compile(template, []);
    }
}
