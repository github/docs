---
title: About pull request reviews
intro: 'Collaborate on pull requests to improve code quality.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: About PR reviews
---

Pull request reviews are one of the primary ways people collaborate on {% data variables.product.github %}. Reviewers can comment on changes, suggest improvements, and approve or request changes before code is merged. This collaborative process enables teams to ensure code quality and share knowledge.

{% raw %}<a href="https://github.com/pulls/review-requested?ref_product=github&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>View pull requests awaiting your review</span></a>{% endraw %}

## Reviewing pull requests

Anyone with read access can review and comment on proposed changes. When submitting a review, choose one of three statuses:

* **Comment**: Share feedback without approving or requesting changes.
* **Approve**: Approve the changes for merging.
* **Request changes**: Identify issues that must be fixed before merging.

You can comment on specific lines, suggest changes for authors to apply directly, and discuss implementation approaches. Reviews appear in the conversation timeline and merge box. Mark conversation threads as resolved to track addressed feedback.

## Requesting reviews

Repository owners and collaborators can request reviews from specific people or teams. When you define code owners in a CODEOWNERS file, they're automatically requested as reviewers when a pull request modifies their code. You can re-request reviews after making significant changes.

## Required reviews

Repository administrators can require approvals before pull requests are merged, ensuring code quality and preventing accidental merges. For more information, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-pull-request-reviews-before-merging).

## Further reading

* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)
* [AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)
* Learn more in the [Review pull requests](https://github.com/skills/review-pull-requests?ref_product=github&ref_type=engagement&ref_style=text) {% data variables.product.prodname_learning %} course
