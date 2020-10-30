{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
{% warning %}

**警告：**应用程序必须使用 [web 应用程序流程](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)来获取适用于 GitHub SAML 组织的 OAuth 令牌。 使用授权 API 创建的 OAuth 令牌将无法访问 GitHub SAML 组织。 更多信息请参阅[博客帖子](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api)。

{% endwarning %}
{% endif %}
