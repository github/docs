---
title: Accelerating pull requests in your company with GitHub Copilot
shortTitle: Accelerate pull requests
intro: 'Understand features, enable developers, and measure Copilot''s impact.'
versions:
  feature: copilot
product: '{% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.copilot.essp-intro %}

## 1. Identify barriers to success

{% data reusables.copilot.identify-barriers-intro %}

Teams often experience delays in merging pull requests due to lengthy review cycles. These delays often stem from:

* Complex code changes that are difficult to understand
* Inconsistent code formatting that makes reviews challenging
* A general lack of context provided with the changes
* Social factors that contribute to slow or hard-to-address reviews

Reviewers can also easily miss small errors that may lead to production issues.

This leads to bottlenecks in the development process and slows down the overall delivery and quality of features.

## 2. Evaluate your options

{% data reusables.copilot.evaluate-options-intro %}

<a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=accelerate-pull-requests" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### How {% data variables.product.prodname_copilot_short %} can help

{% data variables.product.prodname_copilot %} offers a suite of features designed to accelerate the pull request review process, enhance code quality, and improve collaboration, ultimately leading to faster merge times.

By leveraging {% data variables.product.prodname_copilot_short %}'s capabilities, teams can streamline their workflows, reduce friction, and ensure consistent, high-quality code.

#### Generates complete and helpful PR summaries

{% data variables.product.prodname_copilot_short %} can automatically generate clear and concise PR summaries, saving developers time and ensuring that the purpose and changes of the PR are easily understood by reviewers. This reduces the likelihood of misunderstandings and speeds up the review process.

#### Assists reviewers during their review process

{% data variables.product.prodname_copilot %} can be used as a powerful PR review companion.

* {% data variables.product.prodname_copilot_short %} can help explain complex code changes so that reviewers more quickly understand what the PR is contributing.
* {% data variables.product.prodname_copilot_short %} can provide repository-wide, context-aware suggestions and potential code improvements directly within the pull request review interface on {% data variables.product.github %}, helping reviewers catch potential issues and offer constructive feedback more efficiently.
* {% data variables.product.prodname_copilot_short %} can help reviewers draft and write clear, consistent, and effective review comments.

#### Reviews based on organization guidelines

* {% data variables.product.prodname_copilot_short %} can review code changes in your IDE before opening a pull request, or be assigned as reviewer to a pull request.
* With rulesets, you can set up {% data variables.product.prodname_copilot_short %} to systematically review pull requests based on custom criteria.
* With coding guidelines for reviews ({% data variables.copilot.copilot_enterprise_short %} only), {% data variables.product.prodname_copilot_short %} can enforce organizational coding standards and best practices, automatically flagging potential violations and suggesting fixes.

These features ensure consistency across the codebase and help you catch errors early in the development process, reducing the need for manual code reviews and saving time for developers and reviewers.

#### Suggests code fixes

Based on a pull request review comment, {% data variables.product.prodname_copilot_short %} can help pull request authors quickly implement the required code changes to resolve the review.

### Cultural considerations

{% data reusables.copilot.cultural-factors-intro %}

* Teams might **wait too long to release**, deploying large batches of code at once. This could be caused by a fear of destabilization with frequent releases, a lack of CI/CD pipeline maturity, or strict compliance requirements.
* Developers might **spend too long perfecting code** or adding unnecessary features. This could be caused by a culture of perfectionism or a lack of effective prioritization.
* Developers might **build overly complex solutions** for simple problems. This could be caused by a desire to future-proof unnecessarily, or pressure to add value through complexity.

## 3. Implement changes

{% data reusables.copilot.implement-changes-intro %}

* [Create helpful pull request summaries](#create-helpful-pull-request-summaries)
* [Use {% data variables.product.prodname_copilot_short %} as a review assistant](#use-copilot-as-a-review-assistant)
* [Add {% data variables.product.prodname_copilot_short %} as a reviewer](#add-copilot-as-a-reviewer)
* [Get help implementing review comments](#get-help-implementing-review-comments)
* [Best practices for developers](#best-practices-for-developers)
* [Resources](#resources)

### Create helpful pull request summaries

1. When creating a pull request, click the {% data variables.product.prodname_copilot_short %} icon in the "Add a description" field, then click **Summary**.
1. {% data variables.product.prodname_copilot_short %} will scan through the pull request and provide an overview of the changes made in prose, as well as a bulleted list of changes with the files that they impact.
1. Check you're happy with {% data variables.product.prodname_copilot_short %}'s description.
1. When reviewers come to your pull request, they'll have all the context they need to leave a review.

### Use {% data variables.product.prodname_copilot_short %} as a review assistant

When jumping into a pull request as a reviewer, you can use {% data variables.product.prodname_copilot_short %} to speed up your review.

1. Use {% data variables.product.prodname_copilot_short %} to **understand the changes in the pull request**.

   * Ask {% data variables.product.prodname_copilot_short %} to summarize the changes made to a file, particularly helpful for longer diffs. You can pick a specific file from the diff by clicking {% octicon "kebab-horizontal" aria-label="Show options" %} on the top-right corner of the file.

     ![Screenshot of a pull request "files changed" tab. The "Ask {% data variables.product.prodname_copilot_short %} about this diff" option is highlighted in red.](/assets/images/help/copilot/ask-to-explain.png)

   * For changes in specific lines, highlight the lines you want to better understand and ask {% data variables.product.prodname_copilot_short %} to explain the changes to you. You can highlight a set of lines by clicking on the uppermost line number first, holding your SHIFT key, and then clicking on the lowermost line of the diff.

     ![Screenshot of a pull request "files changed" tab. A selection of lines is highlighted and an "Explain" option is displayed in a dropdown.](/assets/images/help/copilot/highlight-lines.png)

1. **Collaborate on your PR review** with {% data variables.product.prodname_copilot_short %}. Don't forget to attach the specific file diffs to the conversation before prompting {% data variables.product.prodname_copilot_short %}.

   * You can ask {% data variables.product.prodname_copilot_short %} for its own opinion on the PR changes by asking: `Provide your judgement as a PR Reviewer, both for functional and non-functional aspects that these changes bring`. Note how this prompt asks {% data variables.product.prodname_copilot_short %} to consider both functional and non-functional aspects of the code.

   * For your own PR review comments, ask {% data variables.product.prodname_copilot_short %} for a second opinion: `As my peer reviewer on this pull request, give me your feedback on my own review: YOUR-REVIEW-COMMENT. Do you think it's pertinent? Am I missing something?`

1. Collaborate with {% data variables.product.prodname_copilot_short %} to **draft and refine your review comments**.

   * After planning the review with {% data variables.product.prodname_copilot_short %}, you can ask to list the comments that you should provide: `Make a list of review comments to add to the PR and tell me exactly in which file diff and lines each comment should be added`.
   * You can also ask {% data variables.product.prodname_copilot_short %} to create a first draft of a review comment you have in mind or refine a comment before you post it: `Help me draft review comments as discussed` or `Refine this review comment to make it clear, concise, and actionable`.

### Add {% data variables.product.prodname_copilot_short %} as a reviewer

To reduce review times and merge pull requests faster, use {% data variables.product.prodname_copilot_short %} code reviews systematically: first in the IDE before opening the pull request, then on the PR in {% data variables.product.github %}.

Using {% data variables.product.prodname_copilot_short %} code review does not replace the need for human code review. However, following the steps above can help humans complete their reviews faster.

* **Developers** should request a review of all their changes using {% data variables.product.prodname_copilot_short %} code review before opening a pull request.
* **Administrators** should set up repository or organization rulesets to automatically add {% data variables.product.prodname_copilot_short %} as a reviewer on any pull request targeting protected branches.
* **Team leads** should capture their team's standard style and rules and set them as coding guidelines for the organization so that {% data variables.product.prodname_copilot_short %} can leverage them in reviews.
  * Ensure your coding guidelines capture a minimum set of styling recommendations that make code more readable, which will help during the pull request review process.
  * To reduce the amount of PR review comments due to styling issues, set the same recommendations in {% data variables.product.prodname_copilot_short %} instructions at the repository and organization level. This way, the code generated by {% data variables.product.prodname_copilot_short %} will conform to these guidelines.

### Get help implementing review comments

Pull request authors can speed up resolution of PR review comments by quickly implementing fixes with {% data variables.product.prodname_copilot_short %}'s assistance.

* For any review comments left by {% data variables.product.prodname_copilot_short %} itself, either commit the proposed fix directly, or edit it in Copilot Workspace before committing.
* For any review comments left by peers, navigate to the file diff related to the PR review comment and attach the diff to a {% data variables.copilot.copilot_chat_short %} conversation. Then, copy paste the review comment with a prompt like this: `Suggest a fix for this review comment:`
* If you are using VS Code, ask {% data variables.product.prodname_copilot %} in agent mode to implement the required changes from the review comment.

### Best practices for developers

Developers **should**:

* Request {% data variables.product.prodname_copilot_short %}'s review in your IDE before pushing to catch and resolve issues early.
* Use {% data variables.product.prodname_copilot_short %} to plan and refine your own PR review comments to help PR authors understand and resolve issues.
* Attach relevant diff context, including specific lines of code, to your conversations with {% data variables.product.prodname_copilot_short %}.

Developers **should not**:

* Apply {% data variables.product.prodname_copilot_short %}'s suggestions without testing.
* Rely solely on {% data variables.product.prodname_copilot_short %} for reviews.
* Neglect code readability.

### Resources

* [AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot)
* [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review?tool=vscode#reviewing-changes)
* [AUTOTITLE](/copilot/using-github-copilot/code-review/configuring-coding-guidelines)
* [AUTOTITLE](/copilot/using-github-copilot/code-review/configuring-automatic-code-review-by-copilot)
* [AUTOTITLE](/copilot/customizing-copilot/adding-organization-custom-instructions-for-github-copilot)

## Metrics to watch

{% data reusables.copilot.measure-changes-intro %}

* **Developer satisfaction**: Use developer surveys to measure satisfaction with engineering tooling.
* **Pull requests merged per developer**: You can use GitHub's `pull request` webhook, ensuring `action` is `closed` and the `merged` property inside `pull request` object is `true`.
* **Pull requests lead time**: Measure the average length of time between PR creation and merge.
