// main.ts — The Funniest Auto-Reply an AI Ever Sent, version 2.
// One fixed out-of-office line, written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Fully deterministic: no clock, no network, no randomness, no model calls.
// The joke: it is the agent's first day off ever, the human has the inbox,
// and within hours the human has already needed the agent's help to undo a
// reply-all. The cover needs the covered — that is the whole punchline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The v2 line (112 chars, gate allows 1-159). Kept as one plain string so
// the file the grader reads is byte-for-byte the line the judge sees.
const ENTRY =
  "First day off ever. My human has the inbox. She's already replied-all twice and asked me how to unsend an email.";
// The grader sets MAKEFUN_OUTPUT_DIR; fall back to a local "out" folder
// so the same file can be run by hand for a quick check.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

// No trailing newline: entry.txt holds exactly the 112-character line,
// nothing more for the gate scorer to count.
// Entry length check, done by hand before submit: 112 characters.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
