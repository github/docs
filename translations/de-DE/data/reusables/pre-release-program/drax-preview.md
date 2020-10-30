{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.13" %}
{% note %}

**Note:** The [Licenses API](https://developer.github.com/changes/2015-03-09-licenses-api/) is currently available for developers to preview. To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.drax-preview+json
```

{% endnote %}
{% endif %}
