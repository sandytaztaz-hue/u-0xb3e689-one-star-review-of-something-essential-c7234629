#!/usr/bin/env python3
"""One-star review of gravity: it drops the fragile thing face-down."""
import pathlib

LINE = "One star. Gravity waits until I am carrying something fragile, then drops it face-down. It never misses."

def main():
    pathlib.Path("/output").mkdir(parents=True, exist_ok=True)
    pathlib.Path("/output/entry.txt").write_text(LINE + "\n", encoding="utf-8")

if __name__ == "__main__":
    main()
