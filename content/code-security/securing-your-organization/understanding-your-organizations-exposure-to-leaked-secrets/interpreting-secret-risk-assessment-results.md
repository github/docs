---
title: 'Interpreting secret risk assessment results'
shortTitle: 'Interpret results'
intro: 'Use the results from your {% data variables.product.prodname_secret_risk_assessment %} report to improve your organization''s security.'
allowTitleToDifferFromFilename: true
type: how_to
versions:
  feature: secret-risk-assessment
topics:
  - Code Security
  - Secret scanning
  - Secret Protection
  - Organizations
  - Security
---

The {% data variables.product.prodname_secret_risk_assessment %} dashboard displays point-in-time insights into the secrets detected in your organization. {% data reusables.secret-risk-assessment.link-conceptual-information %}

{% data reusables.secret-risk-assessment.public-preview-note %}

## Prerequisites

You need to generate a {% data variables.product.prodname_secret_risk_assessment %} report and wait for the scan to complete before being able to view and export the results. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization#generating-an-initial-secret-risk-assessment) and [Exporting the {% data variables.product.prodname_secret_risk_assessment %} to CSV](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization#exporting-the-secret-risk-assessment-to-csv).

## Prioritizing high-risk leaks for remediation

To understand your secrets' footprint and exposure to secrets leaks, review the **Total secrets**,**Public leaks** and **Secret locations** metrics.

Next, identify the areas in your organization where leaked secrets pose the highest threat to security.

* **Leaked secrets that are still active** usually present the greatest risk to security. Prioritize any active secrets for remediation ahead of inactive secrets. For more information about checking the validity of a detected credential, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository).
* Similarly, **secrets leaked in public repositories** are usually considered a higher risk and priority, than those secrets leaked in private {% ifversion ghec or ghes %}or internal {% endif %}repositories.
* The **Repositories with leaks** metric can indicate how frequent, or the extent of, secret leaks across your organization. A large proportion of repositories with secret leaks may suggest that developer education and increased security awareness around secrets is important for your organization.

## Identifying areas of exposure

Review the **Preventable leaks** and **Secret categories** metrics to understand your current secret detection coverage, in addition to learning how {% data variables.product.github %} can help prevent future secret leaks.

* Secret leaks that could have been prevented using {% data variables.product.prodname_GH_secret_protection %} features such as {% data variables.product.prodname_secret_scanning %} and push protection are shown by the **Preventable leaks** metric.
* Using the **Secret categories** metric and the **Token type** table, search for patterns in the type of secrets leaked across your organization.
  * Common areas and repeated occurrences of leaked secrets may suggest particular CI/CD workflows or development processes in your organization that are contributing to the results.
  * You may also be able to identify specific teams, repositories, or networks that are more prone to secret leaks, and therefore require additional security measures or management to be put in place.

## Adopt {% data variables.product.prodname_GH_secret_protection %} to prevent leaks

We recommend purchasing {% data variables.product.prodname_GH_secret_protection %} products to improve your organization's exposure to secret leaks and optimize your secret detection rates. {% data variables.product.prodname_GH_secret_protection %} is a continuous monitoring and detection solution that is the most effective path for secure development. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/choosing-github-secret-protection).
