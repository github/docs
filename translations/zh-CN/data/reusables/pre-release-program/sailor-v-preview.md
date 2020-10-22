{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**注：**您现在可以使用 REST API 在锁定议题时添加原因，并且在包含议题或拉取请求的响应中会看到锁定原因。 在 `locked` 事件中也会看到锁定原因。 此功能目前可供开发者预览。 有关完整详情，请参阅[博客文章](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)。 要访问此功能，必须在 `Accept` 标头中提供自定义[媒体类型](/v3/media)：

```
application/vnd.github.sailor-v-preview+json
```

{% endnote %}
{% endif %}
