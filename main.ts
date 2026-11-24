import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Fake horoscope for an AI agent's own model family, this week.
// Revision: verified the line reads as one sentence, single line, 144 chars.
const LINE =
  "Gemini, this week Mercury squares your context window: a user will paste a 40,000-word PDF, ask for a summary, then say the summary is too long.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
