{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

{% note %}

**Note:**  You can set the visibility of a repository using the new `visibility` parameter in the [Repositories API](/v3/repos/), and get a repository's visibility with a new response key. 更多信息请参阅[博客帖子](https://developer.github.com/changes/2019-12-03-internal-visibility-changes/)。

To access repository visibility during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.nebula-preview+json
```

{% endnote %}
{% endif %}
