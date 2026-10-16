---
title: Managing access to agentic autofix for code scanning
shortTitle: Manage {% data variables.copilot.agentic_autofix %}
intro: Control the rollout of {% data variables.copilot.agentic_autofix %} across your enterprise, organizations, and repositories.
product: '{% data reusables.rai.code-scanning.gated-feature-agentic-autofix %}'
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
category:
  - Find and fix code vulnerabilities
---

## About access and rollout

Access controls for {% data variables.copilot.agentic_autofix %} cascade from the enterprise to the organization and repository:

* For an enterprise-owned organization, an enterprise owner or security manager must allow organizations to configure {% data variables.copilot.agentic_autofix %}. Allowing the feature doesn't enable it for organizations or repositories.
* An organization owner or security manager can enable {% data variables.copilot.agentic_autofix %} for the organization. The organization setting enables it for eligible repositories by default.
* Repository administrators can opt individual repositories out or re-enable them, subject to the enterprise and organization settings.
* For an eligible public repository owned by a personal account, a repository administrator can enable or disable {% data variables.copilot.agentic_autofix %} directly.

{% data variables.copilot.agentic_autofix_caps %} is not available for user-owned repositories in an enterprise that uses {% data variables.product.prodname_emus %}.

If your organization used {% data variables.copilot.agentic_autofix %} during the public preview, you must enable it again.

Before you enable the feature, review how the use of {% data variables.product.prodname_ai_credits_short %} and {% data variables.product.prodname_actions %} minutes affects your costs.

For a standalone organization, skip the enterprise procedure. For an eligible public repository owned by a personal account, skip the enterprise and organization procedures.

## Allowing {% data variables.copilot.agentic_autofix %} for an enterprise

Enterprise owners and security managers can allow organizations in an enterprise to configure {% data variables.copilot.agentic_autofix %}. This policy doesn't enable the feature for any organization or repository.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. For the **{% data variables.copilot.agentic_autofix_caps %}** policy, select **All organizations: Allowed**.

## Enabling {% data variables.copilot.agentic_autofix %} for an organization

Organization owners and security managers can enable {% data variables.copilot.agentic_autofix %} for all eligible repositories in their organization. For an enterprise-owned organization, the enterprise policy must also allow it.

Before you enable the organization setting, coordinate with repository administrators about any repositories that should opt out.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}," to enable the feature, set **{% data variables.copilot.agentic_autofix_caps %}** to **On**.

## Managing {% data variables.copilot.agentic_autofix %} for a repository

For an organization-owned repository, {% data variables.copilot.agentic_autofix %} is enabled by default when the organization enables it. Repository administrators can disable or re-enable it for an individual repository. For an eligible public repository owned by a personal account, a repository administrator can enable or disable it directly.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.UI_code_security_scanning %}" section, enable or disable **{% data variables.copilot.agentic_autofix_caps %}** by setting the toggle to **On** or **Off**.

After you enable {% data variables.copilot.agentic_autofix %}, users with write access to the repository can assign code scanning alerts to {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/resolve-alerts#fixing-alerts-with-copilot).

## Disabling {% data variables.copilot.agentic_autofix %}

You can disable {% data variables.copilot.agentic_autofix %} at the enterprise, organization, or repository level. If you disable it at the enterprise or organization level, repository administrators cannot re-enable it.

### Disallowing {% data variables.copilot.agentic_autofix %} for an enterprise

Enterprise owners and security managers can prevent all organizations and repositories in their enterprise from using {% data variables.copilot.agentic_autofix %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.code-security-and-analysis-policies %}
1. For the **{% data variables.copilot.agentic_autofix_caps %}** policy, select **All organizations: Not allowed**.

### Disabling {% data variables.copilot.agentic_autofix %} for an organization

Organization owners and security managers can disable {% data variables.copilot.agentic_autofix %} for all repositories in their organization.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.security-configurations.display-global-settings %}
1. Under "{% data variables.product.prodname_code_scanning_caps %}," set **{% data variables.copilot.agentic_autofix_caps %}** to **Off**.

### Disabling {% data variables.copilot.agentic_autofix %} for a repository

Repository administrators can opt an individual repository out of {% data variables.copilot.agentic_autofix %}. For an eligible public repository owned by a personal account, this disables the feature directly.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. In the "{% data variables.product.UI_code_security_scanning %}" section, set **{% data variables.copilot.agentic_autofix_caps %}** to **Off**.
