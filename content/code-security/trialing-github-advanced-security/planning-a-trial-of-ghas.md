---
title: 'Planning a trial of {% data variables.product.prodname_GHAS %}'
shortTitle: 'Plan GHAS trial'
allowTitleToDifferFromFilename: true
intro: 'Make the most of your trial so you can decide whether {% data variables.product.prodname_AS %} products meet your business needs.'
type: overview
topics:
  - Code Security
  - Secret Protection
versions:
  fpt: '*'
  ghec: '*'
  ghes: '> 3.15'
---

## About trialing {% data variables.product.prodname_GHAS %}

You can trial {% data variables.product.prodname_GHAS %} independently, or working with an expert from {% data variables.product.github %} or a partner organization. The primary audience for these articles is people who will plan and run their trial independently, typically small and medium-sized organizations.

* Existing {% data variables.product.prodname_ghe_cloud %} users can set up a trial if you pay for {% data variables.product.prodname_ghe_cloud %} by credit card or PayPal, or if you are already taking part in a free trial of {% data variables.product.prodname_ghe_cloud %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/setting-up-a-trial-of-github-advanced-security#setting-up-your-trial-of-github-advanced-security).

   {% data reusables.advanced-security.ghas-trial-invoiced %}

* Users on other {% data variables.product.github %} plans can trial {% data variables.product.prodname_GHAS %} as part of a trial of {% data variables.product.prodname_ghe_cloud %}, see [AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud).

> [!NOTE] Although {% data variables.product.prodname_GHAS %} is free of charge during trials, you will be charged for any actions minutes that you use. That is, actions minutes used by the {% data variables.product.prodname_code_scanning %} default setup or by any other workflows you run.

## Define your company goals

Before you start a trial, you should define the purpose of the trial and identify the key questions you need to answer. Maintaining a strong focus on these goals will enable you to plan a trial that maximizes discovery and ensures that you have the information needed to decide whether or not to upgrade.

If your company already uses {% data variables.product.github %}, consider what needs are currently unmet that {% data variables.product.prodname_cs_or_sp %} might address. You should also consider your current application security posture and longer term aims. For inspiration, see [Design Principles for Application security](https://wellarchitected.github.com/library/application-security/design-principles/) in the {% data variables.product.github %} well-architected documentation.

{% rowheaders %}

| Example need | Features to explore during the trial |
|--|--|
| Enforce use of security features | Enterprise-level security configurations and policies, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/about-security-configurations) and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/about-enterprise-policies) |
| Protect custom access tokens | Custom patterns for {% data variables.product.prodname_secret_scanning %}, delegated bypass for push protection, and validity checks, see [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-secret-scanning) |
| Define and enforce a development process | Dependency review, auto-triage rules, rulesets, and policies, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review), [AUTOTITLE](/code-security/dependabot/dependabot-auto-triage-rules/about-dependabot-auto-triage-rules), [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/about-rulesets), and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/about-enterprise-policies) |
| Reduce technical debt at scale | {% data variables.product.prodname_code_scanning_caps %} and security campaigns, see [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-code-scanning) |
| Monitor and track trends in security risks | Security overview, see [AUTOTITLE](/code-security/security-overview/viewing-security-insights) |

{% endrowheaders %}

If your company doesn't use {% data variables.product.github %} yet, you are likely to have additional questions including how the platform handles data residency, secure account management, and repository migration. For more information, see [AUTOTITLE](/enterprise-cloud@latest/get-started/onboarding/getting-started-with-github-enterprise-cloud).

## Identify the members of your trial team

{% data variables.product.prodname_GHAS %} enables you to integrate security measures throughout the software development life cycle, so it's important to ensure that you include representatives from all areas of your development cycle. Otherwise you risk making a decision without having all the data you need. A trial includes 50 licenses which provides scope for representation from a wide range of people.

You may also find it helpful to identify a champion for each company need that you want to investigate.

## Determine whether preliminary research is needed

If members of your trial team have not yet used the core features of {% data variables.product.prodname_GHAS %}, it may be helpful to add an experimentation phase in public repositories before you start a trial. Many of the primary features of {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %} can be used on public repositories. Having a good understanding of the core features will allow you to focus your trial period on private repositories, and exploring the additional features and control available with {% data variables.product.prodname_cs_and_sp %}.

For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning), [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning), and [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

{% ifversion secret-risk-assessment %}

Organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} can run a free report to scan the code in their organization for leaked secrets. This can help you understand the current exposure of the repositories in your organization to leaked secrets, as well as see how many existing secret leaks could have been prevented by {% data variables.product.prodname_secret_protection %}. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment).{% endif %}

## Agree the organizations and repositories to test

Generally it is best to use an existing organization for a trial. This ensures that you can trial the features in repositories you know well and that accurately represent your coding environment. Once you start the trial, you may want to create additional organizations with test code to expand your explorations.

Be aware that deliberately insecure applications, such as WebGoat, may contain coding patterns that appear to be insecure, but which {% data variables.product.prodname_code_scanning %} determines cannot be exploited. {% data variables.product.prodname_code_scanning_caps %} typically generates fewer results for artificially insecure codebases than other static application security scanners.

## Define the assessment criteria for the trial

For each company need or goal that you identify, determine what criteria you will measure to determine whether it is successfully met or not. For example, if one need is to enforce the use of security features, you might define a range of test cases for security configurations and policies to give you confidence that they enforce processes as you expect.

## Next steps

1. [AUTOTITLE](/code-security/trialing-github-advanced-security/trial-advanced-security) or [AUTOTITLE](/admin/overview/setting-up-a-trial-of-github-enterprise-cloud) with {% data variables.product.prodname_AS %}
1. [AUTOTITLE](/code-security/trialing-github-advanced-security/enable-security-features-trial)
1. [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-secret-scanning)
1. [AUTOTITLE](/code-security/trialing-github-advanced-security/explore-trial-code-scanning)
