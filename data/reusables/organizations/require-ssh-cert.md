1. Optionally, to require members to use SSH certificates, select **Require SSH Certificates**, then click **Save**.

   {% note %}

   **Note:** When you require SSH certificates, the requirement does not apply to authorized {% data variables.product.prodname_oauth_apps %} and {% data variables.product.prodname_github_apps %} {% ifversion ssh-cert-policy-allow-u2s-tokens %}(including user-to-server tokens){% endif %} or to {% data variables.product.prodname_dotcom %} features such as {% data variables.product.prodname_actions %}{% ifversion fpt or ghec %} and {% data variables.product.prodname_codespaces %}{% endif %}, which are trusted environments within the {% data variables.product.prodname_dotcom %} ecosystem.

   {% endnote %}
