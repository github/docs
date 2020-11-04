{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**注：**{% data variables.product.prodname_github_app %} 清单目前可供开发者预览。 要在预览期间访问此 API，必须在 `Accept` 标头中提供自定义[媒体类型](/v3/media)：

```
application/vnd.github.fury-preview+json
```

{% endnote %}
{% endif %}
