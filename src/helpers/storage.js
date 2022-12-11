import { writable } from "svelte/store";

// this is where application wide variables go

// quote
export const quote = writable(undefined);
export const quoteObfuscated = writable(undefined);
export const quoteResolved = writable({
  present: [],
  missing: []
});

// guess data
export const guesses = writable({ success: { count: 0, characters: [] }, fail: { count: 0, characters: [] }, attemptsLeft: 0 })
export const wrongGuessTolerance = writable(undefined);