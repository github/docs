---
title: About secret scanning
intro: '{% data variables.product.product_name %} scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - repositories
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

If your project communicates with an external service, you might use a token or private key for authentication. Tokens and private keys are examples of secrets that a service provider can issue. If you check a secret into a repository, anyone who has read access to the repository can use the secret to access the external service with your privileges. We recommend that you store secrets in a dedicated, secure location outside of the repository for your project.

Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning](/developers/overview/secret-scanning)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### About {% data variables.product.prodname_secret_scanning %} for public repositories

{% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories. When you push to a public repository, {% data variables.product.product_name %} scans the content of the commits for secrets. If you switch a private repository to public, {% data variables.product.product_name %} scans the entire repository for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a set of credentials, we notify the service provider who issued the secret. The service provider validates the credential and then decides whether they should revoke the secret, issue a new secret, or reach out to you directly, which will depend on the associated risks to you or the service provider. For an overview of how we work with token-issuing partners, see "[Secret scanning](/developers/overview/secret-scanning)."

{% data variables.product.product_name %} currently scans public repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### About {% data variables.product.prodname_secret_scanning %} for private repositories
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### About {% data variables.product.prodname_secret_scanning %} on {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. It is not available on user-owned repositories.
{% endif %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories that are owned by organizations. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

When you push commits to a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} generates an alert.

- {% data variables.product.prodname_dotcom %} sends an email alert to the repository administrators and organization owners.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- {% data variables.product.prodname_dotcom %} sends an email alert to the contributor who committed the secret to the repository, with a link to the related {% data variables.product.prodname_secret_scanning %} alert. The commit author can then view the alert in the repository, and resolve the alert.
{% endif %}
- {% data variables.product.prodname_dotcom %} displays an alert in the repository.{% if currentVersion == "enterprise-server@3.0" %} For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
For more information about viewing and resolving {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Repository administrators and organization owners can grant users and teams access to {% data variables.product.prodname_secret_scanning %} alerts. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
To monitor results from {% data variables.product.prodname_secret_scanning %} across your private repositories or your organization, you can use the {% data variables.product.prodname_secret_scanning %} API. For more information about API endpoints, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} does not currently allow you to define your own patterns for detecting secrets.

{% endnote %}

### 더 읽을거리

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
