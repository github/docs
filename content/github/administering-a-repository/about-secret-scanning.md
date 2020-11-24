---
title: About secret scanning
intro: '{% data variables.product.product_name %} scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
---

If your project communicates with an external service, you might use a token or private key for authentication. Tokens and private keys are examples of secrets that a service provider can issue. If you check a secret into a repository, anyone who has read access to the repository can use the secret to access the external service with your privileges. We recommend that you store secrets in a dedicated, secure location outside of the repository for your project.

If someone checks a secret from a {% data variables.product.company_short %} partner into a public or private repository, {% data variables.product.prodname_secret_scanning %} can detect the secret and help you mitigate the impact of the leak.

Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning. For more information, see "[Secret scanning](/partnerships/secret-scanning)."

### About {% data variables.product.prodname_secret_scanning %} for public repositories

 {% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories, where it scans code for secrets, to check for known secret formats. When a match of your secret format is found in a public repository, {% data variables.product.company_short %} doesn't publicly disclose the information as an alert, but instead sends a payload to an HTTP endpoint of your choice. For an overview of how secret scanning works on public repositories, see "[Secret scanning](/developers/overview/secret-scanning)."

When you push to a public repository, {% data variables.product.product_name %} scans the content of the commits for secrets. If you switch a private repository to public, {% data variables.product.product_name %} scans the entire repository for secrets. 

When {% data variables.product.prodname_secret_scanning %} detects a set of credentials, we notify the service provider who issued the secret. The service provider validates the credential and then decides whether they should revoke the secret, issue a new secret, or reach out to you directly, which will depend on the associated risks to you or the service provider.

{% data variables.product.product_name %} currently scans public repositories for secrets issued by the following service providers.

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Datadog
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- MessageBird
- npm
- NuGet
- Palantir
- Plivo
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

### About {% data variables.product.prodname_secret_scanning %} for private repositories

{% data reusables.secret-scanning.beta %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for private repositories that are owned by organizations. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization. {% data variables.product.prodname_secret_scanning_caps %} is not available for user account-owned private repositories. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

When you push commits to a private repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.product_name %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a private repository, {% data variables.product.prodname_dotcom %} sends alerts.

- {% data variables.product.prodname_dotcom %} sends an email alert to the repository administrators and organization owners.

- {% data variables.product.prodname_dotcom %} displays an alert in the repository. For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."

Repository administrators and organization owners can grant users and team access to {% data variables.product.prodname_secret_scanning %} alerts. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)."

{% data variables.product.product_name %} currently scans private repositories for secrets issued by the following service providers.

- Adafruit
- Alibaba Cloud
- Amazon Web Services (AWS)
- Atlassian
- Azure
- Clojars
- CloudBees CodeShip
- Databricks
- Discord
- Dropbox
- Dynatrace
- Finicity
- Frame.io
- GitHub
- GoCardless
- Google Cloud
- Hashicorp Terraform
- Hubspot
- Mailchimp
- Mailgun
- npm
- NuGet
- Palantir
- Postman
- Proctorio
- Pulumi
- Samsara
- Shopify
- Slack
- SSLMate
- Stripe
- Tencent Cloud
- Twilio

{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} does not currently allow you to define your own patterns for detecting secrets.

{% endnote %}

### Further reading

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
