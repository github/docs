{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.12" %}
{% note %}

**Note:** Protected Branches API can now manage a setting for requiring signed commits. This feature is currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures) for full details. To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.zzzax-preview+json
```

{% endnote %}
{% endif %}
