When you enable one or more security and analysis features for existing repositories, you will see the appropriate results displayed on {% data variables.product.prodname_dotcom %} within minutes:

- All the existing repositories will have the selected configuration.
- New repositories will follow the selected configuration if you've enabled the checkbox for new repositories.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
- We use the permissions to scan for manifest files to apply the relevant services.{% endif %}
- You'll see information on your dependency graph.
- {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} and raise pull requests 