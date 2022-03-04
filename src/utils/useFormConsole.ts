export const useFormConsole = () => {
    const form = document.getElementsByTagName('form')[0];

    form.onsubmit = e => {
        e.preventDefault();
        const objectToConsole: Record<string, string> = {};

        const inputs: Array<HTMLInputElement> = Array.from(
            document.querySelectorAll('.formInput'),
        );
        inputs.map(input => {
            objectToConsole[input.id] = input.value;
        });

        console.log(objectToConsole);
    };
};
