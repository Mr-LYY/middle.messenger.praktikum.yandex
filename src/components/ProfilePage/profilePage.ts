import Block from '../../utils/Block';
import template from './profilePage.hbs';
import Header from "../Header";
import FormInput from "../FormInput";
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
        this.children.formInput1 = new FormInput({
            heading: "Почта",
            value: "pochta@yandex.ru",
            type: "email"
        })
        this.children.formInput2 = new FormInput({
            heading: "Логин",
            value: "lyulekin",
            type: "text"
        })
        this.children.formInput3 = new FormInput({
            heading: "Имя",
            value: "Дмитрий",
            type: "text"
        })
        this.children.formInput4 = new FormInput({
            heading: "Фамилия",
            value: "Люлекин",
            type: "text"
        })
        this.children.formInput5 = new FormInput({
            heading: "Имя в чате",
            value: "Дима",
            type: "text"
        })
        this.children.formInput6 = new FormInput({
            heading: "Телефон",
            value: "+7 (916) 889 72 93",
            type: "tel"
        })
    }

    render() {
        return this.compile(template, []);
    }
}
