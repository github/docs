---
title: About pull requests
intro: 'Pull requests let you propose, review, and merge code changes.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
  - /articles/using-pull-requests
  - /articles/about-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
category:
  - Create pull requests
---

Pull requests are proposals to merge code changes into a project. A pull request is {% data variables.product.github %}'s foundational **collaboration feature**, letting you discuss and review changes before merging them. This helps teams work together, catch issues early, and maintain code quality.

<a href="https://github.com/pulls?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>View your pull requests</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## Working with pull requests

The **Conversation** tab of a pull request displays a description of the changes, a timeline of events, and comments and reviews from collaborators. This central hub lets you track the discussion and progress of the proposed changes.

The **Commits** tab shows all commits made to the pull request branch in chronological order. This helps you understand the development history and see how the changes evolved over time.

The **Checks** tab displays the status of any automated tests, builds, or other continuous integration workflows that run when you push commits. These checks help ensure your changes meet quality standards before merging.

The **Files changed** tab shows the differences between the proposed changes and the existing code, making it easy to see what will change when the pull request merges.

The **Merge status** of a pull request can be viewed directly in the header from anywhere in the pull request page. Click to open the details so you can quickly identify blockers, missing approvals, and get your pull request ready to merge. 

## Draft pull requests

When you create a pull request, you can choose to make it a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review them. This is useful when you want to share work-in-progress without formally requesting reviews.

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. See [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

## Pull request refs and merge branches

When you open a pull request, {% data variables.product.github %} creates up to two temporary, read-only Git references for it:

| Ref | Description |
| --- | --- |
| `refs/pull/PULL_REQUEST_NUMBER/head` | Points to the latest commit on the pull request's head branch. |
| `refs/pull/PULL_REQUEST_NUMBER/merge` | A merge branch—a simulated merge commit that represents what the repository would look like if the pull request were merged right now. This ref is only available when the pull request has no merge conflicts. |

The merge branch automatically updates when the head branch or base branch changes. To fetch it locally:

```shell
git fetch origin refs/pull/PULL_REQUEST_NUMBER/merge
git checkout FETCH_HEAD
```

Replace `PULL_REQUEST_NUMBER` with the number of your pull request.

For information about how {% data variables.product.prodname_actions %} uses the merge branch, see [AUTOTITLE](/actions/reference/workflows-and-actions/events-that-trigger-workflows#how-the-merge-branch-affects-your-workflow).

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

* Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
* Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. As a result, the merge base used for the comparison might be different.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
