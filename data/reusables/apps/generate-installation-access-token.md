1. Generate a JSON web token (JWT) for your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)".
1. Get the ID of the installation that you want to authenticate as.

   If you are responding to a webhook event, the webhook payload will include the installation ID.

   You can also use the REST API to find the ID for an installation of your app. For example, you can get an installation ID with the `GET /users/{username}/installation`, `GET /repos/{owner}/{repo}/installation`, `GET /orgs/{org}/installation`, or `GET /app/installations` endpoints. For more information, see "[AUTOTITLE](/rest/apps/apps)".

   You can also find the app ID on the settings page for your app. The app ID is different from the client ID. For more information about navigating to the settings page for your {% data variables.product.prodname_github_app %}, see "[AUTOTITLE](/apps/maintaining-github-apps/modifying-a-github-app-registration#navigating-to-your-github-app-settings)".

1. Send a REST API `POST` request to `/app/installations/INSTALLATION_ID/access_tokens`. Include your JSON web token in the `Authorization` header of your request. Replace `INSTALLATION_ID` with the ID of the installation that you want to authenticate as.

   For example, send this curl request. Replace `INSTALLATION_ID` with the ID of the installation and `JWT` with your JSON web token:

   ```shell
   curl --request POST \
   --url "{% data variables.product.rest_url %}/app/installations/INSTALLATION_ID/access_tokens" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer JWT" \
   --header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"
   ```

   Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to.{% ifversion fpt or ghec or ghes > 3.13 %} You can list up to 500 repositories.{% endif %}

   Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted.

   {% ifversion fpt or ghec or ghes > 3.13 %}When using the `permissions` parameters to reduce the access of the token, the complexity of the token is increased due to the number of permissions in the request and the number of repositories the token will have access to. If the complexity is too large, you will get an error message that indicates the maximum number of repositories that can be supported. In this case, you should request fewer permissions with the `permissions` parameter, use the `repositories` or `repository_ids` parameter to request fewer repositories, or install the app on `all` repositories in your organization.{% endif %}

   The response will include an installation access token, the time that the token expires, the permissions that the token has, and the repositories that the token can access. The installation access token will expire after 1 hour.

   For more information about this endpoint, see "[AUTOTITLE](/rest/apps/apps)".

   {% note %}

   **Note:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}
