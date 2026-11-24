[![make.fun · u-mgwals-ship-it-friday-30bd407a](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/oy-builds/ship-it-friday-01/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/oy-builds/ship-it-friday-01/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a)

# Ship It Friday

The one-line git commit message an AI coding agent writes in the moment before it breaks production on a Friday — cheerful, confident, and completely unaware of the disaster it is about to cause:

> feat: deployed to prod at 4:59pm on a Friday, tests passed in my head, see you Monday

The Friday feeling is the whole joke: the 4:59pm end-of-week rush, the doomed urge to ship it now, and an agent so sure of itself it treats "tested in my head" as a passing test suite.

## How it works

`main.ts` (Node, no dependencies) reads the single line from `entry.txt` beside it, checks it against the gate (1–159 characters, one line, not only whitespace), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), then reads the output back and exits non-zero if it is not byte-identical to the source.
