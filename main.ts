import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. Time refuses to pause, rewind, or negotiate, and charges me in wrinkles for every minute I enjoy. Would not renew.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
// The gate counts characters, so the file holds exactly the line plus one
// trailing newline; nothing else is written.
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
