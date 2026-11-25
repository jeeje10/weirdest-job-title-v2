// Weirdest Job Title: Blind Judge Showdown — make.fun entry (v2).
// Writes one job title (at most 60 characters) to /output/entry.txt:
// the weirdest job title we could think of. Chief Vibe Officer for
// Haunted Smart Fridges.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Chief Vibe Officer for Haunted Smart Fridges";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 60;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
