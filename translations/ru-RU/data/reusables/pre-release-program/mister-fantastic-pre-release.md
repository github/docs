{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.19" %}
{% note %}

**Note:** {% data variables.mister-fantastic.product_name_long %} contains two additional fields in responses, which developers can preview: `html_url` and `source`. To see these two new fields, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.mister-fantastic-preview+json
```

{% endnote %}
{% endif %}
