{% note %}

**Note:** The `inactive` state and the `log_url`, `environment_url`, and `auto_inactive` parameters are currently available for developers to preview. 完全な詳細については[ブログポスト](https://developer.github.com/changes/2016-04-06-deployment-and-deployment-status-enhancements)を参照してください。

To access the API during the preview period, you must provide a custom [media type](/v3/media) in the `Accept` header:

```
application/vnd.github.ant-man-preview+json
```

{% endnote %}
