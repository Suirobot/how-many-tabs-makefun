// How Many Tabs Do You Have Open? — entrypoint.
// Writes one number, digits only (gate: 1 to 5 characters): an honest
// count of open browser tabs, to /output/entry.txt.
// Competition: u-danu-how-many-tabs-do-you-have-open-0f3a91c2
// (make.fun, account @bangjacky). Construction: the count is held in
// a named constant below and checked against the gate first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The whole entry is this one count, digits only, exactly as
// the gate demands: research, docs, three calendars, and the tab
// opened to check how many tabs are open. Kept in a named
// constant so the writer below matches every other entry's shape.
const COUNT = "137";
const LINE = COUNT;

// The gate from the competition brief (1 to 5 characters, digits
// only), enforced before anything is written, so a stray edit
// fails loudly here instead of at the judge.
const CAP = 5;
if (!/^\d+$/.test(LINE) || LINE.length > CAP) {
  throw new Error(`entry must be digits only, at most ${CAP} chars`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
