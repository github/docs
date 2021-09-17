{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
{% note %}

**ノート:** Issueをロックする際に理由を追加するREST APIを利用できるようになりました。ロックの理由は、IssueやPull Requestを含むレスポンス中で見ることができます。 ロックの理由は、`locked`イベント中でも見ることができます。 この機能は現在プレビューとして開発者が利用できます。 完全な詳細については[ブログポスト](https://developer.github.com/changes/2018-01-10-lock-reason-api-preview)を参照してください。 この機能にアクセスするには、カスタムの[メディアタイプ](/rest/overview/media-types)を`Accept`ヘッダで渡さなければなりません。

```
application/vnd.github.sailor-v-preview+json
```

{% endnote %}
{% endif %}
