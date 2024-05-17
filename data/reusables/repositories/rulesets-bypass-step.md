You can grant certain roles, teams, or apps bypass permissions for your ruleset. The following are eligible for bypass access:

- Repository admins or organization owners
- The maintain or write role, or custom repository roles based on the write role
- Teams
- Deploy keys
- {% data variables.product.prodname_github_apps %}{% ifversion repo-rules-dependabot-bypass %}
- {% data variables.product.prodname_dependabot %}. For more information about {% data variables.product.prodname_dependabot %}, see "[AUTOTITLE](/code-security/getting-started/dependabot-quickstart-guide)."{% endif %}

1. To grant bypass permissions for the ruleset, in the "Bypass list" section, click {% octicon "plus" aria-hidden="true" %} **Add bypass**.
1. In the "Add bypass" modal dialog that appears, search for the role, team, or app you would like to grant bypass permissions, then select the role, team, or app from the "Suggestions" section and click **Add Selected**.
