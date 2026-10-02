#!/bin/bash

# Assumes translation repos already exist under language-code directory names.
# git diff --exit-code catches unstaged tracked edits before pulling.

set -ex

pushd es-es
git diff --exit-code
git checkout main
git pull origin main
popd

pushd ja-jp
git diff --exit-code
git checkout main
git pull origin main
popd

pushd pt-br
git diff --exit-code
git checkout main
git pull origin main
popd

pushd zh-cn
git diff --exit-code
git checkout main
git pull origin main
popd

pushd ru-ru
git diff --exit-code
git checkout main
git pull origin main
popd

pushd fr-fr
git diff --exit-code
git checkout main
git pull origin main
popd

pushd ko-kr
git diff --exit-code
git checkout main
git pull origin main
popd

pushd de-de
git diff --exit-code
git checkout main
git pull origin main
popd
