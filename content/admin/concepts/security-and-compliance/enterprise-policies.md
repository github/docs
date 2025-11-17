---
title: Enterprise policies
intro: 'With enterprise policies, you can manage the policies for all the organizations owned by your enterprise.'
versions:
  ghec: '*'
  ghes: '*'
shortTitle: Policies
contentType: concepts
topics:
  - Enterprise
  - Policies
redirect_from:
  - /admin/policies/enforcing-policies-for-your-enterprise/about-enterprise-policies
  - /admin/enforcing-policies/enforcing-policies-for-your-enterprise/about-enterprise-policies
---

## What are enterprise policies and why are they important?

{% data reusables.enterprise-onboarding.about-policies %}

## What are the steps to enforce enterprise policies?

By default, no enterprise policies are enforced. To identify policies that should be enforced to meet the unique requirements of your business, we recommend reviewing all the available policies in your enterprise account, starting with repository management policies.

While you're configuring enterprise policies, to help you understand the impact of changing each policy, you can view the current configurations for the organizations owned by your enterprise.

{% data reusables.enterprise.repo-policy-rules-alternative %}

For a full list of repository management policies, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).

{% ifversion ghes %}
Another way to enforce standards within your enterprise is to use pre-receive hooks, which are scripts that run on {% data variables.location.product_location %} to implement quality checks. For more information, see [AUTOTITLE](/admin/policies/enforcing-policy-with-pre-receive-hooks).
{% endif %}

## Further reading

* [AUTOTITLE](/admin/overview/about-enterprise-accounts)
