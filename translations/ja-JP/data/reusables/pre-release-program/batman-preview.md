{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
{% note %}

**Note:**  Using the {% data variables.product.prodname_component_kit %} API is currently available for developers to preview. To access these endpoints during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.batman-preview+json
```

{% endnote %}
{% endif %}
