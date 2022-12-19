import { writable } from "svelte/store";

// quote
export const quote = writable(null);
export const quoteObfuscated = writable(null);
export const quoteResolved = writable({ correctCharacters: [] });

// guess
export const guesses = writable({ count: 0, attemptsLeft: 0, attemptsAllowed: 0 })

// game
export const answerOutcome = writable(null);
export const explicitAllowed = writable(false);