#!/bin/bash

rm -rf translations
mkdir translations

# Clone in parallel and fail if any clone fails.
pids=()
for lang in "es-es" "ja-jp" "pt-br" "zh-cn" "ru-ru" "fr-fr" "ko-kr" "de-de"
do
  git clone --quiet --depth 1 "https://github.com/github/docs-internal.$lang.git" "translations/$lang" &
  pids+=($!)
done

status=0
for pid in "${pids[@]}"; do
  wait "$pid" || status=1
done

find . -name '.DS_Store' -type f -delete
exit $status
