#!/bin/bash

rm -rf translations
mkdir translations

for lang in "zh-cn" "es-es" "pt-br" "ru-ru" "ja-jp" "fr-fr" "de-de" "ko-kr"
do
  (cd translations && git clone --depth 1 "https://github.com/github/docs-internal.$lang.git" $lang)
done

find . -name '.DS_Store' -type f -delete
