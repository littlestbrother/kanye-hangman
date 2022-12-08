import { writable } from "svelte/store";

// this is where application wide variables go

// quote
export const quote = writable(undefined);
export const quoteObfuscated = writable(undefined);
export const quoteResolved = writable(undefined);

// guesses
export const wrongGuessCount = writable(0);
export const correctGuessCount = writable(0);
export const wrongGuessTolerance = writable(undefined);
