const getValues = () => {
    const sequenceAmount = document.getElementById("sequences-amount").value || 0;
    const sequencesMinLength = document.getElementById("sequences-min-length").value || 0;
    const sequencesMaxLength = document.getElementById("sequences-max-length").value || 0;
    const alphabetValue = document.getElementById("alphabet").value || "";
    const alphabet = alphabetValue.split(",");

    return {
        amount: sequenceAmount,
        min: sequencesMinLength,
        max: sequencesMaxLength,
        alphabet
    };
}

const generateSequences = ({amount, min, max, alphabet}) => {
    const sequences = [];

    for (let index = 0; index < amount; index++) {
        const size = Math.floor(Math.random() * (max - min + 1) + min);
        let sequence = "";
        for (let i = 0; i < size; i++) {
            let pos = Math.floor(Math.random() * (alphabet.length + 1));
            if(pos < 0 || pos > alphabet.length-1) {
                pos = 0;
            }
            sequence += alphabet[pos];
        }
        sequences.push(sequence);
    }
    return sequences;
}

const displaySequences = () => {
    const sequences = generateSequences(getValues());
    const display = document.getElementById("display");
    display.innerHTML = "";
    sequences.map(sequence => {
        display.innerHTML += `<input class="sequence" value="${sequence}">`;
    });
}
