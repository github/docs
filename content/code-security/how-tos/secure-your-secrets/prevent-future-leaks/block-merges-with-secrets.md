---
title: Blocking pull request merges that contain secrets
shortTitle: Block merges with secrets
intro: Prevent exposed secrets from reaching protected branches by requiring contributors to resolve {% data variables.product.prodname_secret_scanning %} alerts before merging.
permissions: '{% data reusables.permissions.security-org-enable %}{% ifversion enterprise-code-rulesets %}, and enterprise owners{% endif %}'
product: '{% data reusables.gated-features.secret-protection %}'
versions:
  feature: secret-scanning-merge-protection
contentType: how-tos
category:
  - Protect your secrets
redirect_from:
  - /code-security/how-tos/secure-your-secrets/prevent-future-leaks/block-pull-request-merges
---

> [!NOTE]
> {% data reusables.secret-scanning.merge-protection-public-preview %}

The **Require secret scanning alerts are resolved** rule is available for rulesets that target branches in repositories. You can use the rule to block a pull request from merging when either of these conditions applies:

* A {% data variables.product.prodname_secret_scanning %} scan has not completed for the head commit of the pull request.
* A commit in the pull request introduced an open {% data variables.product.prodname_secret_scanning %} alert that matches a secret type selected in the ruleset.

The rule supports provider, custom, and generic patterns. It does not support AI-detected secrets.

## Prerequisites

The repositories that you want to protect must have:

* Either {% data variables.product.prodname_GH_secret_protection %} or {% data variables.product.prodname_GHAS %} enabled
* {% data variables.product.prodname_secret_scanning_caps %} enabled. See [AUTOTITLE](/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enable-secret-scanning).

## Creating a merge protection ruleset for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repo-rulesets-settings %}
1. Click **New ruleset**.
1. Click **New branch ruleset**.
{% data reusables.repositories.rulesets-general-step %}
{% data reusables.repositories.rulesets-target-branches %}
{% data reusables.repositories.rulesets-require-secret-scanning-alerts-resolved %}
{% data reusables.repositories.rulesets-create-and-insights-step %}

For information about configuring bypass permissions and other ruleset settings, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository).

## Creating a merge protection ruleset for repositories in an organization{% ifversion enterprise-code-rulesets %} or enterprise{% endif %}

{% ifversion enterprise-code-rulesets %}You can create this ruleset for repositories in your organization, or create it for an enterprise to apply merge protection consistently across repositories in multiple organizations.

### Accessing organization ruleset settings{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.access-ruleset-settings %}

{% ifversion enterprise-code-rulesets %}

### Accessing enterprise ruleset settings

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
1. Under "Policies", click **Code**.

### Configuring the ruleset{% endif %}

1. Click **New ruleset**.
1. Click **New branch ruleset**.
{% data reusables.repositories.rulesets-general-step %}
{% ifversion enterprise-code-rulesets %}
1. If you are creating an enterprise-level ruleset, under "Target organizations", choose the organizations that the ruleset will apply to.
{% endif %}
1. Under "Target repositories", choose the repositories that the ruleset will apply to.
{% data reusables.repositories.rulesets-target-branches %}
{% data reusables.repositories.rulesets-require-secret-scanning-alerts-resolved %}
{% data reusables.repositories.rulesets-create-and-insights-step %}

For information about configuring bypass permissions and other ruleset settings, see [AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization){% ifversion enterprise-code-rulesets %} and [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance){% endif %}.

## Unblocking a pull request

When this rule blocks a pull request because of open alerts, you must resolve each alert that matches the secret types selected in the ruleset. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/resolving-alerts).
