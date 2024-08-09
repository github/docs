1. Generate a JSON web token (JWT) for your app. For more information, see "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-json-web-token-jwt-for-a-github-app)".
1. Get the installation access token (also known as installation ID or installation token) of the app that you want to authenticate as.

   The name _installation access token_ is somewhat misleading because the app is already installed, but it is the secret key used to unlock programmatic access as a GitHub App. Generating a GitHub app installation token is an efficient way to unlock the maximum allotted API calls to avoid rate limiting and can be used by multiple members of your organization.

   If you are responding to a webhook event, the webhook payload will include the installation access token.

   You can also use the REST API to find the access token for an installation of your app. For example, you can get an installation access token with the `GET /users/{username}/installation`, `GET /repos/{owner}/{repo}/installation`, `GET /orgs/{org}/installation`, or `GET /app/installations` endpoints. For more information, see "[AUTOTITLE](/rest/apps/apps)".

    Alternatively, you can find the installation access token from the top URL of the GitHub App Settings. In this example URL, the installation access token is `33507770`: `https://github.com/organizations/test-organization/settings/installations/33507770`

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
