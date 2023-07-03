---
title: Linking a pull request to an issue
intro: 'You can link a pull request {% ifversion link-existing-branches-to-issue %}or branch {% endif %}to an issue to show that a fix is in progress and to automatically close the issue when the pull request {% ifversion link-existing-branches-to-issue %}or branch {% endif %} is merged.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/linking-a-pull-request-to-an-issue
  - /articles/closing-issues-via-commit-message
  - /articles/closing-issues-via-commit-messages
  - /articles/closing-issues-using-keywords
  - /github/managing-your-work-on-github/closing-issues-using-keywords
  - /github/managing-your-work-on-github/linking-a-pull-request-to-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Link PR to issue
---
{% note %}

**Note:** The special keywords in a pull request description are interpreted when the pull request targets the repository's _default_ branch. However, if the PR's base is _any other branch_, then these keywords are ignored, no links are created and merging the PR has no effect on the issues. **If you want to link a pull request to an issue using a keyword, the PR must be on the default branch.**

{% endnote %}

## About linked issues and pull requests

You can link an issue to a pull request manually or using a supported keyword in the pull request description.

When you link a pull request to the issue the pull request addresses, collaborators can see that someone is working on the issue.

When you merge a linked pull request into the default branch of a repository, its linked issue is automatically closed. For more information about the default branch, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-branches-in-your-repository/changing-the-default-branch)."

## Linking a pull request to an issue using a keyword

You can link a pull request to an issue by using a supported keyword in the pull request's description or in a commit message. The pull request **must be** on the default branch.

- `close`
- `closes`
- `closed`
- `fix`
- `fixes`
- `fixed`
- `resolve`
- `resolves`
- `resolved`

If you use a keyword to reference a pull request comment in another pull request, the pull requests will be linked. Merging the referencing pull request also closes the referenced pull request.

The syntax for closing keywords depends on whether the issue is in the same repository as the pull request.

Linked issue | Syntax | Example
--------------- | ------ | ------
Issue in the same repository | KEYWORD #ISSUE-NUMBER | `Closes #10`
Issue in a different repository | KEYWORD OWNER/REPOSITORY#ISSUE-NUMBER | `Fixes octo-org/octo-repo#100`
Multiple issues | Use full syntax for each issue | `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`

Only manually linked pull requests can be manually unlinked. To unlink an issue that you linked using a keyword, you must edit the pull request description to remove the keyword.

You can also use closing keywords in a commit message. The issue will be closed when you merge the commit into the default branch, but the pull request that contains the commit will not be listed as a linked pull request.

## Manually linking a pull request to an issue using the pull request sidebar

Anyone with write permissions to a repository can manually link a pull request to an issue from the pull request sidebar.

You can manually link up to ten issues to each pull request. The issue and pull request must be in the same repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. In the list of pull requests, click the pull request that you'd like to link to an issue.
{% data reusables.pull_requests.click-development %}
1. Click the issue you want to link to the pull request.

{% ifversion link-existing-branches-to-issue %}

## Manually linking a pull request or branch to an issue using the issue sidebar

Anyone with write permissions to a repository can manually link a pull request or branch to an issue from the issue sidebar.

You can manually link up to ten issues to each pull request. The issue can be in a different repository than the linked pull request or branch. Your last selected repository will be remembered.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. In the list of issues, click the issue that you'd like to link a pull request or branch to.
{% data reusables.pull_requests.click-development %}
1. Click the repository containing the pull request or branch you want to link to the issue.
1. Click the pull request or branch you want to link to the issue.
1. Click **Apply**.

{% endif %}

## Further reading

- "[AUTOTITLE](/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls#issues-and-pull-requests)"
