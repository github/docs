---
title: Defining policies for repositories in your enterprise
shortTitle: Create repository policies
intro: 'Enforce repository policies across your enterprise using custom properties and targeting rules.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Repositories
---

{% data reusables.enterprise.repo-policy-rules-preview %}

{% data reusables.enterprise.repo-policy-rules-intro %}

## Examples

{% data reusables.enterprise.repo-policy-rules-examples %}

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

### Delegating bypass of policies

{% data reusables.enterprise.repo-policy-rules-delegated-bypass %}

## Next steps

Create rulesets to consistently govern important branches in your enterprise's repositories. See [AUTOTITLE](/enterprise-onboarding/govern-people-and-repositories/protect-branches).
