{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:** If an issue is opened via a {% data variables.product.prodname_github_app %}, the response will include the `performed_via_github_app` object with information about the {% data variables.product.prodname_github_app %}. For more information, see the [related blog post](https://developer.github.com/changes/2016-09-14-Integrations-Early-Access).

To receive the `performed_via_github_app` object in the response, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.machine-man-preview
```

{% endnote %}
{% endif %}
