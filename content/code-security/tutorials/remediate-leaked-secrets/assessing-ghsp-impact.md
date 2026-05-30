---
title: Assessing the impact of GitHub Secret Protection
intro: 'Measure how {% data variables.product.prodname_GH_secret_protection_always %} reduces secret exposure across your organization, so you can demonstrate value and identify areas to strengthen your security posture.'
allowTitleToDifferFromFilename: true
shortTitle: Assess GHSP impact
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: tutorials
category:
  - Protect your secrets
---

## Introduction

After enabling {% data variables.product.prodname_GH_secret_protection_always %} (GHSP) for your organization, you'll want to assess its impact and understand how it's protecting your organization. This tutorial walks you through accessing secret-related data and interpreting the results to measure GHSP performance.

 In this tutorial, you'll learn how to:
 * Access your organization's security overview to view {% data variables.product.prodname_secret_scanning %} data
 * Review the {% data variables.product.prodname_secret_risk_assessment %} (SRA) report
 * Compare and analyze the data to assess GHSP's impact

If you don't have a historic SRA report from before your GHSP rollout, you can still assess GHSP's effectiveness. Skip ahead to [Step 4: Analyze security overview data trends](#step-4-analyze-security-overview-data-trends).

## Prerequisites

* You need to have the organization owner or security manager role.
* {% data variables.product.prodname_secret_protection %} must be enabled for your organization.

## Step 1: Access the organization-level security overview

The security overview provides real-time data about {% data variables.secret-scanning.alerts %} across your organization.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. On the security overview page, click the **Risk** tab to view secret scanning data.
   The overview shows:
    * Total number of open {% data variables.secret-scanning.alerts %}
    * Alert trends over time
    * Breakdown by repository
    * Alert severity distribution

## Step 2: View your {% data variables.product.prodname_secret_risk_assessment %} report

If you previously ran a SRA report, you can access the report to establish a baseline.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. Review the key metrics from the assessment, including:
   * Number of exposed secrets detected
   * Types of secrets found
   * Repositories with the highest risk
   * Recommended remediation actions

> [!NOTE] The SRA report represents a point-in-time snapshot of your secret exposure before or during your GHSP implementation.

## Step 3: Compare SRA data with current security overview

The SRA report is a **point-in-time** snapshot taken before or during your GHSP rollout, while the security overview shows **real-time** data that updates as alerts are opened and resolved. To make a meaningful comparison, you need to ensure both datasets cover the same secret types.

### Filter to comparable pattern types

The SRA report only detects **provider patterns** and **generic patterns**. The security overview, however, may also include results from custom patterns you've configured since enabling GHSP. To ensure an accurate comparison, filter the security overview to the same pattern types the SRA covers.

#### Using the UI

In the security overview **Risk** tab, use the filter bar to narrow results to provider and generic patterns only, excluding any custom patterns.

#### Using the API

Alternatively, you can use the REST API to programmatically retrieve alerts filtered by secret type. For example, to list only default (provider) {% data variables.secret-scanning.alerts %} for a repository:

```shell copy
gh api \
  -H "Accept: application/vnd.github+json" \
  /orgs/ORG/secret-scanning/alerts --paginate
```

This returns alerts for default patterns only. To also include generic patterns in your results, pass the specific token names using the `secret_type` parameter.

For more information, see [AUTOTITLE](/rest/secret-scanning/secret-scanning).

### Build your comparison

1. Using the filtered data, create a comparison table with these key metrics:

   | Metric | SRA report (Baseline) | Current security overview (Filtered) | Change |
   |--------|----------------------|--------------------------------------|--------|
   | Total exposed secrets | [SRA number] | [Current number] | [Difference] |
   | Critical alerts | [SRA number] | [Current number] | [Difference] |
   | Affected repositories | [SRA number] | [Current number] | [Difference] |

1. Calculate the percentage change for each metric:
   * **Positive impact indicators:** Reduction in total exposed secrets, fewer critical alerts
   * **Areas for improvement:** New alerts appearing, specific repositories with increasing trends

1. Note any significant differences in:
   * Secret types being detected
   * Repository coverage
   * Alert resolution rates

## Step 4: Analyze security overview data trends

Even without an SRA report, you can assess GHSP effectiveness by analyzing trends in the security overview.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the security overview **Risk** tab, look at the trend graph showing {% data variables.secret-scanning.alerts %} over time.
1. Identify patterns:
   * **Declining trend:** Indicates successful remediation and prevention
   * **Plateau:** May suggest steady state or need for increased awareness
   * **Rising trend:** May indicate increased detection coverage or new secret introduction

1. Click on individual repositories to drill down into specific alert details.
1. Review the alert resolution rate:
   * Navigate to the **{% data variables.product.prodname_security_and_quality_tab %}** tab for your organization.
   * Under "Findings", Click **{% data variables.product.prodname_secret_scanning_caps %}**.
   * Check how many alerts have been closed versus the number of alerts that remain open.
   * Select the alert type you're interested in.
   * Assess average time to resolution.

## Step 5: Interpret the results and take action

Based on your analysis, determine the next steps.

### If you're seeing positive trends

* Document the improvement to demonstrate GHSP value
* Identify successful practices to replicate across other repositories
* Consider expanding GHSP coverage to additional repositories or organizations

### If you're seeing areas for improvement

* Review repositories with increasing alerts or slow resolution times
* Provide additional training to development teams
* Assess whether custom patterns need to be configured
* Check if push protection is enabled to prevent new secrets from being introduced

### Ongoing monitoring

* Schedule regular reviews (weekly or monthly) of the security overview
* Set up notifications for new {% data variables.secret-scanning.alerts %}
* Track metrics over time to demonstrate continuous improvement

## Further reading

* To understand {% data variables.product.prodname_secret_scanning %} metrics in detail, see [AUTOTITLE](/code-security/security-overview/viewing-security-insights).