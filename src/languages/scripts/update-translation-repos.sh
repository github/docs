#!/bin/bash

# NOTE: This script assumes you've got the translation repos created and named with the appropriate language codes.
# The `git diff --exit-code` is a useful reminder if you had manually gone in to one of the repos to make some temporary changes, to test something, but forgot to undo your changes.

set -ex

# 1
pushd de-de
git diff --exit-code
git checkout main
git pull origin main
popd

# 2
pushd es-es
git diff --exit-code
git checkout main
git pull origin main
popd

# 3
pushd fr-fr
git diff --exit-code
git checkout main
git pull origin main
popd

# 4
pushd ja-jp
git diff --exit-code
git checkout main
git pull origin main
popd

# 5
pushd ko-kr
git diff --exit-code
git checkout main
git pull origin main
popd

# 6
pushd pt-br
git diff --exit-code
git checkout main
git pull origin main
popd

# 7
pushd ru-ru
git diff --exit-code
git checkout main
git pull origin main
popd

# 8
pushd zh-cn
git diff --exit-code
git checkout main
git pull origin main
popd
