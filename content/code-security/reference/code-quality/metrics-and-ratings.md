---
title: Metrics and scores reference
shortTitle: Metrics and scores
allowTitleToDifferFromFilename: true
intro: Understand the terminology used by {% data variables.product.github %} to assess the quality of your repository's code.
versions:
  feature: code-quality
contentType: reference
redirect_from:
  - /code-security/code-quality/reference/metrics-and-ratings
category:
  - Improve code quality
---

This article provides definitions for the metrics and scores used by {% data variables.product.prodname_code_quality_short %}.

You can see the rule-based results for your repository on your **{% data variables.product.prodname_security_and_quality_tab %}** tab, in the **{% data variables.code-quality.all_findings %}** tab under "{% data variables.code-quality.code_quality_ui_views %}".

## Metric definitions

The following table provides definitions for each metric that is reported for your repository.

{% data reusables.code-quality.metrics-definitions-table %}

## Severity levels

Severity levels are used to indicate the potential impact or urgency of a code quality finding. They help users prioritize remediation efforts and communicate risks to stakeholders. Severity is determined by the rule that detected the issue, following conventions from {% data variables.product.prodname_codeql %} and industry standards.

{% data reusables.code-quality.severity-levels-table %}

## Scores definitions

These scores are used to summarize the overall reliability and maintainability of a repository based on the severity of rule-based results found by {% data variables.product.prodname_codeql %} scans of the full default branch:

| Scores               | Definition   | Criteria (based on findings)  |
|----------------------|--------------|-------------------------------|
| **Excellent**        | Codebase demonstrates best practices for reliability and maintainability. | No code quality findings detected                              |
| **Good**             | Codebase has low-severity issues or minor improvements are suggested. | ≥1 "Note" level finding       |
| **Fair**             | Codebase has moderate-severity issues that may impact quality, but are not critical. | ≥1 "Warning" level finding              |
| **Poor**             | Codebase has high-severity issues, including bugs or major maintainability risks. | ≥1 "Error" level finding                |

## Code coverage

For details about how {% data variables.product.prodname_code_quality_short %} measures and reports code coverage, see [AUTOTITLE](/code-security/reference/code-quality/code-coverage).

## Further reading

* [AUTOTITLE](/code-security/concepts/code-quality/code-quality)
* [AUTOTITLE](/code-security/how-tos/maintain-quality-code/interpret-results)
