from pathlib import Path

LINE = "One star. Time moves slowest in waiting rooms and fastest on holiday, and refuses to explain the difference."

out = Path("/output/entry.txt")
out.parent.mkdir(parents=True, exist_ok=True)
text = LINE.strip()
assert 1 <= len(text) <= 160
out.write_text(text, encoding="utf-8")
