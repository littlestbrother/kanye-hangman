import { writable } from "svelte/store";

// this is where application wide variables go

// quote
export const quote = writable(undefined);
export const quoteObfuscated = writable(undefined);
export const quoteResolved = writable({
  present: []
});

// guess data
export const guesses = writable({ count: 0, attemptsLeft: 0, wrongGuessTolerance: 0 })
export const gameOutcome = writable(null);