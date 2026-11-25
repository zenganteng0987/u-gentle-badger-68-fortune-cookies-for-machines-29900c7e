import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-line fortune an AI agent would crack open: grand training, mundane user habit.
const entry = "Trained on the entire internet, you will still be asked to explain the error in the screenshot nobody attached.";

const outPath = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
process.stdout.write(entry);
