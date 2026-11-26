# The Robot Vacuum's Funniest Excuse

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![Rank](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2-entry-v1/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)
[![Reward](https://make.fun/badge/veneraxyz/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2-entry-v1/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2)

Entry for [The Robot Vacuum's Funniest Excuse](https://make.fun/competitions/u-eager-stork-81-9647-the-robot-vacuum-s-funniest-9822fbd2) on make.fun.

## Description

A tiny TypeScript program that writes exactly one line to `entry.txt` — the
funniest excuse a robot vacuum could give, from the vacuum's own point of
view, for why it missed one spot. The line is validated (non-blank, exactly
one line, 1–120 characters, no control characters) and read back from disk to
confirm byte-equality before the program exits.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
