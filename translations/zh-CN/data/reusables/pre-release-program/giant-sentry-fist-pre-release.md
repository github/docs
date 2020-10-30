{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.8" %}
{% note %}

**Note:** {% data variables.giant-sentry-fist.product_name_long %} on {% data variables.product.product_name %} is currently available for developers to preview. To access the API, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.giant-sentry-fist-preview+json
```

{% endnote %}
{% endif %}
