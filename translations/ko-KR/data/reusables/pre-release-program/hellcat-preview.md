{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Note:** The Nested Teams API is currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2017-08-30-preview-nested-teams) for full details. To access the API, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.hellcat-preview+json
```
{% endnote %}

{% endif %}
