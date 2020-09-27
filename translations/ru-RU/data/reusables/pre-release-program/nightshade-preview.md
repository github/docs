{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Note:** The [Repository Transfer API](https://developer.github.com/changes/2017-11-09-repository-transfer-api-preview) is currently available for developers to preview. To access the API, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.nightshade-preview+json
```

{% endnote %}
{% endif %}
