---
title: Improving the quality of recently merged code with AI
shortTitle: Improve recent merges
intro: Explore {% data variables.product.prodname_code_quality %} findings for recently merged code and fix with {% data variables.copilot.copilot_autofix_short %} or delegate remediation work to {% data variables.copilot.copilot_coding_agent %}.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
topics:
  - Code Quality
contentType: tutorials
redirect_from:
  - /code-security/code-quality/tutorials/improve-active-code
  - /code-security/code-quality/tutorials/improve-recent-merges
---

{% data reusables.code-quality.code-quality-preview-note %}

## Introduction

This tutorial shows you how to explore and remediate quality issues that have been detected by {% data variables.product.prodname_code_quality_short %}'s AI-powered analysis of code that was recently merged into your default branch.

When you improve quality of recently merged files, you reduce technical debt in the repository and make it easier for other developers to work on files that are under active development.

### {% data variables.product.prodname_code_quality_short %} has two lines of defense

{% data variables.product.prodname_code_quality_short %} scans pull requests and comments on quality concerns, **then runs a second AI scan** after the pull request is merged. The two types of scan use complementary technologies:

* **Pull request scans** use {% data variables.product.prodname_codeql %} rules to identify problems. This analysis is thoroughly tested, good at identifying where code doesn't match the quality rules, and can analyze many files. However, it supports a subset of coding languages and cannot identify problems where there is no rule.

* **Recently merged file scans** use a large language model to analyze your most recently changed files and report findings for up to {% data variables.code-quality.num_ai_findings %} files. This analysis examines your code across all languages, without being limited by rules, and provides contextual insights and suggestions that can go beyond what {% data variables.product.prodname_codeql %} rules offer.

### Prerequisites

* {% data variables.product.prodname_code_quality_short %} is enabled, see [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality).
* At least one pull request has been merged since {% data variables.product.prodname_code_quality_short %} was enabled.

## 1. View the AI suggestions for your repository

After a {% data variables.product.prodname_code_quality_short %} scan of the recently merged files on your default branch, you can see the results under the **{% data variables.code-quality.recent_suggestions %}** view, which displays findings for up to {% data variables.code-quality.num_ai_findings %} files.

{% data reusables.code-quality.dashboard-navigation-repo %}
{% data reusables.code-quality.dashboard-recent-suggestions %}

> [!NOTE]
> This view is empty if the repository is inactive or if LLM analysis could not suggest ways to improve code quality in recent pushes to the default branch.

## 2. Explore suggested improvements for your repository

On the **{% data variables.code-quality.recent_suggestions %}** page, each file is listed with the number of quality problems identified and when the file was pushed to the default branch.

* Click a file name to view details of the quality problems detected and the suggested fixes.

![Screenshot of the "{% data variables.code-quality.recent_suggestions %}" view for code quality.](/assets/images/help/code-quality/ai-suggestions-repo.png)

## 3. Delegate remediation work or open pull requests yourself

You can open a pull request to apply the suggested autofixes to a file or delegate the remediation work to {% data variables.copilot.copilot_coding_agent %}. You need a {% data variables.product.prodname_copilot_short %} license to assign work to {% data variables.copilot.copilot_coding_agent %}.
<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

### Delegate work to {% data variables.copilot.copilot_coding_agent %}

You can ask {% data variables.copilot.copilot_coding_agent_short %} to open pull requests to make improvements to files using the suggested changes as a prompt. This is the best option if the suggested changes look good to you and you want to open a pull request that applies fixes to more than one file.

To delegate pull request creation:

* **Multiple files:** Select the files you want to include, then click **Assign selected to {% data variables.product.prodname_copilot_short %}** in the header for the list of files.
* **One file:** Click **Assign to {% data variables.product.prodname_copilot_short %}** for the file.

There is a delay while the {% data variables.copilot.copilot_coding_agent_short %} sets up the work. When the pull request is open and work is in progress, a banner is displayed with a link to the pull request.

You can track {% data variables.copilot.copilot_coding_agent %}'s work:

* In the pull request, the summary is updated as work progresses.
* Using the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text) or session logs. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).

### Open your own pull requests

You can open pull requests yourself to apply autofix suggestions. This is the best option if:

* You want to work on the changes locally or in {% data variables.product.prodname_desktop %} before opening a pull request
* You do not have access to {% data variables.copilot.copilot_coding_agent %}

> [!NOTE]
> When you open a pull request yourself, you can only commit fixes to one file at a time. To fix multiple files at once, you must use {% data variables.copilot.copilot_coding_agent %}.

#### Opening a pull request

1. Click the file name to view details of the quality problems detected.
1. Review the problems and suggested fixes.
1. Expand the **Assign to {% data variables.product.prodname_copilot_short %}** drop-down and then click {% octicon "git-pull-request" aria-hidden="true" aria-label="Pull request" %} **Open pull request** to change the default option to "Open pull request". Your preference is remembered.

   ![Screenshot of the "{% data variables.code-quality.recent_suggestions %}" view for code quality.](/assets/images/help/code-quality/ai-suggestions-repo-fixes.png)

1. Click **Open pull request** to open a dialog of commit options.
1. Click **Commit change** to create a pull request with the fixes.

## 4. Provide pull request reviewers with context

Providing context on why you are proposing changes to code is the best way to encourage team members to review your pull request. If you used {% data variables.copilot.copilot_coding_agent %}, the pull request summary already includes full details of the problems fixed by the pull request.

If you opened the pull request directly from the {% data variables.product.prodname_code_quality %} view, the pull request summary links to the "{% data variables.code-quality.recent_suggestions %}" view. You may want to copy some of the explanations from the {% data variables.code-quality.recent_suggestions %} view into the pull request summary.

![Screenshot of a pull request summary created by {% data variables.product.prodname_code_quality %}.](/assets/images/help/code-quality/user-pr-ai-findings.png)

## 5. See your changes make an impact on {% data variables.code-quality.recent_suggestions %}

When you return to the "{% data variables.code-quality.recent_suggestions %}" view after merging your pull request, the findings you fixed are no longer listed.

## Next steps

* Learn more about how {% data variables.copilot.copilot_coding_agent %} can help expedite development tasks. See [AUTOTITLE](/copilot/tutorials/coding-agent/get-the-best-results).
* Provide feedback on {% data variables.product.prodname_code_quality %} in the [community discussion](https://github.com/orgs/community/discussions/177488).
