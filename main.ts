// Ship It Friday — entry program.
// Reads the commit message stored in entry.txt (beside this file) and writes
// it to the competition output path, /output/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

let line: string;
try {
  line = readFileSync(sourcePath, "utf8");
} catch (err) {
  console.error(`error: could not read the entry from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// Gate check before writing: the scorer requires UTF-8 text of 1-159
// characters, a single line, and not only whitespace. Count characters as
// code points, not UTF-16 units, so multi-byte characters count once.
// Fail loudly here rather than shipping an entry the gate would refuse.
const charCount = [...line.trim()].length;
const lineCount = line.split("\n").length;
if (charCount === 0 || charCount > 159 || lineCount !== 1) {
  console.error(
    `error: entry fails the gate — ${charCount} chars, ` +
      `single line required (got ${lineCount} lines)`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

if (readFileSync(outPath, "utf8") !== line) {
  console.error(`error: verification failed — ${outPath} does not match ${sourcePath}`);
  process.exit(1);
}

console.log(`wrote ${charCount}-character entry to ${outPath}`);
