#!/usr/bin/env python3
"""Publish the Fog of Ages static playtest into the Pages folder."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path


ROOT_DIR = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE_DIR = ROOT_DIR / "2048-fog-of-ages"
DEFAULT_TARGET_DIR = ROOT_DIR / "fog-of-ages"
FILES_TO_COPY = (
    Path("index.html"),
    Path("assets/world.png"),
)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Copy the current Fog of Ages public build into the GitHub Pages folder."
    )
    parser.add_argument(
        "--source-dir",
        type=Path,
        default=DEFAULT_SOURCE_DIR,
        help="Source game directory. Defaults to 2048-fog-of-ages.",
    )
    parser.add_argument(
        "--target-dir",
        type=Path,
        default=DEFAULT_TARGET_DIR,
        help="Target Pages directory. Defaults to fog-of-ages.",
    )
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument(
        "--preview",
        action="store_true",
        help="Show what would be copied without writing files.",
    )
    mode.add_argument(
        "--execute",
        action="store_true",
        help="Copy the public build files into the target directory.",
    )
    return parser.parse_args()


def validate_source(source_dir: Path) -> None:
    if not source_dir.exists():
        raise SystemExit(f"[fail] source dir does not exist: {source_dir}")

    missing = [str(rel_path) for rel_path in FILES_TO_COPY if not (source_dir / rel_path).is_file()]
    if missing:
        raise SystemExit(f"[fail] missing source file(s): {', '.join(missing)}")


def copy_public_build(source_dir: Path, target_dir: Path, preview: bool) -> None:
    validate_source(source_dir)

    print(f"[publish] source: {source_dir}")
    print(f"[publish] target: {target_dir}")
    print(f"[publish] mode: {'preview' if preview else 'execute'}")

    for rel_path in FILES_TO_COPY:
        source_path = source_dir / rel_path
        target_path = target_dir / rel_path
        print(f"[copy] {source_path} -> {target_path}")

        if preview:
            continue

        target_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_path, target_path)

    print("[publish] done")


def main() -> None:
    args = parse_args()
    copy_public_build(
        source_dir=args.source_dir.resolve(),
        target_dir=args.target_dir.resolve(),
        preview=args.preview,
    )


if __name__ == "__main__":
    main()
