{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Note:** Uninstalling {% data variables.product.prodname_github_app %}s and revoking an app's installation token are currently available for developers to preview. To access the new endpoint during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.gambit-preview+json
```

{% endnote %}
{% endif %}
