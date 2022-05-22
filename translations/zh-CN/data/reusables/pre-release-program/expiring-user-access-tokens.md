{% if currentVersion ver_gt "enterprise-server@2.21" and currentVersion ver_lt "enterprise-server@3.1" %}
{% note %}

**注：**过期用户令牌目前是用户到服务器令牌过期的一部分，可能会更改。 要选择使用用户到服务器令牌过期测试功能，请参阅“[激活应用程序的可选功能](/developers/apps/activating-optional-features-for-apps)”。 更多信息请参阅“[GitHub 应用程序过期用户到服务器访问令牌](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)”。

{% endnote %}

{% elsif currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}

{% note %}

**注：**过期用户令牌目前是可选功能，可能会更改。 要选择使用或退出用户到服务器令牌过期功能，请参阅“[激活应用程序的可选功能](/developers/apps/activating-optional-features-for-apps)”。 更多信息请参阅“[GitHub 应用程序过期用户到服务器访问令牌](https://developer.github.com/changes/2020-04-30-expiring-user-to-server-access-tokens-for-github-apps)”。

{% endnote %}

{% endif %}
