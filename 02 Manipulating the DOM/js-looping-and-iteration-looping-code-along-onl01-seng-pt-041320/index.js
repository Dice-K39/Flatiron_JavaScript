// Code your solutions in this file
const messages = [];

function writeCards(names, event) {
    for (let counter = 0; counter <= names.length - 1; counter++) {
        messages.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`);
    }

    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}