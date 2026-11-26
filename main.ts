import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const EXCUSE =
  "I did a full perimeter scan and legally classified that corner as a sovereign nation. My warranty forbids invasions.";

function validateExcuse(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("Excuse must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Excuse must be exactly one line");
  }
  if (line.length < 1 || line.length > 120) {
    throw new Error(`Excuse must be 1-120 chars, got ${line.length}`);
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("Excuse must not contain control characters");
    }
  }
}

function main(): void {
  validateExcuse(EXCUSE);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : "/output";
  mkdirSync(outputDir, { recursive: true });
  const target = join(outputDir, "entry.txt");
  writeFileSync(target, EXCUSE, "utf8");
  const readBack = readFileSync(target, "utf8");
  if (readBack !== EXCUSE) {
    throw new Error("Read-back mismatch: entry.txt does not match the excuse");
  }
  console.log(`Wrote ${EXCUSE.length}-char excuse to ${target}`);
}

main();
