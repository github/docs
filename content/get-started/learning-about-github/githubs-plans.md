---
title: GitHub’s plans
intro: 'An overview of {% data variables.product.prodname_dotcom %}''s pricing plans.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-plans
  - /github/getting-started-with-github/githubs-plans
  - /github/getting-started-with-github/learning-about-github/githubs-plans
  - /get-started/learning-about-github/githubs-products
  - /github/getting-started-with-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---
## About {% data variables.product.prodname_dotcom %}'s plans

{% data variables.product.prodname_dotcom %} offers free and paid plans for storing and collaborating on code. Some plans are available only to personal accounts, while other plans are available only to organization and enterprise accounts. For more information about accounts, see "[AUTOTITLE](/get-started/learning-about-github/types-of-github-accounts)."

See costs and features for each plan at {% data variables.product.pricing_link %}. {% data reusables.products.product-roadmap %}

When you read {% data variables.product.prodname_docs %}, make sure to select the version that reflects your plan. For more information, see "[AUTOTITLE](/get-started/using-github-docs/about-versions-of-github-docs)."

## {% data variables.product.prodname_free_user %} for personal accounts

With {% data variables.product.prodname_free_team %} for personal accounts, you can work with unlimited collaborators on unlimited public repositories with a full feature set, and on unlimited private repositories with a limited feature set.

With {% data variables.product.prodname_free_user %}, your personal account includes:
* {% data variables.product.prodname_gcf %}
* {% data variables.product.prodname_dependabot_alerts %}
* Deployment protection rules for public repositories
* Two-factor authentication enforcement
* 500 MB {% data variables.product.prodname_registry %} storage {% ifversion fpt or ghec%}
* 120 {% data variables.product.prodname_github_codespaces %} core hours per month
* 15 GB {% data variables.product.prodname_github_codespaces %} storage per month {% endif %}
* {% data variables.product.prodname_actions %} features:
  * 2,000 minutes per month
  * Deployment protection rules for public repositories
* GitHub Pages in public repositories

## {% data variables.product.prodname_pro %}

In addition to the features available with {% data variables.product.prodname_free_user %} for personal accounts, {% data variables.product.prodname_pro %} includes:
* {% data variables.contact.github_support %} via email
* 3,000 {% data variables.product.prodname_actions %} minutes per month
* 2 GB {% data variables.product.prodname_registry %} storage {% ifversion fpt or ghec%}
* 180 {% data variables.product.prodname_github_codespaces %} core hours per month
* 20 GB {% data variables.product.prodname_github_codespaces %} storage per month {% endif %}
* Advanced tools and insights in private repositories:
  * Required pull request reviewers
  * Multiple pull request reviewers
  * Protected branches
  * Code owners
  * Auto-linked references
  * {% data variables.product.prodname_pages %}

    {% note %}

    **Note:** To publish a {% data variables.product.prodname_pages %} site privately, you need to have an organization account. Additionally, your organization must use {% data variables.product.prodname_ghe_cloud %}.

    {% endnote %}

  * Wikis
  * Repository insights graphs: Pulse, contributors, traffic, commits, code frequency, network, and forks
    {% data reusables.repositories.repo-insights-commit-limit %}

## {% data variables.product.prodname_free_team %} for organizations

With {% data variables.product.prodname_free_team %} for organizations, you can work with unlimited collaborators on unlimited public repositories with a full feature set, or unlimited private repositories with a limited feature set.

In addition to the features available with {% data variables.product.prodname_free_user %} for personal accounts, {% data variables.product.prodname_free_team %} for organizations includes:
* {% data variables.product.prodname_gcf %}{% ifversion team-discussions %}
* Team discussions{% endif %}
* Team access controls for managing groups
* 2,000 {% data variables.product.prodname_actions %} minutes per month
* 500 MB {% data variables.product.prodname_registry %} storage

## {% data variables.product.prodname_team %}

In addition to the features available with {% data variables.product.prodname_free_team %} for organizations, {% data variables.product.prodname_team %} includes:
* {% data variables.contact.github_support %} via email
* 3,000 {% data variables.product.prodname_actions %} minutes per month
* 2 GB {% data variables.product.prodname_registry %} storage
* Advanced tools and insights in private repositories:
  * Required pull request reviewers
  * Multiple pull request reviewers
  * Draft pull requests
  * Team pull request reviewers
  * Protected branches
  * Code owners
  * Scheduled reminders
  * {% data variables.product.prodname_pages %}

    {% note %}

    **Note:** To publish a {% data variables.product.prodname_pages %} site privately, you need to have an organization account. Additionally, your organization must use {% data variables.product.prodname_ghe_cloud %}.

    {% endnote %}

  * Wikis
  * Repository insights graphs: Pulse, contributors, traffic, commits, code frequency, network, and forks
    {% data reusables.repositories.repo-insights-commit-limit %}
{%- ifversion fpt or ghec %}
* The option to enable or disable {% data variables.product.prodname_github_codespaces %}
  * Organization owners can choose to enable or disable {% data variables.product.prodname_github_codespaces %} for the organization's private {% ifversion ghec %}and internal {% endif %}repositories, and can pay for the usage of members and collaborators. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/enabling-or-disabling-github-codespaces-for-your-organization)" and "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)."
{%- endif %}

{% data variables.product.company_short %} bills for {% data variables.product.prodname_team %} on a per-user basis. For more information, see "[About per-user pricing]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-the-plan-for-your-github-account/about-per-user-pricing){% ifversion fpt %}."{% else %}" in the Free, Pro, & Team documentation.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} includes two deployment options: {% data variables.product.prodname_ghe_cloud %}, which is cloud-hosted and part of {% data variables.product.prodname_dotcom_the_website %}, and {% data variables.product.prodname_ghe_server %}, which is self-hosted. For more information, see "[About {% data variables.product.prodname_dotcom %} for enterprises]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/overview/about-github-for-enterprises){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

In addition to the features available with {% data variables.product.prodname_team %}, {% data variables.product.prodname_enterprise %} includes:

* {% data variables.contact.enterprise_support %}
* Additional security, compliance, and deployment controls
* Authentication with SAML single sign-on
* Access provisioning with SAML or SCIM
* Deployment protection rules with {% data variables.product.prodname_actions %} for private or internal repositories
* {% data variables.product.prodname_github_connect %}
* The option to purchase {% data variables.product.prodname_GH_advanced_security %}. For more information, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."
* Additional features such as internal repositories{% ifversion repo-rules %}, security overview, and repository rules{% else %} and security overview{% endif %}.

{% data variables.product.prodname_ghe_cloud %} specifically includes:
* 50,000 {% data variables.product.prodname_actions %} minutes per month
  * Included minutes can be used with standard {% data variables.product.prodname_dotcom %}-hosted runners only. For more information about billing for {% data variables.actions.hosted_runners %}, see "[AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners#understanding-billing)."
* 50 GB {% data variables.product.prodname_registry %} storage
* A service level agreement for 99.9% monthly uptime
* The option to centrally manage policy and billing for multiple {% data variables.product.prodname_dotcom %} organizations with an enterprise account. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/managing-your-enterprise-account/about-enterprise-accounts)."

  * If you upgrade an existing organization to {% data variables.product.prodname_ghe_cloud %}, your enterprise account will contain your organization. For more information, see "[AUTOTITLE]({% ifversion fpt or ghes %}/enterprise-cloud@latest{% endif %}/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan#upgrading-your-organizations-plan)" and "[AUTOTITLE]({% ifversion fpt or ghes %}/enterprise-cloud@latest{% endif %}/admin/managing-your-enterprise-account/creating-an-enterprise-account#about-enterprise-account-creation){% ifversion fpt or ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}
* The option to provision and manage the user accounts for your developers, by using {% data variables.product.prodname_emus %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users)."
* Additional features such as audit log streaming and IP allow list. For more information, see "[AUTOTITLE]({% ifversion fpt and ghes %}/enterprise-cloud@latest{% endif %}/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)" and "[AUTOTITLE](/enterprise-cloud@latest/admin/configuration/hardening-security-for-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list){% ifversion fpt or ghes %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

For a detailed list of the features available with {% data variables.product.prodname_enterprise %}, see our [Pricing](https://github.com/pricing) page.

To see how {% data variables.product.product_name %} compares to GitLab, Bitbucket, and Jenkins, see [Comparing GitHub to other DevOps solutions](https://resources.github.com/devops/tools/compare/).

You can set up trials to evaluate {% data variables.product.prodname_ghe_cloud %} and {% data variables.product.prodname_ghe_server %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/overview/setting-up-a-trial-of-github-enterprise-cloud)" and "[AUTOTITLE](/enterprise-server@latest/admin/overview/setting-up-a-trial-of-github-enterprise-server)."

## Further reading

* "[About per-user pricing]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-the-plan-for-your-github-account/about-per-user-pricing)"{% ifversion not ghec %} in the {% data variables.product.prodname_ghe_cloud %} documentation{% endif %}
