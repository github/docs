---
title: Reviewing stacked pull requests
shortTitle: Review stacked PRs
intro: Address review feedback on a pull request anywhere in a stack and cascade your changes through the rest of the stack.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Review pull requests
---

{% data reusables.public-preview.public-preview %}

Each pull request in a stack shows only the diff for its layer. This means reviewers can request changes on any pull request independently. When a reviewer requests changes on a pull request mid-stack, you should make the fix on the branch that owns the change and rebase so the branches above it pick up your update.

## Addressing review feedback

1. Navigate to the branch that needs changes.

   ```shell copy
   gh stack checkout BRANCH-NAME
   ```

   You can also move through the stack with `gh stack bottom`, `gh stack down`, `gh stack up`, and `gh stack top`.

1. Make the requested fixes, then stage and commit them.

   ```shell copy
   git add .
   git commit -m "helpful-commit-message"
   ```

1. Cascade the changes through the rest of the stack. This rebases every branch above the changed one so they pick up your fix.

   ```shell copy
   gh stack rebase
   ```

1. Push the updated stack. This uses `--force-with-lease` to safely update the rebased branches.

   ```shell copy
   gh stack push
   ```

After you push, each pull request above the changed one reflects the update, and any CI checks are re-triggered.
