import stripComments from "strip-comments";
import { readFileSync, writeFileSync } from "fs";

const content = readFileSync(new URL("Wisdom.d.ts", import.meta.url), "utf8");
const strippedContent = stripComments(content);
writeFileSync(new URL("Wisdom.output.d.ts", import.meta.url), strippedContent);
