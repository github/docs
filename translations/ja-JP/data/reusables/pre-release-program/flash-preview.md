{% note %}

**Note:** New features in the Deployments API on {% data variables.product.product_name %} are currently available during a public beta. 完全な詳細については[ブログポスト](https://developer.github.com/changes/2018-10-16-deployments-environments-states-and-auto-inactive-updates/)を参照してください。

To access the new `environment` parameter, the two new values for the `state` parameter (`in_progress` and `queued`), and use `auto_inactive` on production deployments during the public beta period, you must provide the following custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.flash-preview+json
```

{% endnote %}
