{% if currentVersion != "free-pro-team@latest" %}
{% note %}

**Note:** When a GitHub Enterprise instance is in private mode, site and repository administrators can enable anonymous Git access for a public repository. This feature is currently available for developers to preview. See the [blog post](https://blog.github.com/2018-07-12-introducing-enterprise-2-14/) for full details.

To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.x-ray-preview+json
```

{% endnote %}
{% endif %}
