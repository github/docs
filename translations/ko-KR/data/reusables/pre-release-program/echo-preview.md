{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
{% note %}

**Note:** The team discussions API is currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2018-02-07-team-discussions-api) for full details. To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.echo-preview+json
```
{% endnote %}
{% endif %}
