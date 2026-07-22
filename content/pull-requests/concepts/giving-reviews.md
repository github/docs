---
title: Giving reviews
shortTitle: Give reviews
intro: 'Provide feedback on pull requests by commenting on changes, suggesting edits, and approving or requesting updates before merging code.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

Reviewing pull requests is one of the main ways people collaborate on {% data variables.product.github %}. When you review a peer's work, you help catch issues early, share knowledge, and decide whether a change is ready to merge. 

## Commenting on changes

Anyone with read access can review and comment on proposed changes. As a reviewer, you can:

* Leave general feedback on the overall pull request.
* Comment on specific lines to ask questions or explain concerns.
* Suggest exact changes that the author can apply with a single click.

Review conversations appear in the pull request timeline so the whole team can follow the discussion and track decisions. 

## Requesting changes and approving

When you finish a review, you submit it with a decision that tells the author what to do next:

* **Comment** leaves general feedback without explicitly approving or requesting changes.
* **Approve** signals that the changes are ready to merge.
* **Request changes** flags feedback that the author should address before the pull request merges.

## Reviewing changes with more depth

Thorough reviews go beyond reading the diff top to bottom. {% data variables.product.github %} gives you tools to review large or complex changes with precision:

* **Review one file at a time**, mark each file as **Viewed** to collapse it, and use the progress bar to track how much of the pull request you've covered.
* **Assess security and dependencies.** Dependency review shows how a pull request changes dependencies and whether it introduces known vulnerabilities, and code scanning surfaces alerts on the proposed changes.
{% ifversion fpt or ghec %}
* **Automate reviews with {% data variables.product.prodname_copilot_short %}.** {% data variables.product.prodname_copilot_short %} can perform automated code reviews on a pull request, comment on specific lines, and suggest changes, helping you catch common issues before a human reviewer looks at the code.
{% endif %}

## Further reading

* [AUTOTITLE](/pull-requests/get-started/reviewing-pull-requests-quickstart)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/reviewing-dependency-changes-in-a-pull-request) 
{% ifversion fpt or ghec %}
* [AUTOTITLE](/copilot/concepts/agents/code-review).
{% endif %}
