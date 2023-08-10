1. Use the user access token from the previous step to make API requests on behalf of the user. Include the user access token in the `Authorization` header of an API request. For example:

   ```shell
   curl --request GET \
   --url "{% data variables.product.api_url_pre %}/user" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer USER_ACCESS_TOKEN"{% ifversion api-date-versioning %} \
   --header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
   ```
