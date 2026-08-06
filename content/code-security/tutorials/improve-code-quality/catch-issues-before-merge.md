---
title: Preventing code quality issues from reaching your default branch
shortTitle: Catch issues before merge
intro: 'Move through {% data variables.product.prodname_code_quality_short %} findings on your pull request, including understanding severity labels, when each finding is best fixed, delegated, or dismissed, and how those choices shape your repository''s code health.'
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: tutorials
redirect_from:
  - /code-security/code-quality/tutorials/fix-findings-in-prs
  - /code-security/tutorials/improve-code-quality/fix-findings-in-prs
  - /code-security/code-quality/get-started/quickstart
  - /code-security/code-quality/get-started
  - /code-security/tutorials/improve-code-quality/quickstart
category:
  - Improve code quality
---

## Introduction

In this tutorial, you'll follow a single pull request through {% data variables.product.prodname_code_quality_short %}'s analysis, from first comment to merge. You'll learn:

* How to read the {% data variables.product.prodname_code_quality_short %} comments on a pull request and tell the two types of finding apart.
* How to use a finding's severity label to decide what to fix, what to dismiss, and in what order.
* How the choices you make on a pull request shape your repository's scores, backlog, and merge gates.

By the end, you'll have resolved every blocking finding on the example pull request and merged it with a clean {% data variables.product.prodname_code_quality_short %} check, and you'll understand *why* you made each choice.

This is a guided walkthrough, so it favors understanding over speed. For basic steps on how to commit an autofix or dismiss a finding, see the companion how-to: [AUTOTITLE](/code-security/how-tos/maintain-quality-code/fix-findings-on-a-pr).

### Before you start

* {% data variables.product.prodname_code_quality_short %} is enabled on a repository you contribute to. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
* The repository uses a language supported by {% data variables.product.prodname_codeql %} so that rule-based findings and scores are generated. For a list of supported languages, see [AUTOTITLE](/code-security/concepts/code-quality/code-quality#supported-languages).
* You have a pull request open against the default branch with at least one {% data variables.product.prodname_code_quality_short %} finding to triage. If you don't have a pull request ready, you can follow the example below.

Throughout this tutorial, we'll use a running example: a pull request that refactors some code will introduce several code quality issues into the default branch if it's merged as it is. A {% data variables.product.prodname_code_quality_short %} scan has automatically run on the pull request and has reported several findings as comments.

## Why the pull request is the best place to fix a finding

Every finding you don't resolve at the pull request stage becomes an action item in your repository's backlog, and technical debt is often more expensive to pay down later than to address now. Right now, while the pull request is open, the code's context and intent are still fresh in your mind, which makes each finding, and its autofix, faster to assess, apply, or confidently dismiss.

Resolving findings at the pull request stage means your team spends less time triaging remediation work against feature work, and avoids the overhead of extra pull requests just to burn down a backlog.

## Step 1: Find the {% data variables.product.prodname_code_quality_short %} comments on your pull request

When you open a pull request, {% data variables.product.prodname_code_quality_short %} runs **two types of analysis** and posts findings as comments. Open the **Files changed** tab of your pull request and look at who left each comment—the author tells you which type of finding it is.

1. **Rules-based findings** are posted by the **`{% data variables.code-quality.pr_commenter %}`**. {% data variables.product.prodname_code_quality_short %} uses {% data variables.product.prodname_codeql %} to scan your changes against a set of rules, and each comment includes a suggested autofix.

1. **AI-powered findings** are posted by **{% data variables.product.prodname_copilot_short %}**. If your organization has {% data variables.product.prodname_copilot_short %} licenses and AI features are enabled for your enterprise, {% data variables.copilot.copilot_code-review_short %} looks for quality issues that rules-based analysis may miss. These comments also include a suggested autofix.

In our example, we'll look at three comments that have come from `{% data variables.code-quality.pr_commenter %}`, so they're rules-based findings. On your own pull request you may see both types—note which is which before you go further, because severity labels (Step 2) apply only to the rules-based comments.

## Step 2: Read the severity label to decide what matters

Every rules-based finding from `{% data variables.code-quality.pr_commenter %}` carries a severity label—**Error**, **Warning**, or **Note**. Find the label on one of the comments and check it against this table.

{% data reusables.code-quality.severity-levels-table %}

The label is doing two jobs for you at once:

1. **It tells you what to fix first.** Severity reflects the expected impact of a rule across typical code. In our example, you'd start with the **Error**, then the **Warning**, and treat the **Note** as optional polish.
1. **It may decide whether you can merge at all.** A repository administrator or organization owner can configure {% data variables.product.prodname_code_quality_short %} as a merge gate. For example, if the threshold for merging is "Warning and above", every **Warning** *and* **Error**-level finding must be fixed or dismissed before you can merge (**Note** findings wouldn't prevent you from merging). Similarly, a stricter threshold may require you to resolve _all_ findings before merge.

To see whether a gate is in effect, scroll to the **Checks** section at the bottom of the pull request. If your changes fall below the required threshold, you'll see a merge block banner: "Merging is blocked: Code quality findings were detected."

![Screenshot of the merge block banner in the Checks section of a pull request.](/assets/images/help/code-quality/code-quality-merge-block.png)

In our example the gate is set to "Warning and above", so the banner is present: the **Error** and the **Warning** are blocking the merge, and the **Note** is not. That tells you what you have to clear before this pull request can be merged.

If the merge block banner doesn't specify a severity level, you must clear _all_ findings in order to merge your pull request.

## Step 3: Resolve each finding

For every finding, decide whether it applies to your code and, if it does, how to fix it. That leads you to one of three actions.

| Assessment | Recommended action | Notes |
| --- | --- | --- |
| The finding is legitimate and the suggested fix looks correct | **Apply the autofix suggestion** | Clicking **Commit suggestion** doesn't consume {% data variables.product.prodname_ai_credits_short %}, and rules-based autofixes don't require a {% data variables.product.prodname_copilot_short %} license. |
| The finding is real but you want to fix several at once, or the suggested fix needs adapting | **Delegate to {% data variables.product.prodname_copilot_short %}**—mention `@copilot` in a comment to hand the work to the cloud agent. {% data variables.product.prodname_copilot_short %} reacts with 👀, starts a new agent session, and pushes the necessary fixes to the pull request's branch | Requires a {% data variables.product.prodname_copilot_short %} license and consumes {% data variables.product.prodname_ai_credits_short %}. |
| The finding doesn't apply, for example, it's test code, an intentional pattern, or a false positive | Click **Dismiss finding** and provide a reason | You'll be able to merge your pull request, but the finding will appear in the repository backlog, and in future pull requests. |

Apply the practice to your own pull request, working in severity order.

In our example:

* The **Error**- and **Warning**-level findings are genuine bugs and the suggested autofixes look reasonable, so we apply the autofix suggestions. The findings resolve and drop out of the blocking count.
* A **Note**-level finding flags a minor pattern in an adjacent test helper. It's intentional, so we dismiss it with a reason like "Used in tests".
* There are several additional **Note**-level findings. Instead of working through each autofix suggestion one by one, we comment: "`@copilot`, fix all the remaining Note-level findings". We track {% data variables.product.prodname_copilot_short %}'s progress in the **Agents** tab of the repository, and review the commits it pushes to the pull request when they're ready.

## Step 4: Confirm your pull request is unblocked (optional)

If you *do* have blocking findings, once you've fixed or dismissed the relevant findings, return to the **Checks** section at the bottom of the pull request. 

In our example, with the **Error** and **Warning** findings resolved, the merge block banner disappears. Your pull request is now clear to merge.

If the banner is still there, it means a finding at or above the blocking severity is still open.

## Step 5: Resolve the AI-powered findings from {% data variables.product.prodname_copilot_short %}

If your organization has {% data variables.product.prodname_copilot_short %} licenses and AI features are enabled for your enterprise, you'll also see comments posted by {% data variables.product.prodname_copilot_short %}. These are the **AI-powered findings** introduced in Step 1, and they come from {% data variables.copilot.copilot_code-review_short %} rather than from `{% data variables.code-quality.pr_commenter %}`.

Where the rules-based findings match your changes against a fixed set of {% data variables.product.prodname_codeql %} rules, {% data variables.copilot.copilot_code-review_short %} reasons about the intent of your code. It catches quality issues that don't map to a specific rule, so it's a useful complement to the rules-based comments rather than a replacement for them.

These findings don't carry a severity label of "Error", "Warning", or "Note". Since the merge gate you saw in Step 2 counts only the severity of *rules-based findings*, AI-powered findings never block your pull request on their own. That doesn't make them optional, resolving them in context is still the optimal place to keep quality issues out of your default branch.

You resolve an AI-powered finding with the same three choices you used in Step 3:

* **Apply the autofix suggestion.** Each comment includes a suggested fix. If it's correct as-is, click **Commit suggestion**. Applying the autofix doesn't consume {% data variables.product.prodname_ai_credits %}.
* **Delegate to {% data variables.product.prodname_copilot_short %}**—mention `@copilot` in a comment to hand the work to the cloud agent. {% data variables.product.prodname_copilot_short %} reacts with 👀, starts a new agent session, and pushes the necessary fixes to the pull request's branch. This option requires a {% data variables.product.prodname_copilot_short %} license, and does consume {% data variables.product.prodname_ai_credits %}.
* **Resolve the comment.** If it doesn't apply to your code, click **Resolve**.

## How this connects to the rest of your code health

The pull request you just cleared is part of a bigger picture:

* **Scores.** Your repository's reliability and maintainability scores are computed from findings on the default branch. Resolving findings before merge is how you keep those scores from drifting. See [AUTOTITLE](/code-security/code-quality/reference/metrics-and-ratings).
* **Backlog.** Anything you don't fix in the pull request joins the backlog of findings on the default branch. Working that backlog down is a discipline of its own. See [AUTOTITLE](/code-security/tutorials/improve-code-quality/raise-your-quality-rating).
* **Compliance.** When a class of findings genuinely must not reach the default branch, the "Require code quality results" ruleset helps repository administrators and organization owners encode that decision as a merge gate. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/unblock-your-pr).

The healthiest teams combine all three: deliberate triage and remediation at the pull request stage, periodic backlog work, and enforced thresholds at the merge boundary.

## Troubleshooting

* **I don't see any {% data variables.product.prodname_code_quality_short %} comments.** The scan may still be running, your changes may not touch a supported language, or you don't have any findings. Confirm {% data variables.product.prodname_code_quality_short %} is enabled and give the check (called "{% data variables.code-quality.check_status_name %}") time to finish. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).
* **I only see comments from `{% data variables.code-quality.pr_commenter %}`, never from {% data variables.product.prodname_copilot_short %}.** AI-powered findings require {% data variables.product.prodname_copilot_short %} licenses and AI features enabled for your enterprise. Without them, you'll see only rules-based findings.
* **I don't see autofixes for my code quality findings.** Autofix generation consumes {% data variables.product.prodname_ai_credits %}. Your organization may have depleted its monthly budget of {% data variables.product.prodname_ai_credits_short %}.
* **The merge block banner won't clear.** At least one finding at or above the blocking severity is still open. If you don't see a severity level defined in the merge block banner, it means that your repository is using the most stringent code quality thresholds, which require *all* findings to be addressed before merging. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/unblock-your-pr).

## Conclusion

In this tutorial, you've worked through {% data variables.product.prodname_code_quality_short %} comments on a pull request, used severity to prioritize remediation, and resolved each finding intentionally before merging your pull request. By treating each finding, and its autofix, as a small, in-context decision, you prevented code quality debt from reaching your default branch.

## Next steps

* Apply the same thinking to your existing backlog: [AUTOTITLE](/code-security/tutorials/improve-code-quality/raise-your-quality-rating).
* Learn how findings translate into scores so you can measure the impact of the work: [AUTOTITLE](/code-security/code-quality/reference/metrics-and-ratings).
