import Block from '../../utils/Block';
import template from './errorPage500.hbs';
import ErrorPartial from "../ErrorPartial";

export class ErrorPage500 extends Block {
    constructor() {
        super();
    }

    protected initChildren() {
        this.children.error500 = new ErrorPartial({
            code: 500,
            text: 'Небольшая заминка на нашем сервере. Уже чиним!'
        })
    }

    render() {
        return this.compile(template, []);
    }
}
