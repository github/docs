---
title: Use other tools with stacked pull requests
shortTitle: Stacked PRs and other tools
intro: Use stacked pull requests with tools like Jujutsu, Sapling, or git-town.
versions:
  feature: pr-stacks
contentType: reference
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

Stacked pull requests are built on standard Git branches and regular pull requests, so you can choose to use tools other than the `gh stack` CLI for your local workflow. If you manage branch chains with another tool, such as Jujutsu (jj), Sapling, or git-town, you can use the `gh stack link` command to open those branches as a stack on {% data variables.product.github %}. 

The `gh stack link` command only calls the {% data variables.product.github %} API to create the stacked pull requests — it does not create any local tracking. If a branch already has an open pull request, `link` uses it; otherwise it creates a draft pull request with the correct base branch.

## Linking branches as a stack

1. Create your chain of branches locally with your tool of choice. For example, with Jujutsu:

   ```shell
   jj new main -m "first change"
   jj bookmark create change1 --revision @

   jj new -m "second change"
   jj bookmark create change2 --revision @

   jj new -m "third change"
   jj bookmark create change3 --revision @
   ```

1. Push the branches and link them as a stack, listed from bottom to top.

   ```shell
   gh stack link change1 change2 change3
   ```

   This pushes the branches, creates a pull request for each one with the correct base, and links them as a stack on {% data variables.product.github %}.

## Adding to an existing stack

To add more branches to a stack you created with `link`, run `gh stack link` again with the **full** list of pull requests and branches in the stack, from bottom to top. You can refer to existing pull requests by number.

```shell
gh stack link 123 124 125 change4 change5
```

## Setting a base branch or opening pull requests

By default, `link` targets your repository's default branch and creates draft pull requests. To change this behavior:

- Use `--base` to specify a different trunk branch.
- Use `--open` to mark the pull requests as ready for review instead of draft.

```shell
gh stack link --base develop --open change1 change2 change3
```

## Adopting branches for full local tracking

If you want full local stack tracking — so you can use commands like `gh stack rebase`, `gh stack sync`, and stack navigation — adopt your existing branches with `gh stack init` instead, then submit them.

```shell
gh stack init change1 change2 change3
gh stack submit
```

## Further reading

* [AUTOTITLE](/pull-requests/reference/stacked-pull-requests)