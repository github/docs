---
title: 'Exploring your enterprise trial of {% data variables.product.prodname_GH_secret_protection_always %}'
shortTitle: 'Trial Secret Protection'
allowTitleToDifferFromFilename: true
intro: 'Introduction to the features available with {% data variables.product.prodname_GH_secret_protection_always %} in {% data variables.product.prodname_ghe_cloud %} so you can assess their fit to your business needs.'
type: quick_start
topics:
  - Secret Protection
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.15'
---

This guide assumes that you have planned and started a trial of {% data variables.product.prodname_GHAS %} for an existing or trial {% data variables.product.github %} enterprise account. See [AUTOTITLE](/code-security/trialing-github-advanced-security/planning-a-trial-of-ghas).

## Introduction

{% data variables.product.prodname_GH_secret_protection_always %} features work the same way in private and internal repositories as they do in all public repositories. This article focuses on the additional functionality that you can use to protect your business from security leaks when you use {% data variables.product.prodname_GH_secret_protection_always %}, that is:

* Identify additional access tokens you use by defining custom patterns.
* Detect potential passwords using AI.
* Control and audit the bypass process for push protection and {% data variables.secret-scanning.alerts %}.
* Enable validity checks for exposed tokens.

To find out how to run a free secret risk assessment, see [Generating an initial secret risk assessment](/enterprise-cloud@latest/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization#generating-an-initial-secret-risk-assessment){% ifversion fpt or ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

If you have already scanned the code in your organization for leaked secrets using the free secret risk assessment, you will also want to explore that data more completely using the additional views on the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security** tab for the organization.

For full details of the features available, see [{% data variables.product.prodname_GH_secret_protection_always %}](/get-started/learning-about-github/about-github-advanced-security#github-secret-protection).

### Security configuration for {% data variables.product.prodname_secret_protection %}

Most enterprises choose to enable {% data variables.product.prodname_secret_protection %} with push protection across all their repositories by applying security configurations with these features enabled. This ensures that repositories are checked for access tokens that have already been added to {% data variables.product.github %}, in addition to flagging when users are about to leak tokens in {% data variables.product.github %}. For information about creating an enterprise-level security configuration and applying it to your test repositories, see [AUTOTITLE](/code-security/trialing-github-advanced-security/enable-security-features-trial).

### Provide access to view the results of {% data variables.product.prodname_secret_scanning %}

By default, only the repository administrator and the organization owner can view all {% data variables.product.prodname_secret_scanning %} alerts in their area. You should assign the predefined security manager role to all organization teams and users who you want to access the alerts found during the trial. You may also want to give the enterprise account owner this role for each organization in the trial. For more information, see [AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

You can see a summary of any results found in the organizations in your trial enterprise in the **{% octicon "shield" aria-hidden="true" aria-label="shield" %} Security** tab for the enterprise. There are also separate views for each type of security alert. See [AUTOTITLE](/code-security/security-overview/viewing-security-insights).

## Identify additional access tokens

You can create custom patterns to identify additional access tokens at the repository, organization, and enterprise level. In most cases, you should define custom patterns at the enterprise level because this will ensure that the patterns are used across the whole enterprise. It will also make them easy to maintain if you need to update a pattern when the format for a token changes.

Once you have created and published custom patterns, both {% data variables.product.prodname_secret_scanning %} and push protection automatically include the new patterns in all scans. For detailed information about creating custom patterns, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

## Use AI to detect potential passwords

At the enterprise level you have full control over whether or not to allow the use of AI to detect secrets that cannot be identified using regular expressions (also known as generic secrets or as non-provider patterns).

* Turn the feature on or off for the whole enterprise.
* Set a policy to block control of the feature at the organization and repository level.
* Set a policy to allow organization owners or repository administrators to control the feature.

Similar to custom patterns, if you enable AI detection both {% data variables.product.prodname_secret_scanning %} and push protection automatically start using AI detection in all scans. For information about enterprise-level control, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/configuring-additional-secret-scanning-settings-for-your-enterprise) and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise).

## Control and audit the bypass process

When push protection blocks a push to {% data variables.product.github %} in a public repository without {% data variables.product.prodname_GH_secret_protection_always %}, the user has two simple options: bypass the control, or remove the highlighted content from the branch and its history. If they chose to bypass push protection, a {% data variables.product.prodname_secret_scanning %} alert is automatically created. This allows developers to rapidly unblock their work while still providing an audit trail for the content identified by {% data variables.product.prodname_secret_scanning %}.

Larger teams usually want to maintain tighter control over the potential publication of access tokens and other secrets. With {% data variables.product.prodname_GH_secret_protection_always %}, you can define a reviewers group to approve requests to bypass push protection, reducing the risk of a developer accidentally leaking a token that is still active. You can also define a reviewers group to approve requests to dismiss {% data variables.secret-scanning.alerts %}.

Reviewers are defined in an organization-level security configuration or in the settings for a repository. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection).

## Enable validity checks

You can enable validity checks to check whether detected tokens are still active at the repository, organization, and enterprise level. Generally, it is worth enabling this feature across the whole enterprise using enterprise or organization-level security configurations. For more information, see [AUTOTITLE](/enterprise-cloud@latest/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository){% ifversion fpt or ghes %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}.

## Next steps

When you have enabled the additional controls for {% data variables.product.prodname_secret_protection %}, you're ready to test them against your business needs, and explore further. You may also be ready to look into exploring the options available with {% data variables.product.prodname_GH_code_security %}.

* [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-code-scanning)
* [Enforce {% data variables.product.prodname_GHAS %} at Scale](https://wellarchitected.github.com/library/application-security/recommendations/enforce-ghas-at-scale/)
