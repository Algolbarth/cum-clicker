export function printNumber(value: number) {
    let value_string: string = value.toString();
    let print: string = "";
    let x = 0;
    for (let i = value_string.length - 1; i >= 0; i--) {
        if (x % 3 == 0) {
            print = " " + print;
        }
        print = value_string[i] + print;

        x++;
    }
    return print;
};