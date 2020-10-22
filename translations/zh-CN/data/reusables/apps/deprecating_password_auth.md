{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**弃用通知：** {% data variables.product.prodname_dotcom %} 将停止使用密码向 API 验证。  You must now authenticate to the {% data variables.product.prodname_dotcom %} API with an API token, such as an OAuth access token, GitHub App installation access token, or personal access token, depending on what you need to do with the token.{% if currentVersion == "free-pro-team@latest" %} Password authentication to the API will be removed on November 13, 2020.{% endif %} For more information,{% if currentVersion == "free-pro-team@latest" %} including scheduled brownouts,{% endif %} see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/).

{% if currentVersion != "free-pro-team@latest" %} Authenticating to the API using a password is currently available and not yet deprecated in {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} 将宣布弃用，并在删除对此功能的支持之前提前通知。{% endif %}

{% endwarning %}
{% endif %}
