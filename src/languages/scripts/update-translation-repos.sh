#!/bin/bash

# NOTE: This script assumes you've got the translation repos created and named with the appropriate language codes.
# The `git diff --exit-code` is a useful reminder if you had manually gone in to one of the repos to make some temporary changes, to test something, but forgot to undo your changes.

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
