---
title: Applying the GitHub-recommended security configuration in your organization
shortTitle: Apply recommended configuration
intro: 'Secure your code with the security enablement settings created, managed, and recommended by {% data variables.product.company_short %}.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note-opt-out %}

## About the {% data variables.product.prodname_github_security_configuration %}

The {% data variables.product.prodname_github_security_configuration %} is a collection of enablement settings for {% data variables.product.company_short %}'s security features that is created and maintained by subject matter experts at {% data variables.product.company_short %}. The {% data variables.product.prodname_github_security_configuration %} is designed to successfully reduce the security risks for low- and high-impact repositories. We recommend you apply this configuration to all the repositories in your organization.

## Applying the {% data variables.product.prodname_github_security_configuration %} to all repositories in your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "{% data variables.product.company_short %} recommended" row of the configurations table for your organization, select the **Apply to** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **All repositories** or **All repositories without configurations**.
{% data reusables.security-configurations.apply-configuration-by-default %}

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}

{% data reusables.security-configurations.apply-configuration %}

## Applying the {% data variables.product.prodname_github_security_configuration %} to specific repositories in your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Optionally, in the "Apply configurations" section, filter the view to find the repositories you would like to apply the {% data variables.product.prodname_github_security_configuration %} to. To learn how to filter the repository table, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table)."
1. In the repository table, select repositories with one of three methods:
     * Select each individual repository you would like to apply the {% data variables.product.prodname_security_configuration %} to.
     * To select all repositories on the current page of the repository table, select **NUMBER repositories**.
     * After selecting **NUMBER repositories**, to select all repositories in your organization that match your filter criteria, click **Select all**.
1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **{% data variables.product.company_short %} recommended**.
{% data reusables.security-configurations.apply-configuration-by-default %}

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}

{% data reusables.security-configurations.apply-configuration %}

{% ifversion enforce-security-configurations %}

## Enforcing the {% data variables.product.prodname_github_security_configuration %}

{% ifversion enforce-security-configurations-beta %}

>[!NOTE]
> This feature is in beta, and is subject to change.

{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Code security configurations" section, select "{% data variables.product.company_short %} recommended".
1. In the "Policy" section, next to "Enforce configuration", select **Enforce** from the dropdown menu.

>[!NOTE]
{% data reusables.code-scanning.custom-security-configuration-enforcement-edge-cases %}

{% endif %}

## Next steps

After you apply the {% data variables.product.prodname_github_security_configuration %}, you can customize your organization-level security settings with {% data variables.product.prodname_global_settings %}. See "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization)."

{% data reusables.security-configurations.troubleshooting-next-step %}
