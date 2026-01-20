---
title: CodeQL-powered analysis for Code Quality
shortTitle: CodeQL analysis
allowTitleToDifferFromFilename: true
intro: Information on how CodeQL-powered analysis for {% data variables.product.prodname_code_quality_short %} works, the workflow used, and the status checks reported on pull requests.
versions:
  feature: code-quality
topics:
  - Code Quality
contentType: reference
redirect_from:
  - /code-security/code-quality/reference/codeql-detection
---

{% data reusables.code-quality.code-quality-preview-note %}

## {% data variables.product.prodname_codeql %}-powered analysis

{% data variables.product.prodname_code_quality_short %} uses {% data variables.product.prodname_codeql %} to perform rule-based analysis of pull requests and your default branch.

* Findings for your **default branch** appear under the "{% data variables.code-quality.all_findings %}" dashboard under your repository's Security tab.

* Findings **on pull requests** appear as comments made by `{% data variables.code-quality.pr_commenter %}`.

{% data variables.copilot.copilot_autofix_short %} suggestions are provided for findings where possible.

### Query lists for supported languages

Each {% data variables.product.prodname_code_quality_short %} rule is written as a query in {% data variables.product.prodname_codeql %} and then run using {% data variables.product.prodname_actions %}.

The rules are continually refined by both {% data variables.product.github %} and open source developers.

* [AUTOTITLE](/code-security/code-quality/reference/codeql-queries/csharp-queries)
* [AUTOTITLE](/code-security/code-quality/reference/codeql-queries/go-queries)
* [AUTOTITLE](/code-security/code-quality/reference/codeql-queries/java-queries)
* [AUTOTITLE](/code-security/code-quality/reference/codeql-queries/javascript-queries)
* [AUTOTITLE](/code-security/code-quality/reference/codeql-queries/python-queries)
* [AUTOTITLE](/code-security/code-quality/reference/codeql-queries/ruby-queries)

For more information about the {% data variables.product.prodname_codeql %} project, see [https://codeql.github.com/](https://codeql.github.com/).

## Workflow used for code quality analysis

You can see all the workflow runs for {% data variables.product.prodname_code_quality_short %} on the **Actions** tab for your repository. The dynamic workflow is called "{% data variables.code-quality.workflow_name_actions %}".

By default, the {% data variables.code-quality.workflow_name_actions %} workflow runs on standard {% data variables.product.github %} runners but you can configure {% data variables.product.prodname_code_quality_short %} to use runners with a specific label. These may be hosted by {% data variables.product.github %} or self-hosted.

If your organization has configured caching of private registries, these will be available for code quality analysis to use to resolve dependencies.

For more information, see:

* [AUTOTITLE](/code-security/code-quality/how-tos/enable-code-quality)
* [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/giving-org-access-private-registries#code-quality-access-to-private-registries)

## Pull request status checks

When code quality analysis runs on a pull request, the "{% data variables.code-quality.check_status_name %} / Analyze" check is shown in the "Checks" section at the bottom of the pull request.

Any code problems identified by the scan are reported in comments on the pull request. The comment is made by the `{% data variables.code-quality.pr_commenter %}` and includes a {% data variables.copilot.copilot_autofix_short %} suggestion.

### Status check failures

The workflow failed to run. For example, your budget for actions minutes is exhausted. See [Viewing logs to diagnose failures](/actions/how-tos/monitor-workflows/use-workflow-run-logs#viewing-logs-to-diagnose-failures).

### Merging is blocked: Code quality findings were detected

The scan found problems in the code that exceed the quality gate set by a code quality branch rule for the repository. You need to resolve these problems before you can merge the pull request. See [AUTOTITLE](/code-security/code-quality/how-tos/unblock-your-pr).
