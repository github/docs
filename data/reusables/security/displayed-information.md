When you enable one or more security and analysis features for existing repositories, you will see any results displayed on {% data variables.product.prodname_dotcom %} within minutes:

- All the existing repositories will have the selected configuration.
- New repositories will follow the selected configuration if you've enabled the checkbox for new repositories.{% ifversion fpt or ghec %}
- We use the permissions to scan for manifest files to apply the relevant services.
- If enabled, you'll see dependency information in the dependency graph.
- If enabled, {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies or malware.{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %}
- If enabled, {% data variables.product.prodname_dependabot %} security updates will create pull requests to upgrade vulnerable dependencies when {% data variables.product.prodname_dependabot_alerts %} are triggered.{% endif %}
