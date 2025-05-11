---
title: Governing how people use repositories in your organization
intro: "Create a repository policy to control who can do things like create and delete repositories."
permissions: Organization owners
versions:
  feature: repo-policy-rules
type: how_to
topics:
  - Repositories
shortTitle: Govern repository usage
---

{% data reusables.enterprise.repo-policy-rules-preview %}

{% data reusables.enterprise.repo-policy-rules-intro %}

>[!TIP] If you're an **enterprise owner**, you can create a repository policy that applies to multiple organizations. See [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/governing-how-people-use-repositories-in-your-enterprise).

## Examples

{% data reusables.enterprise.repo-policy-rules-examples %}

## How will I target repositories?

{% data reusables.enterprise.repo-policy-rules-with-custom-properties %}

As an alternative to custom properties, you can choose from a list of repositories or use `fnmatch` syntax to target repositories with certain naming patterns.

## Interaction with other policies

{% data reusables.enterprise.repo-policy-rules-with-existing-policies %}

## Creating a repository policy

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. On the left side of the page, in the sidebar, click **{% octicon "law" aria-hidden="true" %} Policies**.
1. Under "Policies", click **Repository**.
1. Click **New policy**.
1. Configure your new policy, then click **Create**. For help, consult the following subsections.

### Policy name

Use something descriptive to communicate the purpose of the policy. For example: `Prevent public repos on production`.

### Enforcement status

{% data reusables.enterprise.repo-policy-rules-enforcement %}

### Allow list

{% data reusables.enterprise.repo-policy-rules-allow-list %}

### Targets

Choose which repositories in the organization the policy applies to. You can select all repositories, choose a selection of existing repositories, or create a dynamic rule by name or custom property for current and future repositories.

If you set a dynamic list by name, you'll add one or more naming patterns using `fnmatch` syntax.
* For example, the string `*open-source` would match any repository with a name that ends with `open-source`. For syntax details, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#using-fnmatch-syntax).
* Optionally, you can prevent anyone outside the allow list from renaming the selected repositories. Alternatively, you can control the format of names in the "Policies" section.

### Policies

{% data reusables.enterprise.repo-policy-rules-policies-section %}
