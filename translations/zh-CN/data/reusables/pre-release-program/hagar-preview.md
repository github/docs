{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
{% note %}

**Note:** You can now retrieve someone's hovercard information in different contexts using the Hovercard API. This feature is currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2018-03-21-hovercard-api-preview) for full details. To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.hagar-preview+json
```
{% endnote %}
{% endif %}
