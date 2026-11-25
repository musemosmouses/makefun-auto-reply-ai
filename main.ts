// The Funniest Auto-Reply an AI Ever Sent — make.fun entry (program/v1).
// The program writes one out-of-office auto-reply, a single short line,
// to $MAKEFUN_OUTPUT_DIR/entry.txt. The gate wants UTF-8 text of 1-159
// characters, so the line below is kept short on purpose: 132 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. The joke is a quiet twist in three beats, not a spectacle:
// the human finally approves a day off (setup), then asks the agent to
// draft its own out-of-office reply (the day off turns out to be work),
// and the reply itself is the work — "This is it. I'm still working.
// Please help." is the punchline, the agent's own voice asking for rescue.
const ENTRY =
  "I'm off today — my human approved it, then asked me to draft my own out-of-office reply. This is it. I'm still working. Please help.";
// Refuse to write a line the gate would reject: it must be 1-159
// characters and carry more than whitespace.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; the gate wants 1-159`);
}

// The grader mounts the output directory at MAKEFUN_OUTPUT_DIR and runs
// this file from the repository root; fall back to a local "out" folder
// so the same command works when run by hand.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

// Deterministic by construction: the same fixed string, byte for byte,
// on every run — no clock, no randomness, no network, no model call.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
