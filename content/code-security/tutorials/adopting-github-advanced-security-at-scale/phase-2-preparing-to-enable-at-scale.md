---
title: 'Phase 2: Preparing to enable at scale'
intro: In this phase you will prepare developers and collect data about your repositories to ensure your teams are ready and you have everything you need for pilot programs and rolling out {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}.
versions:
  ghes: '*'
  ghec: '*'
topics:
  - Code Security
  - Secret Protection
shortTitle: 2. Preparation
redirect_from:
  - /code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale
contentType: tutorials
---

> [!TIP]
> This article is part of a series on adopting {% data variables.product.prodname_GHAS %} at scale. For the previous article in this series, see [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals).

## Preparing to enable {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %} For more information, see [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning).

Rolling {% data variables.product.prodname_code_scanning %} out across hundreds of repositories can be difficult, especially when done inefficiently. Following these steps will ensure your rollout is both efficient and successful.

{% ifversion ghec %}
{% data variables.product.prodname_code_scanning_caps %} is also available for all public repositories on {% data variables.product.prodname_dotcom_the_website %} without a license for prodname_GH_code_security.{% endif %}

### Preparing teams for {% data variables.product.prodname_code_scanning %}

First, prepare your teams to use {% data variables.product.prodname_code_scanning %}. The more teams that use {% data variables.product.prodname_code_scanning %}, the more data you'll have to drive remediation plans and monitor progress on your rollout.

For an introduction to {% data variables.product.prodname_code_scanning %}, see:
* [AUTOTITLE](/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)
* [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository)

Your core focus should be preparing as many teams to use {% data variables.product.prodname_code_scanning %} as possible. You can also encourage teams to remediate appropriately, but we recommend prioritizing enablement and use of {% data variables.product.prodname_code_scanning %} over fixing issues during this phase.

{% ifversion ghes %}

### Enabling {% data variables.product.prodname_code_scanning %} for your appliance

Before you can proceed with pilot programs and rolling out {% data variables.product.prodname_code_scanning %} across your enterprise, you must first enable {% data variables.product.prodname_code_scanning %} for your appliance. For more information, see [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance).

{% endif %}

## Preparing to enable {% data variables.product.prodname_secret_scanning %}

> [!NOTE]
> When a secret is detected in a repository that has enabled {% data variables.product.prodname_secret_scanning %}, {% data variables.product.github %} alerts all users with access to security alerts for the repository. {% ifversion ghec %}
>
> Secrets found in public repositories using {% data variables.secret-scanning.partner_alerts %} are reported directly to the partner, without creating an alert on {% data variables.product.github %}. For details about the supported partner patterns, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).{% endif %}

If a project communicates with an external service, it might use a token or private key for authentication. If you check a secret into a repository, anyone who has read access to the repository can use the secret to access the external service with your privileges. {% data variables.product.prodname_secret_scanning_caps %} will scan your entire Git history on all branches present in your {% data variables.product.github %} repositories for secrets and alert you or block the push containing the secret. For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning).

{% ifversion ghec %}{% data variables.secret-scanning.partner_alerts_caps %} runs automatically on public repositories and public npm packages to notify service providers about leaked secrets on {% data variables.product.github %}.

{% data variables.secret-scanning.user_alerts_caps %} are available for free on all public repositories.{% endif %}

### Considerations when enabling {% data variables.product.prodname_secret_scanning %}

Enabling {% data variables.product.prodname_secret_scanning %} at the organizational level can be easy, but clicking **Enable All** at the organization level and selecting the option **Automatically enable {% data variables.product.prodname_secret_scanning %} for every new repository** has some downstream effects that you should be aware of:

#### License consumption

Enabling {% data variables.product.prodname_secret_scanning %} for all repositories will maximize your use of {% data variables.product.prodname_GH_secret_protection %} licenses. This is fine if you have enough licenses for the current committers to all those repositories. If the number of active developers is likely to increase in the coming months, you may exceed your license limit and then be unable to use {% data variables.product.prodname_secret_scanning %} on newly created repositories.

#### Initial high volume of detected secrets

If you are enabling {% data variables.product.prodname_secret_scanning %} on a large organization, be prepared to see a high number of secrets found. Sometimes this comes as a shock to organizations and the alarm is raised. If you would like to turn on {% data variables.product.prodname_secret_scanning %} across all repositories at once, plan for how you will respond to multiple alerts across the organization.

{% data variables.product.prodname_secret_scanning_caps %} can be enabled for individual repositories. For more information, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository). {% data variables.product.prodname_secret_scanning_caps %} can also be enabled for all repositories in your organization, as described above. For more information on enabling for all repositories, see [AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

### Custom patterns for {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} detects a large number of default patterns but can also be configured to detect custom patterns, such as secret formats unique to your infrastructure or used by integrators that {% data variables.product.github %}'s {% data variables.product.prodname_secret_scanning %} does not currently detect. For more information about supported secrets for partner patterns, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).

As you audit your repositories and speak to security and developer teams, build a list of the secret types that you will later use to configure custom patterns for {% data variables.product.prodname_secret_scanning %}. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

### Push protection for {% data variables.product.prodname_secret_scanning %}

Push protection for organizations and repositories instructs {% data variables.product.prodname_secret_scanning %} to check pushes for supported secrets _before_ secrets are committed to the codebase. For information on which secrets are supported, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).

If a secret is detected in a push, that push is blocked. {% data variables.product.prodname_secret_scanning_caps %} lists any secrets it detects so the author can review the secrets and remove them or, if needed, allow those secrets to be pushed. {% data reusables.secret-scanning.push-protection-custom-pattern %}

Developers have the option to bypass push protection by reporting that a secret is a false positive, that it is used in tests, or that it will be fixed later.

{% data reusables.secret-scanning.push-protection-bypass %}

Before enabling push protection, consider whether you need to create guidance for developer teams on the acceptable conditions for bypassing push protection. You can configure a link to this resource in the message that's displayed when a developer attempts to push a blocked secret.

Next, familiarize yourself with the different options for managing and monitoring alerts that are the result of a contributor bypassing push protection.

For more information, see [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

> [!TIP]
> For the next article in this series, see [AUTOTITLE](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs).
