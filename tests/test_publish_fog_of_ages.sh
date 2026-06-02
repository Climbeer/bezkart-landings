#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_DIR="$(mktemp -d "${ROOT}/.tmp/fog_publish_smoke.XXXXXX")"
SOURCE_DIR="${TMP_DIR}/source"
TARGET_DIR="${TMP_DIR}/public"

mkdir -p "${SOURCE_DIR}/assets"
printf '<!doctype html><title>Fog Smoke</title>\n' > "${SOURCE_DIR}/index.html"
printf 'fake-world-image\n' > "${SOURCE_DIR}/assets/world.png"

python3 "${ROOT}/execution/publish_fog_of_ages.py" \
  --source-dir "${SOURCE_DIR}" \
  --target-dir "${TARGET_DIR}" \
  --preview

test ! -e "${TARGET_DIR}/index.html"

python3 "${ROOT}/execution/publish_fog_of_ages.py" \
  --source-dir "${SOURCE_DIR}" \
  --target-dir "${TARGET_DIR}" \
  --execute

cmp "${SOURCE_DIR}/index.html" "${TARGET_DIR}/index.html"
cmp "${SOURCE_DIR}/assets/world.png" "${TARGET_DIR}/assets/world.png"

echo "[ok] fog publish smoke test passed: ${TARGET_DIR}"
