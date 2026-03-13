---
title: Fixing code quality findings before merging your pull request
shortTitle: Fix findings in PRs
intro: Catch quality issues before they reach your default branch and fix them with {% data variables.copilot.copilot_autofix_short %} and {% data variables.copilot.copilot_coding_agent %}.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
topics:
  - Code Quality
contentType: tutorials
redirect_from:
  - /code-security/code-quality/tutorials/fix-findings-in-prs
---

{% data reusables.code-quality.code-quality-preview-note %}

## Introduction

This tutorial shows you how to work with {% data variables.product.prodname_code_quality %} on pull requests to identify code quality issues that your changes may otherwise inadvertently introduce, and how to address and resolve code quality findings with {% data variables.copilot.copilot_autofix_short %} and {% data variables.copilot.copilot_coding_agent %}.

### Benefits of catching issues early

Catching code quality issues early keeps your team's codebase in shape. {% data variables.product.prodname_code_quality %} checks your code for:

* **Reliability**: For example, logic errors, unsafe error handling, or race conditions that could cause your app to crash or behave unpredictably. By addressing this type of issue early, you make your software more robust and dependable for users.
* **Maintainability**: For example, duplicated code, overly complex logic, unused variables, or violations of coding best practices. Fixing these issues makes your code cleaner and easier to read, so future changes are faster and less risky.

## 1. Understand how {% data variables.product.prodname_code_quality %} works on pull requests

When you open a pull request, {% data variables.product.prodname_code_quality %} uses {% data variables.product.prodname_codeql %} to automatically scan your changes for quality issues like those described above.

The results of the {% data variables.product.prodname_codeql %} scan are reported as comments on your pull request, left by the `{% data variables.code-quality.pr_commenter %}`. Each comment corresponds to a specific code quality problem that was detected in your changes, and comes with a suggested autofix.

Comments are labeled by severity (**Error**, **Warning**, **Note**), so you can see which findings are the most critical to address.

## 2. Prioritize fixes based on severity

Scan through the comments and identify the findings that have the highest severity level ("Error") first.

If there are no "Error" findings, look for findings of the next severity level ("Warning"), and so on.

High severity findings indicate more serious code quality issues that are more likely to introduce reliability or maintainability problems in your codebase. By resolving high severity findings, you're doing the most impactful work to maintain the quality of your team's code.

> [!NOTE]
> A repository administrator may have set a code quality gate that **blocks** merging on your pull request, if the pull request contains {% data variables.product.prodname_code_quality_short %} findings of a particular severity level or above. See [AUTOTITLE](/code-security/code-quality/how-tos/unblock-your-pr).

## 3. Leverage {% data variables.copilot.copilot_autofix_short %} or {% data variables.copilot.copilot_coding_agent %} to fix findings

### {% data variables.copilot.copilot_autofix_short %}

{% data reusables.code-quality.fix-findings-with-copilot-autofix %}

### {% data variables.copilot.copilot_coding_agent %}

{% data reusables.code-quality.fix-findings-with-coding-agent %}

## 4. Dismiss irrelevant findings

{% data reusables.code-quality.dismiss-irrelevant-findings %}

## 5. Push changes and wait for the scan

After fixing or dismissing findings, push your changes to the branch associated with your pull request. {% data variables.product.prodname_code_quality %} will automatically re-scan your changes and update the comments on your pull request accordingly.

## 6. Check your repository's code quality ratings

Anyone with write access can view the overall code quality ratings for a repository, which summarize the state of the code's reliability and maintainability across the default branch.

To view your repository's ratings, navigate to the **Security** tab of your repository, expand **{% data variables.code-quality.code_quality_ui_views %}** in the sidebar, then click **{% data variables.code-quality.all_findings %}**.

By resolving issues before merging your pull request, you've directly contributed to maintaining these ratings.

## Next steps

* Address code quality findings in your default branch and understand your repository’s reliability and maintainability ratings. See [AUTOTITLE](/code-security/code-quality/tutorials/improve-your-codebase).
* Provide feedback on {% data variables.product.prodname_code_quality %} in the [community discussion](https://github.com/orgs/community/discussions/177488).
