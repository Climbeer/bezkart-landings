#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

required_dirs=(
  "directives"
  "execution"
  "tests"
  ".tmp"
)

missing=0

echo "[preflight] root: ${ROOT_DIR}"

for d in "${required_dirs[@]}"; do
  if [[ -d "${ROOT_DIR}/${d}" ]]; then
    echo "[ok] dir exists: ${d}"
  else
    echo "[fail] missing dir: ${d}"
    missing=1
  fi
done

if [[ -f "${ROOT_DIR}/execution_registry.yaml" ]]; then
  echo "[ok] file exists: execution_registry.yaml"
else
  echo "[warn] missing file: execution_registry.yaml"
fi

if [[ -f "${ROOT_DIR}/AGENTS.md" ]]; then
  echo "[ok] file exists: AGENTS.md"
else
  echo "[fail] missing file: AGENTS.md"
  missing=1
fi

if [[ ${missing} -ne 0 ]]; then
  echo "[preflight] FAILED"
  exit 1
fi

echo "[preflight] PASSED"
