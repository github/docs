---
title: About secret scanning
intro: '{% data variables.product.product_name %} scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## About {% data variables.product.prodname_secret_scanning %}

If your project communicates with an external service, you might use a token or private key for authentication. Tokens and private keys are examples of secrets that a service provider can issue. If you check a secret into a repository, anyone who has read access to the repository can use the secret to access the external service with your privileges. We recommend that you store secrets in a dedicated, secure location outside of the repository for your project.

{% data variables.product.prodname_secret_scanning_caps %} will scan your entire Git history on all branches present in your {% data variables.product.prodname_dotcom %} repository for any secrets. Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning. For details of the supported secrets and service providers, see "[{% data variables.product.prodname_secret_scanning_caps %} partners](/code-security/secret-scanning/secret-scanning-partners)."

{% data reusables.secret-scanning.partner-program-link %}

{% ifversion fpt or ghec %}
## About {% data variables.product.prodname_secret_scanning %} for public repositories

{% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories. When you push to a public repository, {% data variables.product.product_name %} scans the content of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a potential secret, we notify the service provider who issued the secret. The service provider validates the string and then decides whether they should revoke the secret, issue a new secret, or contact you directly. Their action will depend on the associated risks to you or them.

You cannot change the configuration of {% data variables.product.prodname_secret_scanning %} on public repositories.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %} can configure {% data variables.product.prodname_secret_scanning %} to run on private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning).
{% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## About {% data variables.product.prodname_secret_scanning %} for private repositories
{% elsif ghes or ghae %}
## About {% data variables.product.prodname_secret_scanning %} on {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. It is not available on user-owned repositories.
{% endif %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for {% ifversion ghec %} private{% endif %} repositories that are owned by organizations. You can enable {% data variables.product.prodname_secret_scanning %} for all your organization's repositories, or for all new repositories within your organization.{% ifversion ghec %} {% data variables.product.prodname_secret_scanning_caps %} is not available for private repositories owned by user accounts.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion ghes > 3.1 or ghae or ghec %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for a repository, organization, or enterprise. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."
{% elsif ghes < 3.2 %}
Versions 3.1 and lower of {% data variables.product.product_name %} do not allow you to define your own patterns for detecting secrets.
{% endif %}

### About {% data variables.product.prodname_secret_scanning %} alerts

When you push commits to a{% ifversion ghec %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% ifversion ghec %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} generates an alert.

- {% data variables.product.prodname_dotcom %} sends an email alert to the repository administrators and organization owners.
{% ifversion ghes > 3.0 or ghae or ghec %}
- {% data variables.product.prodname_dotcom %} sends an email alert to the contributor who committed the secret to the repository, with a link to the related {% data variables.product.prodname_secret_scanning %} alert. The commit author can then view the alert in the repository, and resolve the alert.
{% endif %}
- {% data variables.product.prodname_dotcom %} displays an alert in the repository.{% ifversion ghes = 3.0 %} For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

{% ifversion ghes > 3.0 or ghae or ghec %}
For more information about viewing and resolving {% data variables.product.prodname_secret_scanning %} alerts, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Repository administrators and organization owners can grant users and teams access to {% data variables.product.prodname_secret_scanning %} alerts. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

{% ifversion ghec or ghes > 3.1 %}
You can use the security overview to see an organization-level view of which repositories have enabled {% data variables.product.prodname_secret_scanning %} and the alerts found. For more information, see "[Viewing the security overview](/code-security/security-overview/viewing-the-security-overview)."
{% endif %}

{%- ifversion ghec or ghes > 3.1 %}You can also use the REST API to {% elsif ghes = 3.1 %}You can use the REST API to {% endif %}
{%- ifversion ghec or ghes > 3.0 %}monitor results from {% data variables.product.prodname_secret_scanning %} across your {% ifversion ghec %}private {% endif %}repositories{% ifversion ghes > 3.1 %} or your organization{% endif %}. For more information about API endpoints, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% endif %}

## Further reading

- "[Securing your repository](/code-security/getting-started/securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
- "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Encrypted secrets](/actions/security-guides/encrypted-secrets)"
