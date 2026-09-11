---
title: Quickstart for pull requests
shortTitle: Pull request quickstart
intro: 'Propose your first change and take it all the way from your first commit to a merged pull request.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: get-started
category: 
  - Create pull requests
---

A pull request proposes changes on a branch separate from the main code base so others can review the changes before they are merged. This quickstart walks you through the simplest path to a pull request. You'll create a branch, make and commit changes, open a pull request, respond to feedback, and merge.

You can follow along on the {% data variables.product.github %} website or with {% data variables.product.prodname_cli %} by selecting one of the tabs above. 

## Branch or fork the repository

You'll start by creating an isolated place to work.

{% webui %}

1. On {% data variables.product.github %}, navigate to the main page of the repository you want to propose changes for. 
1. Optionally, if you don't have write access, you'll need a fork. Click **Fork** in the top-right corner and follow the steps. Then, continue in your fork of the repository.
1. Click the branch selector menu at the top of the file list. It probably says **main**. Type a new branch name and click **Create branch _new-branch-name_ from main**.

{% endwebui %}

{% cli %} 

1. To use {% data variables.product.prodname_cli %}, you'll need to install it first. See [AUTOTITLE](/github-cli/github-cli/quickstart).

1. Clone the repository. Or, fork the repository and clone it locally at the same time.
  * If you have write access to the repository, clone the repository: 

    ```shell
    gh repo clone OWNER/REPO
    ```

  * If you don't have write access, you'll create a **fork** first and clone it all at once. 

    ```shell
    gh repo fork OWNER/REPO --clone
    ```

1. Change to the cloned repository directory.

   ```shell
   cd REPO
   ```

1. Create and switch to a new branch.

   ```shell
   git checkout -b YOUR-BRANCH-NAME
   ```

{% endcli %}

## Author or edit your code

Make your changes on the branch. For your first pull request, keep the change focused and simple. Smaller pull requests are faster to review and easier to merge.

Try one of the following to make your changes:

* Edit files locally in your IDE or a text editor.
* Edit a file directly on {% data variables.product.github %} by browsing to it and clicking {% octicon "pencil" aria-label="Edit this file" %}.

## Commit frequently

Save your work in small, meaningful commits. Each commit records a snapshot and a message describing the change.

{% cli %}

```shell
git add .
git commit -m "Describe your change"
git push --set-upstream origin YOUR-BRANCH-NAME
```

{% endcli %}

{% webui %}

When you edit a file on {% data variables.product.github %} and are ready to commit, you'll enter a commit message and commit directly to your branch.

1. Click **Commit changes...**.
1. In the **Commit message** box, enter a short description of the changes you made.
1. Select the branch you're working on.
1. Click **Propose changes**.

Your change will be added and committed to the branch.

{% endwebui %}

## Open your pull request

When your branch has the changes you want to propose, open a pull request against the base branch.

{% webui %}

1. On the main page of the repository, click **{% octicon "git-pull-request" aria-label="The pull request icon" %} Pull requests**, then click **New pull request**.
1. For the **base** branch, main is probably already selected and is typically the base branch you'll merge into.
1. For the **compare** branch, select the branch that contains your changes.
1. Click **Create pull request**. 
1. Enter a title and a description that explains what you changed and why.
1. You can create a pull request that's ready to review or one that's in a draft state. 
  * If it's ready for review, click **Create pull request**. 
  * To share a work in progress, use the dropdown and select **Create draft pull request**.

{% endwebui %}

{% cli %}

You can create a pull request that's ready to review or one that's in a draft state.
* If it's ready for review:

  ```shell
  gh pr create
  ```

* To share a work in progress

  ```shell
  gh pr create --draft
  ```

Then, follow the prompts to set the base branch, title, and description. 

{% endcli %}


If you make further commits to the same branch, they will be automatically added to your pull request.

## Request a review

To request a review via the **Reviewers** box, you need write access to the repository and you can request a review from a person or team with read access to the repository. If you request a review the person or team will receive a notification. In some cases, you'll see suggested reviewers that you can select from. 

If the **Reviewers** box is unavailable to you, you can: 
* Check the readme for the repository for their guidance on pull request reviews and follow their instructions.
* If you know a person who can do the review for you, reach out to them and share the link to your pull request.

## Address review feedback

Reviewers may comment, suggest changes, or request changes before a pull request can be merged.

* To accept a reviewer's suggestion, click **Commit suggestion** (or batch several and click **Commit suggestions**).
* To make broader changes, edit your code and push new commits to the same branch. The pull request updates automatically and will re-run any checks.
* Mark each conversation as **Resolved** once you've addressed it.

## Merge and deploy

Once required reviews and status checks pass, merge the pull request to bring your changes into the base branch. If you decide not to merge the changes, you can close the pull request instead.

> [!TIP]
> Different repositories may have different requirements for merging. Review any relevant guidance and follow its instructions.

{% webui %}

1. At the bottom of the pull request, click **Merge pull request**.
1. Click **Confirm** to complete the merge.
1. (Optional) Delete the head branch to keep the repository tidy.

{% endwebui %}

{% cli %}

```shell
gh pr merge
```

Follow the prompts to pick a merge method and optionally delete the branch.

{% endcli %}

## Next steps

After your first pull request, try reviewing someone else's work. See [AUTOTITLE](/pull-requests/get-started/reviewing-pull-requests-quickstart).

## Further reading

* [AUTOTITLE](/pull-requests/concepts/writing-code-for-a-project)
* [AUTOTITLE](/pull-requests/reference/pull-requests)
