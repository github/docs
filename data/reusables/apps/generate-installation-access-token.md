1. Generate a JSON web token (JWT) for your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)".
1. Get the ID of the installation that you want to authenticate as.

   If you are responding to a webhook event, the webhook payload will include the installation ID.

   You can also use the REST API to find the ID for an installation of your app. For example, you can get an installation ID with the `GET /users/{username}/installation`, `GET /repos/{owner}/{repo}/installation`, `GET /orgs/{org}/installation`, or `GET /app/installations` endpoints. For more information, see "[AUTOTITLE](/rest/apps/apps)".
1. Send a REST API `POST` request to `/app/installations/INSTALLATION_ID/access_tokens`. Include your JSON web token in the `Authorization` header of your request. Replace `INSTALLATION_ID` with the ID of the installation that you want to authenticate as.

   For example, send this curl request. Replace `INSTALLATION_ID` with the ID of the installation and `JWT` with your JSON web token:

   ```shell
   curl --request POST \
   --url "{% data variables.product.api_url_pre %}/app/installations/INSTALLATION_ID/access_tokens" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer JWT"{% ifversion api-date-versioning %} \
   --header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
   ```

   Optionally, you can use the `repositories` or `repository_ids` body parameters to specify individual repositories that the installation access token can access. If you don't use `repositories` or `repository_ids` to grant access to specific repositories, the installation access token will have access to all repositories that the installation was granted access to. The installation access token cannot be granted access to repositories that the installation was not granted access to.

   Optionally, use the `permissions` body parameter to specify the permissions that the installation access token should have. If `permissions` is not specified, the installation access token will have all of the permissions that were granted to the app. The installation access token cannot be granted permissions that the app was not granted.

   The response will include an installation access token, the time that the token expires, the permissions that the token has, and the repositories that the token can access. The installation access token will expire after 1 hour.

   For more information about this endpoint, see "[AUTOTITLE](/rest/apps/apps)".

   {% note %}

   **Note:** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}
