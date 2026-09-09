---
title: Fixing code quality findings in recently merged files
shortTitle: Fix findings in recent merges
intro: Apply autofixes or delegate remediation work to {% data variables.product.prodname_copilot_short %} for quality issues detected by AI-powered analysis of recently merged code.
versions:
  feature: code-quality
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: '{% data reusables.permissions.code-quality-see-repo-findings %}'
contentType: how-tos
redirect_from:
  - /code-security/code-quality/tutorials/improve-active-code
  - /code-security/code-quality/tutorials/improve-recent-merges
  - /code-security/tutorials/improve-code-quality/improve-recent-merges
  - /code-security/how-tos/maintain-quality-code/fix-recent-merge-findings
category:
  - Improve code quality
---

> [!TIP]
> If you're new to {% data variables.product.prodname_code_quality_short %}, see [AUTOTITLE](/code-security/tutorials/improve-code-quality/raise-your-quality-rating?utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-recent-merges-walkthrough-tip) for a guided walkthrough of reviewing and improving your repository's quality scores.

## How {% data variables.product.prodname_code_quality_short %} analyzes recently merged files

{% data variables.product.prodname_code_quality_short %} runs an AI-powered scan on recently changed files after code is merged to your default branch. This scan uses a large language model to report up to {% data variables.code-quality.num_ai_findings %} findings per file in up to {% data variables.code-quality.num_ai_findings %} files—across all languages, without being limited to predefined rules.

{% data reusables.code-quality.recent-suggestions-preview-note %}

## Viewing recent suggestions

{% data reusables.code-quality.dashboard-navigation-repo %}
{% data reusables.code-quality.dashboard-recent-suggestions %}

   On the **{% data variables.code-quality.recent_suggestions %}** page, each file is listed with the number of quality problems identified and when the file was pushed to the default branch. Click a file name to view the quality problems and their suggested fixes.

   ![Screenshot of the "{% data variables.code-quality.recent_suggestions %}" view for code quality.](/assets/images/help/code-quality/ai-suggestions-repo.png)

> [!NOTE]
> This view is empty if the repository is inactive or if LLM analysis could not suggest ways to improve code quality in recent pushes to the default branch.

## Resolving a finding

You can delegate remediation work to {% data variables.product.prodname_copilot_short %} or open a pull request yourself.

### Delegate to {% data variables.product.prodname_copilot_short %}

You need a {% data variables.product.prodname_copilot_short %} license to assign work to {% data variables.copilot.copilot_cloud_agent %}.
<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-findings-merge-copilot-signup" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

1. Select the file or files you want to include for the fix, then click **Assign to {% data variables.product.prodname_copilot_short %}**.
1. There is a delay while {% data variables.product.prodname_copilot_short %} sets up the work. When the pull request is open and work is in progress, a banner is displayed with a link to the pull request.
1. Track {% data variables.product.prodname_copilot_short %}'s work:
   * In the pull request, the summary is updated as work progresses.
   * Using the [agents page](https://github.com/copilot/agents?ref_product=copilot&ref_type=engagement&ref_style=text&utm_campaign=code-quality-ga-july-2026&utm_medium=docs&utm_source=docs-fix-findings-merge-agent-page) or session logs. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

### Open a pull request

1. Click the file name to view details of the quality problems detected.
1. Review the problems and suggested fixes.
1. Expand the drop-down and then click {% octicon "git-pull-request" aria-hidden="true" aria-label="Pull request" %} **Open pull request**.

   ![Screenshot of the "{% data variables.code-quality.recent_suggestions %}" view for code quality.](/assets/images/help/code-quality/ai-suggestions-repo-fixes.png)

1. Click **Open pull request** to open a dialog of commit options.
1. Click **Commit change** to create a pull request with the fixes.

> [!NOTE]
> When you open a pull request yourself, you can only commit fixes to one file at a time. To fix multiple files at once, you must delegate the work to {% data variables.product.prodname_copilot_short %}.

## Further reading

* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/fix-backlog-findings)
