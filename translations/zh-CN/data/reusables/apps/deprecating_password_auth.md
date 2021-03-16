{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**弃用通知：** {% data variables.product.prodname_dotcom %} 将停止使用密码向 API 验证。  您现在必须使用 API 令牌向 {% data variables.product.prodname_dotcom %} API 验证，如 OAuth 访问令牌、GitHub 应用程序安装访问令牌或个人访问令牌，具体取决于您需要使用令牌执行的操作。{% if currentVersion == "free-pro-team@latest" %} 使用密码向 API 验证将在 2020 年 11 月 13 日删除。{% endif %} 有关更多信息，,{% if currentVersion == "free-pro-team@latest" %} 包括预定的限电，{% endif %}请参阅[博客文章](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/)。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Authenticating to the API using a password is currently available and not yet deprecated in {% data variables.product.product_name %}. {% data variables.product.prodname_dotcom %} 将宣布弃用，并在删除对此功能的支持之前提前通知。{% endif %}

{% endwarning %}
{% endif %}
