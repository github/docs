{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**弃用通知：** {% data variables.product.prodname_dotcom %} 将停止使用查询参数向 API 验证。 Authenticating to the API should be done with [HTTP basic authentication](/v3/auth/#via-oauth-and-personal-access-tokens).{% if currentVersion == "free-pro-team@latest" %} Using query parameters to authenticate to the API will no longer work on May 5, 2021. {% endif %}有关详细信息，包括预定的限电，请参阅[博客文章](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)。

{% if currentVersion != "free-pro-team@latest" %} Authentication to the API using query parameters while available is no longer supported due to security concerns. 相反，我们建议集成商在标头中移动其访问令牌 `client_id` 或 `client_secret`。 {% data variables.product.prodname_dotcom %} 将宣布删除通过查询参数进行身份验证，并且会提前通知。 {% endif %}

{% endwarning %}
{% endif %}
