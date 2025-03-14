---
title: Governing how people use repositories in your enterprise
intro: "Create a repository policy to control who can do things like create and delete repositories."
permissions: Enterprise owners
versions:
  feature: repo-policy-rules
type: how_to
topics:
  - Enterprise
  - Repositories
shortTitle: Govern repository usage
---

{% data reusables.enterprise.repo-policy-rules-preview %}

{% data reusables.enterprise.repo-policy-rules-intro %}

>[!TIP] If you're an **organization owner**, you can create a repository policy for a specific organization. See [AUTOTITLE](/organizations/managing-organization-settings/governing-how-people-use-repositories-in-your-organization).

## Examples

{% data reusables.enterprise.repo-policy-rules-examples %}

## How will I target repositories?

First, you'll target organizations in your enterprise. You can select all organizations, choose from a list, or create a dynamic rule using `fnmatch` syntax. If you use {% data variables.product.prodname_emus %}, you can also choose to target all repositories owned by users in your enterprise.

Then, you'll target repositories in the selected organizations. {% data reusables.enterprise.repo-policy-rules-with-custom-properties %}

## Interaction with other policies

{% data reusables.enterprise.repo-policy-rules-with-existing-policies %}
* They're visible to organization owners, so there is more transparency around what is permitted.
* They allow you to target repositories owned by {% data variables.product.prodname_emus %}.

## Creating a repository policy

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under "Policies", click **Repository**.
1. Click **New policy**.
1. Configure your new policy, then click **Create**. For help, consult the following subsections.

### Policy name

Use something descriptive to communicate the purpose of the policy. Organization owners can view the policy, so good names help add clarity. For example: `Prevent public repos on production`.

### Enforcement status

{% data reusables.enterprise.repo-policy-rules-enforcement %}

### Allow list

{% data reusables.enterprise.repo-policy-rules-allow-list %}

### Targets

Choose which organizations and repositories the policy applies to.

#### Target organizations

Select all organizations, choose a selection of existing organizations, or set a dynamic list by name. If you use {% data variables.product.prodname_emus %}, you can also choose to target all repositories owned by users in your enterprise.

If you set a dynamic list, you'll add one or more naming patterns using `fnmatch` syntax. For example, the string `*open-source` would match any organization with a name that ends with `open-source`. For syntax details, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).

#### Target repositories

Choose which repositories (current or future) to target in the selected organizations. You can select all repositories or set a dynamic list by custom property.

### Policies

{% data reusables.enterprise.repo-policy-rules-policies-section %}

## Further reading

To set additional policies for repository management, see [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise).
