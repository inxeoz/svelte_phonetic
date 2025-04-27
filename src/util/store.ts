import {Writable, writable} from "svelte/store";

export const phoneticSent: Writable<string[]> = writable([]);
export const currentPage : Writable<number> = writable(0);
export const pageLength: Writable<number> = writable(0);

export const overlay = writable({
    visible: false,
    type: '',      // 'error', 'warning', etc
    message: ''    // error message
});
