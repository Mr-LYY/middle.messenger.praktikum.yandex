import Block from '../../utils/Block';
import template from './errorPage404.hbs';
import ErrorPartial from "../ErrorPartial";

export class ErrorPage404 extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.error404 = new ErrorPartial({
            code: 404,
            text: 'Упс.. Похоже, что страницы не существует'
        })
    }

    render() {
        return this.compile(template, []);
    }
}
