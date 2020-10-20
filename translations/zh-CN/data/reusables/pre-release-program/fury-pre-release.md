{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Note:** {% data variables.product.prodname_github_app %} Manifests are currently available for developers to preview. 要在预览期间访问此 API，必须在 `Accept` 标头中提供自定义[媒体类型](/v3/media)：

```
application/vnd.github.fury-preview+json
```

{% endnote %}
{% endif %}
