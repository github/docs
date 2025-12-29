The job or workflow run requires a `permissions` setting with [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) to allow {% data variables.product.github %}'s OIDC provider to create a JSON Web Token for every run.

> [!NOTE] Setting `id-token: write` in the workflow’s permissions does not give the workflow permission to modify or write to any resources. Instead, it only allows the workflow to request (fetch) and use (set) an OIDC token for an action or step. This token is then used to authenticate with external services using a short-lived access token.

For detailed information on required permissions, configuration examples, and advanced scenarios, see [AUTOTITLE](/actions/reference/openid-connect-reference##workflow-permissions-for-the-requesting-the-oidc-token).
