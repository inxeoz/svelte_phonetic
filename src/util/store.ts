import {Writable, writable} from "svelte/store";
export enum UiTheme {
    DarkTheme = 'dark',
    LightTheme = 'light',
}

export const phoneticSent= writable<string[]>([]);


export const list_of_sentences = writable<string[][]>([])
export const total_index_of_sentences = writable(0);
export const currentSentIndex = writable(0);
export const endWordIndex = writable(0);

export const local_list_of_sentences = writable<string[][]>([]);
export const max_visible_sentence = writable(5);

export const dark_background_color = writable('#4a4c68');
export const dark_second_background_color = writable('#9a8c98');
export const dark_text_color = writable('#f2e9e4');

export const light_background_color = writable('#f2e9e4');
export const light_second_background_color = writable('#ddbea9');
export const light_text_color = writable('#22223b');

export const themeNow = writable<UiTheme>(UiTheme.LightTheme); //or dark

export const overlay = writable({
    visible: false,
    type: '',      // 'error', 'warning', etc
    message: ''    // error message
});




//
// // Utility function (fixed version)
// export function syncStores<T>(source: Writable<T>, target: Writable<T>) {
//   source.subscribe(val => target.set(val));
// }
//
//
// // Utility function (fixed version)
// export function setValue<T>(target: Writable<T>, value: T) {
//     target.set(value);
// }


export function compareWritable<T>(
    left: Writable<T>,
    right: Writable<T>,
    compareFn: (a: T, b: T) => boolean = (a, b) => a === b
): boolean {
    let leftValue: T;
    let rightValue: T;

    const unsubLeft = left.subscribe(val => leftValue = val);
    const unsubRight = right.subscribe(val => rightValue = val);

    // Immediately unsubscribe to avoid memory leaks
    unsubLeft();
    unsubRight();

    return compareFn(leftValue!, rightValue!);
}
