{% if currentVersion ver_gt "enterprise-server@2.21" and currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**Note:** Expiring user tokens are currently part of the user-to-server token expiration beta and subject to change. To opt-in to the user-to-server token expiration beta feature, see "[Activating optional features for apps](/developers/apps/activating-optional-features-for-apps)." For more information, see "[Expiring user-to-server access tokens for GitHub Apps](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)."

{% endnote %}

{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}

{% note %}

**Note:** Expiring user tokens are currently an optional feature and subject to change. To opt in or out of the user-to-server token expiration feature, see "[Activating optional features for apps](/developers/apps/activating-optional-features-for-apps)." For more information, see "[Expiring user-to-server access tokens for GitHub Apps](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)."

{% endnote %}

{% endif %}
