---
title: Metrics and ratings reference
shortTitle: Metrics and ratings
intro: Understand the terminology used by {% data variables.product.github %} to assess the quality of your repository's code.
versions:
  feature: code-quality
topics:
  - Code Quality
contentType: reference
redirect_from:
  - /code-security/code-quality/reference/metrics-and-ratings
---

{% data reusables.code-quality.code-quality-preview-note %}

This article provides definitions for the metrics and ratings used by {% data variables.product.prodname_code_quality_short %}.

You can see the rule-based results for your repository on your **Security** tab, in the **{% data variables.code-quality.all_findings %}** tab under "{% data variables.code-quality.code_quality_ui_views %}".

## Metric definitions

The following table provides definitions for each metric that is reported for your repository.

| Metric         | Definition      | Example findings     |
|----------------|-----------------|----------------------|
| **Reliability**   | Assess whether the code performs its intended function correctly, predictably, and consistently. Reliable code is free from bugs, handles errors safely, and operates as expected under normal and edge-case conditions. | Issues with performance, concurrency, error handling, correctness, API design, accessibility, internationalization, or security |
| **Maintainability** | Assess how easy it is to understand, modify, and extend the code over time. Maintainable code follows best practices, avoids unnecessary complexity, and is organized for ease of future changes and collaboration. | Not using best practices, unused/dead code, duplicate code, complexity, logical redundancies, inadequate documentation, dependency issues |

## Severity levels

Severity levels are used to indicate the potential impact or urgency of a code quality finding. They help users prioritize remediation efforts and communicate risks to stakeholders. Severity is determined by the rule that detected the issue, following conventions from {% data variables.product.prodname_codeql %} and industry standards.

| Severity  | Definition         |
|-----------|--------------------|
| **Error** | Indicates a high-severity issue that is likely to cause bugs, failures, or major maintainability risks. |
| **Warning** | Indicates a moderate-severity issue that may impact code quality or reliability, but is not immediately critical. |
| **Note** | Indicates a low-severity issue, minor improvement, or recommendation. These findings are useful for ongoing code health and maintainability. |

## Ratings definitions

These ratings are used to summarize the overall reliability and maintainability of a repository based on the severity of rule-based results found by {% data variables.product.prodname_codeql %} scans of the full default branch:

| Rating               | Definition   | Criteria (based on findings)  |
|----------------------|--------------|-------------------------------|
| **Excellent**        | Codebase demonstrates best practices for reliability and maintainability. | No code quality findings detected                              |
| **Good**             | Codebase has low-severity issues or minor improvements are suggested. | ≥1 "Note" level finding       |
| **Fair**             | Codebase has moderate-severity issues that may impact quality, but are not critical. | ≥1 "Warning" level finding              |
| **Needs Improvement**| Codebase has high-severity issues, including bugs or major maintainability risks. | ≥1 "Error" level finding                |

## Further reading

* [AUTOTITLE](/code-security/code-quality/concepts/about-code-quality)
* [AUTOTITLE](/code-security/code-quality/how-tos/interpret-results)
