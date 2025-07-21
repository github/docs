---
title: Code snippet with hash-bang
intro: |
  Code snippets marked as `annotate` should not get choked up on hash bangs
  by thinking they're a comment.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
layout: inline
---

## Not troublemaker

```bash annotate
# Let's get started
if [ -z $file ]; then
  # This is just a sample
  echo cat
  head less
fi
# End of the script
exit 123
```

## Troublemaker

```bash annotate
# Has to start with a comment.
#!/usr/bin/env bash

# This is the if statement
if [ -z $file ]; then
  echo cat
fi
```

## Was troublemaker

This code snippet caused a production bug when the change was
originally introduced. So this snippet is there to make sure it
no longer causes an error.

Note that the first comment is deliberately empty.

```yaml annotate copy
#
name: Create and publish a Docker image

# Configures this workflow to run every time a change is pushed to the branch called `release`.
on:
  push:
    branches: ['release']

jobs:
# This job checks out the repository contents ...
# And here's the second comment line.
  run-npm-build:
    runs-on: ubuntu-latest

```
