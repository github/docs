{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
为使用户到服务器的访问令牌更安全，您可以使用将在 8 小时后过期的访问令牌，以及可交换新访问令牌的刷新令牌。 更多信息请参阅“[刷新用户到服务器访问令牌](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)”。
{% endif %}
