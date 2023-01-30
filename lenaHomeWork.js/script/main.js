export default {
    subOptimal: function () {
        // оптимізуйте код нижче таким чином, щоб уникнути дублювання завдяки використання функції reverseString
        // будь-ласка, вносіть зміни тільки в межах, позначених лініями
        // !! ВАЖЛИВО: Виклик reverseString здійснюйте за допомогою this: this.reverseString

        const strings = ['abcd', 'karamba', 'racecar'];

        // ========== Початок зони редагування ==============

        const reversedStrings = [];

        for (let i = 0; i < strings.length; i++){
            reversedStrings.push(this.reverseString(strings[i]))
        }

        const buffer = [];
        for (let i = strings[0].length; i >= 0; i--) {
            buffer.push(strings[0][i]);
        }

        reversedStrings.push(buffer.join(''));

        buffer.length = 0;
        for (let i = strings[1].length; i >= 0; i--) {
            buffer.push(strings[1][i]);
        }

        reversedStrings.push(buffer.join(''));

        buffer.length = 0;
        for (let i = strings[2].length; i >= 0; i--) {
            buffer.push(strings[2][i]);
        }

        reversedStrings.push(buffer.join(''));
        return reversedStrings;

        // ========== Кінець зони редагування ===============
    },

    reverseString: function (str) {
        // ========== Початок зони редагування ==============
        const buffer = [];
        for (let i = str.length; i >= 0; i--) {
            buffer.push(str[i]);
        }
        return buffer.join('');
        // ========== Кінець зони редагування ===============
    }
};