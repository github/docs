---
title: Resolving reviews
shortTitle: Resolve reviews
intro: 'Address review feedback by comparing changes, updating code, and resolving comments to prepare your pull request for merging.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: concepts
---

After you open a pull request, reviewers leave feedback that helps improve your code before it merges. Resolving that feedback means understanding each comment, making the changes it calls for, and ensuring you've addressed everything.

## Understanding review feedback

Reviewers can leave general feedback, comment on specific lines, and propose exact changes as suggestions. Reviews appear in the pull request timeline so you can follow the discussion and see which comments still need a response. Depending on repository settings, a reviewer can also approve your pull request or request changes that you should address before merging. 

Before you change anything, read each comment to understand its intent. A comment might point out a bug, ask a question, request a different approach, or suggest an edit you can accept directly.

If you have access to {% data variables.product.prodname_copilot_short %}, it can help you interpret review comments and propose fixes, which is useful when a pull request has many comments to work through.

## Implementing changes and fixing code

When you address feedback, you can:

* Apply a reviewer's suggested change directly, which commits the suggestion to your branch.
* Make broader edits locally and push new commits to the branch.

Most feedback is resolved by updating your code and pushing new commits to the pull request branch. As you address feedback, mark conversations as resolved so both you and your reviewers can track what is done and what still needs attention. 

When required reviewers have approved and no requested changes remain, your pull request is ready to move toward merging. Because the pull request tracks the branch, each new commit updates the pull request and re-runs any automated checks.

## Working through feedback efficiently

On larger or more scrutinized pull requests, a few practices help you address feedback quickly:

* **Batch accepting suggestions** by adding suggested changes to a batch so several accepted changes land in a single commit instead of one commit per suggestion.
* **Resolve any merge conflicts** proactively so that you can merge quickly once your pull request review is resolved. 
* **Re-request reviews** after you make substantial changes, so reviewers know the pull request is ready for another look.
* **Understand required reviews.** When a branch requires approvals or code owner sign-off, a "request changes" review or a dismissed approval can block merging until it's resolved. 
* **Track out-of-scope feedback** by opening an issue that links back to the comment, rather than expanding the pull request.

## Tools to help you resolve reviews

You don't have to work through feedback by hand alone:

* **Check out the pull request locally** or open it in **{% data variables.product.prodname_github_codespaces %}** to reproduce problems and test fixes before you push. 
* **Address security findings** raised during review. Code scanning alerts on your changes appear in the pull request so you can fix them before merging.
{% ifversion fpt or ghec %}
* **Use {% data variables.product.prodname_copilot_short %}** to interpret feedback, answer questions, propose fixes, and resolve merge conflicts with agents.
{% endif %}

## Further reading

* [AUTOTITLE](/pull-requests/concepts/deploying-code)
* [AUTOTITLE](/pull-requests/how-tos/review-pull-requests/incorporating-feedback-in-your-pull-request)
{% ifversion fpt or ghec %}
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
{% endif %}
