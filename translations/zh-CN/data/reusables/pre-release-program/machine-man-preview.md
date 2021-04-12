{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**注：**要使用 GitHub 应用程序访问 API，您必须在请求的 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)。

`application/vnd.github.machine-man-preview+json`

{% endnote %}
{% endif %}
