{% ifversion ghes < 2.22 %}
{% note %}

**Note:** You can now use the REST API to add a reason when you lock an issue, and you will see lock reasons in responses that include issues or pull requests. You will also see lock reasons in `locked` events. This feature is currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview) for full details. To access this feature, you must provide a custom [media type](/rest/overview/media-types) in the `Accept` header:

```
application/vnd.github.sailor-v-preview+json
```

{% endnote %}
{% endif %}
