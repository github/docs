1. Exchange the `code` from the previous step for a user access token by making a `POST` request to this URL, along with the following query parameters: `{% data variables.product.oauth_host_code %}/login/oauth/access_token`

   Query parameter | Type | Description
   -----|------|------------
   `client_id` | `string` | **Required.** The client ID for your {% data variables.product.prodname_github_app %}. The client ID is different from the app ID. You can find the client ID on the settings page for your app.<br><br>For user-owned apps, the settings page is `https://github.com/settings/apps/APP-SLUG`.<br><br>For organization-owned apps, the settings page is `https://github.com/organizations/ORGANIZATION/settings/apps/APP-SLUG`.<br><br>Replace `APP-SLUG` with the slugified name of your app and `ORGANIZATION` with the slugified name of your organization. For example, `https://github.com/organizations/octo-org/settings/apps/octo-app`.
   `client_secret` | `string` | **Required.** The client secret for your {% data variables.product.prodname_github_app %}. You can generate a client secret on the settings page for your app.
   `code` | `string` | **Required.** The code you received in the previous step.
   `redirect_uri` | `string` | The URL in your application where users will be sent after authorization. This must be an exact match to one of the URLs you provided as a "Callback URL" when setting up your {% data variables.product.prodname_github_app %} and can't contain any additional parameters.
