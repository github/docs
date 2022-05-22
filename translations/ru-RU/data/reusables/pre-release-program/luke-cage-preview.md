{% note %}

**Note:** The Protected Branches API now has a setting for requiring a specified number of approving pull request reviews before merging. This feature is currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2018-03-16-protected-branches-required-approving-reviews) for full details. To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.luke-cage-preview+json
```

{% endnote %}
