{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Note:** The Draft Pull Request API is currently available for developers to preview. You can use this API to create a draft pull request or see whether a pull request is in draft state. See the [blog post](https://developer.github.com/changes/2019-02-14-draft-pull-requests) preview for more details. To access the new `draft` parameter during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:
```
application/vnd.github.shadow-cat-preview+json
```

{% endnote %}
{% endif %}
