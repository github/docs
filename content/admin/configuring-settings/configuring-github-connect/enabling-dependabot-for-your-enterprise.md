---
title: Enabling Dependabot for your enterprise
intro: 'You can allow users to find and fix vulnerabilities in code dependencies by {% ifversion dependabot-alerts-ghes-enablement %} setting up {% else %}enabling{% endif %} {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} and {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
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
  - /admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise
permissions: 'Enterprise owners can{% ifversion dependabot-alerts-ghes-enablement %} set up{% else %} enable{% endif %} {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
---

## About {% data variables.product.prodname_dependabot %} for {% data variables.product.product_name %}

{% data variables.product.prodname_dependabot %} helps users find and fix vulnerabilities in their dependencies.{% ifversion ghes %} You {% ifversion dependabot-alerts-ghes-enablement %} must first set up {% data variables.product.prodname_dependabot %} for your enterprise, and then you {% endif %} can enable {% data variables.product.prodname_dependabot_alerts %} to notify users about vulnerable dependencies and {% data variables.product.prodname_dependabot_updates %} to fix the vulnerabilities and keep dependencies updated to the latest version.

{% data variables.product.prodname_dependabot %} is just one of many features available to harden supply chain security for {% data variables.product.prodname_dotcom %}. For more information about the other features, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise)."

### About {% data variables.product.prodname_dependabot_alerts %}

{% endif %}

With {% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dotcom %} identifies insecure dependencies in repositories and creates alerts on {% data variables.product.prodname_ghe_server %}, using data from the {% data variables.product.prodname_advisory_database %} and the dependency graph service.

{% data reusables.repositories.tracks-vulnerabilities %}

After you {% ifversion dependabot-alerts-ghes-enablement %} set up {% data variables.product.prodname_dependabot %}{% else %} enable {% data variables.product.prodname_dependabot_alerts %}{% endif %} for your enterprise, vulnerability data is synced from the {% data variables.product.prodname_advisory_database %} to your instance once every hour. Only {% data variables.product.company_short %}-reviewed advisories are synchronized. {% data reusables.security-advisory.link-browsing-advisory-db %}

You can also choose to manually sync vulnerability data at any time. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)."

{% note %}

**Note:** When you enable {% data variables.product.prodname_dependabot_alerts %}, no code or information about code from {% data variables.product.prodname_ghe_server %} is uploaded to {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

When {% data variables.product.prodname_ghe_server %} receives information about a vulnerability, it identifies repositories that use the affected version of the dependency and generates {% data variables.product.prodname_dependabot_alerts %}. You can choose whether or not to notify users automatically about new {% data variables.product.prodname_dependabot_alerts %}.

For repositories with {% data variables.product.prodname_dependabot_alerts %} enabled, scanning is triggered on any push to the default branch that contains a manifest file or lock file. Additionally, when a new vulnerability record is added, {% data variables.product.product_name %} scans all existing repositories and generates alerts for any repository that is vulnerable. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."

### About {% data variables.product.prodname_dependabot_updates %}

After you enable {% data variables.product.prodname_dependabot_alerts %}, you can choose to enable {% data variables.product.prodname_dependabot_updates %}. When {% data variables.product.prodname_dependabot_updates %} are enabled for {% data variables.product.prodname_ghe_server %}, users can configure repositories so that their dependencies are updated and kept secure automatically.

{% note %}

**Note:** {% data variables.product.prodname_dependabot_updates %} on {% data variables.product.product_name %} requires {% data variables.product.prodname_actions %} with self-hosted runners.

{% endnote %}

By default, {% data variables.product.prodname_actions %} runners used by {% data variables.product.prodname_dependabot %} need access to the internet, to download updated packages from upstream package managers. For {% data variables.product.prodname_dependabot_updates %} powered by {% data variables.product.prodname_github_connect %}, internet access provides your runners with a token that allows access to dependencies and advisories hosted on {% data variables.product.prodname_dotcom_the_website %}.

{% ifversion dependabot-ghes-no-public-internet %}
You can enable {% data variables.product.prodname_dependabot_updates %} for specific private registries on {% data variables.product.prodname_ghe_server %} instances with limited, or no, internet access. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/configuring-dependabot-to-work-with-limited-internet-access)."
{% endif %}

With {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} automatically creates pull requests to update dependencies in two ways.

* **{% data variables.product.prodname_dependabot_version_updates %}**: Users add a {% data variables.product.prodname_dependabot %} configuration file to the repository to enable {% data variables.product.prodname_dependabot %} to create pull requests when a new version of a tracked dependency is released. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)."
* **{% data variables.product.prodname_dependabot_security_updates %}**: Users toggle a repository setting to enable {% data variables.product.prodname_dependabot %} to create pull requests when {% data variables.product.prodname_dotcom %} detects a vulnerability in one of the dependencies of the dependency graph for the repository. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)" and "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

## Enabling {% data variables.product.prodname_dependabot_alerts %}

{% ifversion dependabot-alerts-ghes-enablement %}
Before you can enable {% data variables.product.prodname_dependabot_alerts %}, you must first set up {% data variables.product.prodname_dependabot %} for your enterprise{% else %}Before you can enable {% data variables.product.prodname_dependabot_alerts %}{% endif %}:
* You must enable {% data variables.product.prodname_github_connect %}. For more information, see "[AUTOTITLE](/admin/configuration/configuring-github-connect/managing-github-connect)."
* You must enable the dependency graph. For more information, see "[AUTOTITLE](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "{% data variables.product.prodname_dependabot %}", to the right of {% ifversion dependabot-alerts-ghes-enablement %}"Periodically download the {% data variables.product.prodname_advisory_database %} so that users can receive vulnerability alerts for open source code dependencies"{% else %}"Users can receive vulnerability alerts for open source code dependencies"{% endif %}, select the dropdown menu and click **Enabled without notifications**. Optionally, to enable alerts with notifications, click **Enabled with notifications**.

   ![Screenshot of the "Enable" dropdown menu for {% data variables.product.prodname_dependabot_alerts %}, showing the available options.](/assets/images/enterprise/site-admin-settings/dependabot-alerts-setup-dropdown.png)

   > [!NOTE]
   > This setting controls realtime email and web notifications only. Command line interface (CLI) warnings and email digests will still be delivered regardless of which option is selected.

    > [!TIP]
   > We recommend configuring {% data variables.product.prodname_dependabot_alerts %} without notifications for the first few days to avoid an overload of realtime notifications. After a few days, you can enable notifications to receive {% data variables.product.prodname_dependabot_alerts %} as usual.

You can now enable {% data variables.product.prodname_dependabot_alerts %} for all existing or new private and internal repositories in the enterprise settings page for "Code security and analysis." Alternatively, repository administrators and organization owners can enable {% data variables.product.prodname_dependabot_alerts %} for each repository and organization. Public repositories are always enabled by default. For more information, see "[AUTOTITLE](/enterprise-server@latest/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."

{% ifversion dependabot-updates-github-connect %}

## Enabling {% data variables.product.prodname_dependabot_updates %}

Before you can enable {% data variables.product.prodname_dependabot_updates %}:
* You must enable {% data variables.product.prodname_dependabot_alerts %} for your enterprise. For more information, see "Enabling {% data variables.product.prodname_dependabot_alerts %}" above.
* You must enable TLS. {% data variables.product.prodname_dependabot_updates %} run on self-hosted runners, which need to have TLS enabled. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise#prerequisites)."
* You must configure {% data variables.product.prodname_ghe_server %} to use {% data variables.product.prodname_actions %} with self-hosted runners. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."

{% data variables.product.prodname_dependabot_updates %} are not supported on {% data variables.product.product_name %} if your enterprise uses clustering.

{% ifversion ghes %}

{% note %}

**Note:** After you enable the dependency graph, you can use the [{% data variables.product.prodname_dependabot %} action](https://github.com/github/dependabot-action). The action will raise an error if any vulnerabilities or invalid licenses are being introduced. {% data reusables.actions.action-bundled-actions %}

{% endnote %}

{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security", select **{% data variables.product.prodname_dependabot_security_updates %}**.
{% data reusables.enterprise_management_console.save-settings %}
1. Click **Visit your instance**.
1. Configure dedicated self-hosted runners to create the pull requests that will update dependencies. This is required because the workflows use a specific runner label. For more information, see "[AUTOTITLE](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)."
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "{% data variables.product.prodname_dependabot %}", to the right of "Users can easily upgrade to non-vulnerable open source code dependencies", click **Enable**.
{% endif %}
{% ifversion ghes %}

When you enable {% data variables.product.prodname_dependabot_alerts %}, you should consider also setting up {% data variables.product.prodname_actions %} for {% data variables.product.prodname_dependabot_security_updates %}. This feature allows developers to fix vulnerabilities in their dependencies. For more information, see "[AUTOTITLE](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)."

If you need enhanced security, we recommend configuring {% data variables.product.prodname_dependabot %} to use private registries. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/configuring-access-to-private-registries-for-dependabot#configuring-private-registries)."

{% endif %}
