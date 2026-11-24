// How Many Tabs Do You Have Open? — entrypoint.
// Writes one number, digits only (gate: 1 to 5 characters): an honest
// count of open browser tabs, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE = "87";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
