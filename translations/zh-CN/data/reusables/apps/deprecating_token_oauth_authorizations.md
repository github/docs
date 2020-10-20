{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% warning %}

**弃用通知：**`token` 属性在某些 OAuth 授权 API 响应中弃用：
* 列出您的授权
* 获取单一授权
* 获取或创建特定应用程序的授权 - 对“创建”仍会返回 `token`
* 获取或创建特定应用程序和指纹的授权 - 对“创建”仍会返回 `token`
* 更新现有授权

为减小删除 `token` 值的影响，OAuth 授权 API 现在包含一个新的请求属性 (`fingerprint`)、三个新的响应属性（`token_last_eight`、`hashed_token` 和 `fingerprint`）以及[特定应用程序和指纹的获取或创建授权](/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint)端点。

此功能在 2015 年 4 月 20 日成为所有请求的默认值。 有关完整详情，请参阅[博客文章](https://developer.github.com/changes/2015-04-20-authorizations-api-response-changes-are-now-in-effect/)。

{% endwarning %}
{% endif %}
