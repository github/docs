---
title: Enabling secret scanning alerts for your user-owned repositories
shortTitle: Secret scanning alerts for user-owned repositories
intro: 'TODO'
versions:
  feature: secret-scanning-enable-by-default-for-public-repos
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Troubleshooting
redirect_from:
  - /TODO
---

## About {% data variables.secret-scanning.user_alerts %} for all your {% ifversion ghec %}user-owned {% endif %}public repositories

You can enable {% data variables.product.prodname_secret_scanning %} for all of your existing {% ifversion ghec %}user-owned {% endif %}public repositories through your personal account settings.

>! NOTE
> As of March 11, 2024, {% data variables.product.prodname_secret_scanning %} and push protection will be enabled by default for all new {% ifversion ghec %}user-owned {% endif %}public repositories that you create. You can still choose to disable these features for an individual repository in the repository's "Code security and analysis" settings page. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-public-repositories)".

## Enabling {% data variables.secret-scanning.user_alerts %} for all your {% ifversion ghec %}user-owned {% endif %}public repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_secret_scanning_caps %}", click **Disable all** or **Enable all**.
{% data reusables.secret-scanning.push-protection-optional-enable %}
