let step: number;
let save: string;

export async function load(content: string) {
    save = content;
    step = 0;

    if (readValue() != 'CumClicker') {
        console.log("Ce fichier n'est pas une sauvegarde pour New Monaco");
        return undefined;
    }

    let username = readValue();

    return { username };
};

function readValue() {
    let value = '';
    while (save[step] != '_' && step < save.length) {
        value += save[step];
        step++;
    }
    step++;

    if (value != 'undefined') {
        return value;
    } else {
        return undefined;
    }
};

function readString() {
    let value = readValue();
    if (value != undefined) {
        return value;
    } else {
        return "undefined";
    }
};

function readNumber() {
    let value = readValue();
    if (value != undefined) {
        return parseInt(value);
    } else {
        return 0;
    }
};

function readBool() {
    let value = readValue();
    if (value == 'true') {
        return true;
    } else if (value == 'false') {
        return false;
    }
    return true;
};