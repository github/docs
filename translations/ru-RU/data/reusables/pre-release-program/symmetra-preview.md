{% if currentVersion != ‘dotcom’ and currentVersion ver_lt "enterprise-server@2.20" %}
{% note %}

**Note:** You can add or edit descriptions in labels. See the [blog post](https://developer.github.com/changes/2018-02-22-label-description-search-preview) for full details. To access this feature during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.symmetra-preview+json
```
{% endnote %}
{% endif %}
