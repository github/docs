{% if currentVersion ver_gt "enterprise-server@2.21" and currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**注：**过期用户令牌目前是用户到服务器令牌过期的一部分，可能会更改。 To opt-in to the user-to-server token expiration beta feature, see "[Activating optional features for apps](/developers/apps/activating-optional-features-for-apps)." 更多信息请参阅“[GitHub 应用程序过期用户到服务器访问令牌](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)”。

{% endnote %}

{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}

{% note %}

**Note:** Expiring user tokens are currently an optional feature and subject to change. To opt in or out of the user-to-server token expiration feature, see "[Activating optional features for apps](/developers/apps/activating-optional-features-for-apps)." 更多信息请参阅“[GitHub 应用程序过期用户到服务器访问令牌](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)”。

{% endnote %}

{% endif %}
