{% ifversion dependabot-grouped-security-updates-config %}You can use the  `dependabot.yml` file to create separate rules to group {% data variables.product.prodname_dependabot_version_updates %} and {% data variables.product.prodname_dependabot_security_updates %}.{% else %}
You can only use the `dependabot.yml` file to create groups for {% data variables.product.prodname_dependabot_version_updates %}. Grouped {% data variables.product.prodname_dependabot_security_updates %} are enabled or disabled in your repository or organization settings and do not support customization. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates#about-grouped-security-updates)."{% endif %}

{% note %}

**Note:** If a grouped pull request for {% data variables.product.prodname_dependabot_version_updates %} contains a vulnerable package, {% data variables.product.prodname_dependabot_security_updates %} will still attempt to create a _separate_ pull request to update the vulnerable package to a secure version. Creating a separate pull request for security updates ensures you have visibility into package vulnerabilities.

{% endnote %}
