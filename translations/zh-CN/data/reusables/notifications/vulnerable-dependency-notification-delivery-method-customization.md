{% if currentVersion == "free-pro-team@latest" %}
您可以选择
您关注或已订阅安全警报通知的仓库中 {% data variables.product.prodname_dependabot_alerts %} 通知的递送方式和频率。
{% else %}
您可以选择
您关注的仓库中{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}通知的递送方式，以及您接收通知的频率。
{% endif %}
