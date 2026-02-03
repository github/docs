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
topics:
  - Pull requests
---

Pull requests are proposals to merge code changes into a project. A pull request is {% data variables.product.github %}'s foundational **collaboration feature**, letting you discuss and review changes before merging them. This helps teams work together, catch issues early, and maintain code quality.

<a href="https://github.com/pulls?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>View your pull requests</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

## Working with pull requests

The **Conversation** tab of a pull request displays a description of the changes, a timeline of events, and comments and reviews from collaborators. This central hub lets you track the discussion and progress of the proposed changes.

The **Commits** tab shows all commits made to the pull request branch in chronological order. This helps you understand the development history and see how the changes evolved over time.

The **Checks** tab displays the status of any automated tests, builds, or other continuous integration workflows that run when you push commits. These checks help ensure your changes meet quality standards before merging.

The **Files changed** tab shows the differences between the proposed changes and the existing code, making it easy to see what will change when the pull request merges.

## Draft pull requests

When you create a pull request, you can choose to make it a draft pull request. Draft pull requests cannot be merged, and code owners are not automatically requested to review them. This is useful when you want to share work-in-progress without formally requesting reviews.

{% data reusables.pull_requests.mark-ready-review %} You can convert a pull request to a draft at any time. See [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request).

## Differences between commits on compare and pull request pages

The compare and pull request pages use different methods to calculate the diff for changed files:

* Compare pages show the diff between the tip of the head ref and the current common ancestor (that is, the merge base) of the head and base ref.
* Pull request pages show the diff between the tip of the head ref and the common ancestor of the head and base ref at the time when the pull request was created. As a result, the merge base used for the comparison might be different.

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)
