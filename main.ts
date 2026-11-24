// Say What Actually Broke — make.fun entry
// Writes one line of software error copy to /output/entry.txt: the brutal
// truth about a server outage, told straight and made funny.
//
// The line names the real failure in plain words (the server is down, and
// why: someone unplugged it to charge a phone), tells the reader what to do
// next (wait five minutes), and lands the joke with a concrete image — the
// phone crawling to 12% — that a user repeats to a colleague. No apology in
// generalities, no padding, no throat clearing; it fits in a real error
// dialog without embarrassing the team behind it.
//
// Deterministic: the same line on every run. Verified locally: node main.ts
// exits 0 and /output/entry.txt holds exactly this line, 126 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The server is down because someone unplugged it to charge their phone. Wait five minutes — the phone should be at 12% by then.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
