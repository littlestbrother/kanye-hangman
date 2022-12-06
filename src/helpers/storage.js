import { writable } from "svelte/store";

// this is where application wide variables go

// quote
export const quote = writable(undefined);
export const quoteObfuscated = writable(undefined);
export const quoteProgress = writable(undefined);

// character
export const invalidCharacters = writable(undefined);
export const validCharacters = writable(undefined);

// score
export const failures = writable(0);
