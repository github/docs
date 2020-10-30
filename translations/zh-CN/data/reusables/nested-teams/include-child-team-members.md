{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
如果您传递 `hellcat-preview` 媒体类型，团队成员将包含子团队的成员。
{% else %}
团队成员将包括子团队的成员。
{% endif %}
