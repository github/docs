---
title: Interpreting security findings on a repository
shortTitle: Interpret security data
intro: 'You can analyze security data on repositories in your organization to determine if you need to make changes to your security setup.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note %}

## About security findings on a repository

After you apply a {% data variables.product.prodname_security_configuration %} to a repository, the enabled security features will likely raise security findings on that repository. These findings may show up as feature-specific alerts, or as automatically generated pull requests designed to keep your repository secure. To best secure your organization, you should be able to understand and resolve these alerts and pull requests, then analyze the findings and make any necessary adjustments to your {% data variables.product.prodname_security_configuration %}.

{% ifversion ghec or ghes %}

## Finding repositories with security alerts using security overview

{% data reusables.security-overview.information-varies-GHAS %}
{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-security-risk-view %}
{% data reusables.code-scanning.using-security-overview-risk %}
{% data reusables.organizations.security-overview-feature-specific-page %}
{% endif %}

## Interpreting {% data variables.product.prodname_secret_scanning %} alerts

{% data reusables.security-configurations.secret-scanning-security-configs-summary %} {% ifversion fpt or ghec %}There are two types of {% data variables.product.prodname_secret_scanning %} alerts:

* {% data variables.secret-scanning.partner_alerts_caps %}, which are sent to the provider who issued the secret
* {% data variables.secret-scanning.user_alerts_caps %}, which appear on {% data variables.product.product_name %} and can be resolved

{% endif %}
You can view {% data variables.product.prodname_secret_scanning %} alerts for a repository by navigating to the main page of that repository, clicking the {% octicon "shield" aria-hidden="true" %} **Security** tab, then clicking {% octicon "key" aria-hidden="true" %} **{% data variables.product.prodname_secret_scanning_caps %}**.

For an introduction to {% data variables.product.prodname_secret_scanning %} alerts, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts)."

To learn how to interpret and resolve {% data variables.product.prodname_secret_scanning %} alerts, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

## Interpreting {% data variables.product.prodname_code_scanning %} alerts

{% data reusables.code-scanning.about-code-scanning %} These problems are raised as {% data variables.product.prodname_code_scanning %} alerts, which contain detailed information on the vulnerability or error detected.

You can view the {% data variables.product.prodname_code_scanning %} alerts for a repository by navigating to the main page of that repository, clicking the {% octicon "shield" aria-hidden="true" %} **Security** tab, then clicking {% octicon "codescan" aria-hidden="true" %} **{% data variables.product.prodname_code_scanning_caps %}**.

For an introduction to {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/about-code-scanning-alerts)."

To learn how to interpret and resolve {% data variables.product.prodname_code_scanning %} alerts, see "[AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/managing-code-scanning-alerts-for-your-repository)."

## Interpreting {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} inform you about vulnerabilities in the dependencies that you use in your repository. You can view {% data variables.product.prodname_dependabot_alerts %} for a repository by navigating to the main page of that repository, clicking the {% octicon "shield" aria-hidden="true" %} **Security** tab, then clicking {% octicon "dependabot" aria-hidden="true" %} **{% data variables.product.prodname_dependabot %}**.

For an introduction to {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

To learn how to interpret and resolve {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

{% note %}

**Note:** If you enabled {% data variables.product.prodname_dependabot_security_updates %} or {% data variables.product.prodname_dependabot_version_updates %}, {% data variables.product.prodname_dependabot %} can also automatically raise pull requests to update the dependencies used in your repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)" and "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."

{% endnote %}

## Next steps

If you are using the {% data variables.product.prodname_github_security_configuration %}, and your findings indicate the security enablement settings are not meeting your needs, you should create a {% data variables.product.prodname_custom_security_configuration %}. To get started, see "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."

If you are using a {% data variables.product.prodname_custom_security_configuration %}, and your findings indicate the security enablement settings are not meeting your needs, you can edit your existing configuration. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/editing-a-custom-security-configuration)."

Lastly, you can also edit your organization-level security settings with {% data variables.product.prodname_global_settings %}. To learn more, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization)."
