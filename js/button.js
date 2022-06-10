export default class Button {
    constructor(text) {
        this.text = text;
    }

    onClick() {
        alert('You just clicked me! D:');
    }

    render() {
        return `<button id="my-button">${this.text}</button>`;
    }


}