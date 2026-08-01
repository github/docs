---
title: Creating stacked pull requests
shortTitle: Create stacked PRs
intro: Create a stack of dependent pull requests using the `gh stack` extension in {% data variables.product.prodname_cli %} or directly on {% data variables.product.github %}.
versions:
  feature: pr-stacks
contentType: how-tos
category:
  - Create pull requests
---

{% data reusables.public-preview.public-preview %}

Create stacked pull requests with the `gh stack` extension in {% data variables.product.prodname_cli %} or on the {% data variables.product.github %} website.  

> [!NOTE]
> {% data reusables.pull_requests.pr-stack-cross-fork-unsupported %}

## Creating a stack with {% data variables.product.prodname_cli %}

1. Initialize a stack. This creates and checks out the first branch on top of your trunk branch.

   ```shell copy
   gh stack init auth-layer
   ```

1. Write code for the first layer, then stage and commit your changes.

   ```shell copy
   git add .
   git commit -m "helpful-commit-message"
   ```

1. Add a branch for the next logical unit of work. The new branch is created on top of the current one.

   ```shell copy
   gh stack add BRANCH-NAME
   ```

1. Write code and commit on the new branch. Repeat for each additional layer.

1. Push all branches to the remote repository and create the stacked pull requests on {% data variables.product.github %}.

   ```shell copy
   gh stack submit
   ```

   Each pull request is created with the correct base branch, so reviewers see only the diff for that layer, and the pull requests are automatically linked together as a stack.

## Creating a stack from the {% data variables.product.github %} website

You can create a stack without the CLI by setting the base branch of each pull request to the branch below it.

1. Create the first pull request as you normally would. Typically your base would target `main`.

1. Create the next pull request and set its base branch to the first pull request's branch. Select the **Create stack** option to link the two pull requests together as a stack.

   Once created, the stack shows the pull requests linked together.
   * A stack icon {% octicon "stack" aria-label="The stack icon" %} at the top of the pull request shows a number indicating which layer you're viewing. 
   * A stack map appears in the merge box. It shows every pull request in the stack and its status, and lets you navigate to any layer with one click. 

1. Repeat for each additional pull request, targeting the branch of the pull request before it.

## Turning existing pull requests into a stack

If you already have open pull requests whose branches line up, where each pull request's base branch is the head branch of the pull request below it, {% data variables.product.github %} recognizes the chain and shows a **recommendation banner** offering to turn them into a stack.

1. On any of the eligible pull requests, select the banner to open a dialog that previews the stack, listing each pull request in order from top to bottom.

1. Review the preview and confirm to link the pull requests together into a stack.

Once you confirm, the stack map appears in each pull request's header.

## Add to an existing stack from the {% data variables.product.github %} website

To add a new pull request to a stack that already exists:

1. Open any pull request in the stack, click **{% octicon "stack" aria-label="The stack icon" %}** in the header, and then click **{% octicon "plus" aria-label="Add button" %} Add to stack**.

1. The base branch is automatically set to the head of the top pull request. Select the head branch for your new pull request and select **Create pull request**.

1. Select **{% octicon "plus" aria-label="Add button" %} Add to stack**, to create the pull request.

The new pull request is added to the top of the stack.

## Further reading

* [AUTOTITLE](/pull-requests/reference/stacked-prs-cli-commands)
