{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**弃用通知：** {% data variables.product.prodname_dotcom %} 将停止使用查询参数向 API 验证。 向 API 验证应使用 [HTTP 基本身份验证](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens)完成。{% if currentVersion == "free-pro-team@latest" %} 使用查询参数向 API 验证在 2021 年 5 月 5 日将不再有效。 {% endif %}有关详细信息，包括预定的限电，请参阅[博客文章](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/)。

{% if enterpriseServersions contains currentversion or currentversion == "github-ae@latest" %} 使用查询参数向 API 验证仍然可用，但出于安全考虑不再支持。 相反，我们建议集成商在标头中移动其访问令牌 `client_id` 或 `client_secret`。 {% data variables.product.prodname_dotcom %} 将宣布删除通过查询参数进行身份验证，并且会提前通知。 {% endif %}

{% endwarning %}
{% endif %}
