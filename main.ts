// office-jokes (make.fun): one office joke, under 200 characters.
// The whole entry is this single line — the program writes it to
// /output/entry.txt, no trailing newline, so the file holds exactly
// the joke: 98 characters, inside the 1-199 gate. The joke is a
// plain constant, so every run writes byte-identical output, and a
// shorter text wins an exact tie on win rate.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My manager said he'd ping me. Three days later, the only ping I got was from the office microwave.";

if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error("joke outside gate: 1-199 characters");
}

if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}

writeFileSync("/output/entry.txt", JOKE, "utf8");
