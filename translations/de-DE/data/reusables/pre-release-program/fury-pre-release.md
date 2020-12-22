{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Note:** {% data variables.product.prodname_github_app %} Manifests are currently available for developers to preview. To access this API during the preview period, you must provide a custom [media type](/rest/overview/media-types) in the `Accept` header:

```
application/vnd.github.fury-preview+json
```

{% endnote %}
{% endif %}
