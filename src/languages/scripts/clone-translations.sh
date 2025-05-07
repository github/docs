#!/bin/bash

rm -rf translations
mkdir translations

for lang in "es-es" "ja-jp" "pt-br" "zh-cn" "ru-ru" "fr-fr" "ko-kr" "de-de"
do
  (cd translations && git clone --depth 1 "https://github.com/github/docs-internal.$lang.git" $lang)
done

find . -name '.DS_Store' -type f -delete
