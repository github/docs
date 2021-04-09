{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**ノート:** {% data variables.product.prodname_github_app %}マニフェストは現在プレビューとして開発者が利用できます。 プレビュー期間中にこのAPIにアクセスするには、カスタムの[メディアタイプ](/rest/overview/media-types)を`Accept`ヘッダで渡さなければなりません。

```
application/vnd.github.fury-preview+json
```

{% endnote %}
{% endif %}
