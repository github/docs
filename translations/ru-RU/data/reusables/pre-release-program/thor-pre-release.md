{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.13" %}
{% note %}

**Note:** Team-based review requests in the Review Requests API on {% data variables.product.product_name %} are currently available for developers to preview. See the [blog post](https://developer.github.com/changes/2017-07-26-team-review-request-thor-preview) for full details.

To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.thor-preview+json
```

{% endnote %}
{% endif %}
