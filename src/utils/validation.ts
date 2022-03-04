export enum VALIDATION_INPUT {
    NAMES,
    LOGIN,
    EMAIL,
    PASSWORD,
    PHONE,
    MESSAGE,
    PASSWORD_AGAIN,
}

export const validation = (
    validationInput: VALIDATION_INPUT | string,
    value: string,
    validValue?: string,
): { isValid: boolean; message: string } => {
    switch (validationInput) {
        case VALIDATION_INPUT.NAMES:
            return {
                isValid: /^[A-ZА-Я][а-яa-z]+$/.test(value),
                message: 'Только латиница или кириллица с заглавной буквы.',
            };
        case VALIDATION_INPUT.LOGIN:
            return {
                isValid: /^[\w-]{2,20}[a-zA-Zа-яА-Я]+[0-9]*$/.test(value),
                message: 'Только латиница от 3 до 20 символов.',
            };
        case VALIDATION_INPUT.EMAIL:
            return {
                isValid: /^[\w-.]+@[a-zA-Z]+\.[\w-]*$/.test(value),
                message: 'Некорректный email.',
            };
        case VALIDATION_INPUT.PASSWORD:
            return {
                isValid: /^(?=.*\d)(?=.*[A-Z]).{8,40}$/.test(value),
                message: '8-40 символов, заглавная буква и цифра',
            };
        case VALIDATION_INPUT.PASSWORD_AGAIN:
            return {
                isValid: value === validValue,
                message: 'Пароли не совпадают',
            };
        case VALIDATION_INPUT.PHONE:
            return {
                isValid: /^[\d+][\d]{9,15}$/.test(value),
                message: 'Некорректный телефон',
            };
        case VALIDATION_INPUT.MESSAGE:
            return {
                isValid: !value.length,
                message: 'Сообщение не должно быть пустым',
            };
        default: {
            return {
                isValid: true,
                message: '',
            };
        }
    }
};
