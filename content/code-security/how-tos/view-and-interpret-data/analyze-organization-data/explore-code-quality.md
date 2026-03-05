---
title: Exploring GitHub Code Quality results in your organization
shortTitle: Explore code quality
intro: Understand your organization's code health at a glance with the organization-level dashboard for {% data variables.product.prodname_code_quality_short %}.
product: '{% data reusables.gated-features.code-quality-availability %}'
permissions: 'Organization members'
contentType: how-tos
versions:
  feature: code-quality
topics:
  - Code Quality
---

{% data reusables.code-quality.code-quality-preview-note %}

## Prerequisites

* If your organization belongs to an enterprise, an enterprise owner must enable {% data variables.product.prodname_code_quality_short %} for your organization. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/configure-specific-tools/allow-github-code-quality-in-enterprise).
* Your organization must have repositories with {% data variables.product.prodname_code_quality_short %} enabled. See [AUTOTITLE](/code-security/how-tos/maintain-quality-code/enable-code-quality).

## Viewing code quality insights for your organization

1. On {% data variables.product.prodname_dotcom %}, navigate to the main page of your organization. For example, from [https://github.com/settings/organizations](https://github.com/settings/organizations?ref_product=github&ref_type=engagement&ref_style=text).
{% data reusables.organizations.security-overview %}
1. In the "Metrics" section of the sidebar, click {% octicon "code-square" aria-hidden="true" aria-label="code-square" %} **Code quality**.

> [!NOTE] The dashboard only displays data for repositories where the viewer can see code quality findings.

## Interpreting the score distribution chart

The score distribution chart provides a visual overview of the code health of your organization. Each bubble represents a collection of repositories with the same maintainability and reliability scores.
* The **position** of each bubble demonstrates the overall health of those repositories. Higher bubbles represent higher maintainability scores, while bubbles further to the right represent higher reliability scores.
* The **color and border pattern** of a bubble indicate the severity of the lower score for those repositories. For example, a bubble with a "Needs improvement" score in either category will always be red with a dashed border.
* The **size** of each bubble represents the number of repositories with that particular score combination.

To view the maintainability score, reliability score, and number of repositories represented by a particular bubble, hover over the bubble.

## Exploring the repository table

Below the bubble chart, there is a table that lists all repositories in your organization. Here, you can view code quality findings, along with more detailed information about those findings.

You can sort the repository table in ascending or descending order for any column by clicking the column header.

## Investigating low-scoring repositories

1. To filter the dashboard data for the lowest-performing repositories, on the score distribution chart, click the bubble with the lowest combined scores.
1. Scroll down to the repository table. By default, the table is sorted from most to least recent repository scan, helping you prioritize current quality issues.
1. Optionally, to prioritize repositories with the highest number of {% data variables.product.prodname_codeql %} findings, click **Standard Findings** twice.
1. To view the repository-level dashboard for a specific repository, click the repository's name.

## Next steps

To understand the code health information available on the repository-level dashboard, see [AUTOTITLE](/code-security/how-tos/maintain-quality-code/interpret-results).
