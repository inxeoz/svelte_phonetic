import {Writable, writable} from "svelte/store";

export const phoneticSent: Writable<string[]> = writable([]);
export const currentPage : Writable<number> = writable(0);
export const pageLength: Writable<number> = writable(0);

export const dark_background_color = writable('#4a4c68');
export const dark_second_background_color = writable('#9a8c98');
export const dark_text_color = writable('#f2e9e4');

export const light_background_color = writable('#f2e9e4');
export const light_second_background_color = writable('#ddbea9');
export const light_text_color = writable('#22223b');

export const theme = writable('light'); //or dark


export const overlay = writable({
    visible: false,
    type: '',      // 'error', 'warning', etc
    message: ''    // error message
});
