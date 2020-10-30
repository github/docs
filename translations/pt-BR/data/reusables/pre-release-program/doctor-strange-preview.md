{% if currentVersion == "enterprise-server@2.20" %}
{% note %}

**Note:** New endpoints using OAuth tokens as input parameters instead of path parameters are available for developers to preview in the [OAuth Applications API](/v3/apps/oauth_applications/). To access these endpoints during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.doctor-strange-preview+json
```

{% endnote %}
{% endif %}
