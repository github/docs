---
title: Enabling Dependabot for your enterprise
intro: 'You can allow users of {% data variables.product.product_location %} to find and fix vulnerabilities in code dependencies by enabling {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes > 3.2 %} and {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## About {% data variables.product.prodname_dependabot %} for {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} helps users of {% data variables.product.product_location %} find and fix vulnerabilities in their dependencies.{% ifversion ghes > 3.2 %} You can enable {% data variables.product.prodname_dependabot_alerts %} to notify users about vulnerable dependencies and {% data variables.product.prodname_dependabot_updates %} to fix the vulnerabilities and keep dependencies updated to the latest version.

### About {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

With {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifies insecure dependencies in repositories and creates alerts on {% data variables.product.product_location %}, using data from the {% data variables.product.prodname_advisory_database %} and the dependency graph service.

{% data reusables.repositories.tracks-vulnerabilities %}

After you enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. Only {% data variables.product.company_short %}-reviewed advisories are synchronized. {% data reusables.security-advisory.link-browsing-advisory-db %} 

You can also choose to manually sync vulnerability data at any time. For more information, see "[Viewing the vulnerability data for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)."

{% note %}

**Note:** When you enable {% data variables.product.prodname_dependabot_alerts %}, no code or information about code from {% data variables.product.product_location %} is uploaded to {% data variables.product.prodname_dotcom_the_website %}. 

{% endnote %}

When {% data variables.product.product_location %} receives information about a vulnerability, it identifies repositories in  {% data variables.product.product_location %} that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. You can choose whether or not to notify users automatically about new {% data variables.product.prodname_dependabot_alerts %}. 

For repositories with {% data variables.product.prodname_dependabot_alerts %} enabled, scanning is triggered on any push to the default branch that contains a manifest file or lock file. Additionally, when a new vulnerability record is added to {% data variables.product.product_location %}, {% data variables.product.product_name %} scans all existing repositories on {% data variables.product.product_location %} and generates alerts for any repository that is vulnerable. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

{% ifversion ghes > 3.2 %}
### About {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

After you enable {% data variables.product.prodname_dependabot_alerts %}, you can choose to enable {% data variables.product.prodname_dependabot_updates %}. When {% data variables.product.prodname_dependabot_updates %} are enabled for {% data variables.product.product_location %}, users can configure repositories so that their dependencies are updated and kept secure automatically. 

{% note %} 

**Note:** {% data variables.product.prodname_dependabot_updates %} on {% data variables.product.product_name %} requires {% data variables.product.prodname_actions %} with self-hosted runners.

{% endnote %}

By default, {% data variables.product.prodname_actions %} runners used by {% data variables.product.prodname_dependabot %} need access to the internet, to download updated packages from upstream package managers. For {% data variables.product.prodname_dependabot_updates %} powered by {% data variables.product.prodname_github_connect %}, internet access provides your runners with a token that allows access to dependencies and advisories hosted on {% data variables.product.prodname_dotcom_the_website %}.

With {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} automatically creates pull requests to update dependencies in two ways.

- **{% data variables.product.prodname_dependabot_version_updates %}**: Users add a {% data variables.product.prodname_dependabot %} configuration file to the repository to enable {% data variables.product.prodname_dependabot %} to create pull requests when a new version of a tracked dependency is released. For more information, see "[About {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)."
- **{% data variables.product.prodname_dependabot_security_updates %}**: Users toggle a repository setting to enable {% data variables.product.prodname_dependabot %} to create pull requests when {% data variables.product.prodname_dotcom %} detects a vulnerability in one of the dependencies of the dependency graph for the repository. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" and "[About {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)."
{% endif %}

## Enabling {% data variables.product.prodname_dependabot_alerts %}

Before you can enable {% data variables.product.prodname_dependabot_alerts %}:
- You must enable {% data variables.product.prodname_github_connect %}. For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."{% ifversion ghes %}
- You must enable the dependency graph. For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
{%- ifversion dependabot-updates-github-connect %}
1. Under "{% data variables.product.prodname_dependabot %}", to the right of "Users can receive vulnerability alerts for open source code dependencies", select the dropdown menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**.

   ![Screenshot of the dropdown menu to enable scanning repositories for vulnerabilities](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Under "Repositories can be scanned for vulnerabilities", select the drop-down menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**.
   ![Drop-down menu to enable scanning repositories for vulnerabilities](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)
{%- endif %}
   {% tip %}

   **Tip**: We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive {% data variables.product.prodname_dependabot_alerts %} as usual.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Enabling {% data variables.product.prodname_dependabot_updates %}

After you enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise, you can enable {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %}
{% data reusables.dependabot.enabling-actions-for-ghes %} For more information, see "[Getting started with {% data variables.product.prodname_actions %} for GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)."

{% data variables.product.prodname_dependabot_updates %} are not supported on {% data variables.product.product_name %} if your enterprise uses clustering.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security", select **{% data variables.product.prodname_dependabot_security_updates %}**.

   ![Screenshot of the checkbox to enable or disable {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Click **Visit your instance**.
1. Configure dedicated self-hosted runners to create the pull requests that will update dependencies. This is required because the workflows use a specific runner label. For more information, see "[Managing self-hosted runners for {% data variables.product.prodname_dependabot_updates %} on your enterprise](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)."
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "{% data variables.product.prodname_dependabot %}", to the right of "Users can easily upgrade to non-vulnerable open source code dependencies", click **Enable**.

   ![Screenshot of the dropdown menu to enable updating vulnerable dependencies](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %}
{% ifversion ghes > 3.2 %}

When you enable {% data variables.product.prodname_dependabot_alerts %}, you should consider also setting up {% data variables.product.prodname_actions %} for {% data variables.product.prodname_dependabot_security_updates %}. This feature allows developers to fix vulnerabilities in their dependencies. For more information, see "[Managing self-hosted runners for {% data variables.product.prodname_dependabot_updates %} on your enterprise](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)."

If you need enhanced security, we recommend configuring {% data variables.product.prodname_dependabot %} to use private registries. For more information, see "[Managing encrypted secrets for {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)."

{% endif %}
