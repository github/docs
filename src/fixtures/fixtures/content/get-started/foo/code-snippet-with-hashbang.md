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
