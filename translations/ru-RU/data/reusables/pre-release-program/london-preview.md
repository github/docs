{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:** Enabling or disabling automated security fixes is currently available for developers to preview. To access this new endpoint during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.london-preview+json
```

{% endnote %}
{% endif %}
