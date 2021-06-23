{% note %}

**ノート:** プロジェクトカードの詳細は、プロジェクト関連のissue及びタイムラインイベントのREST APIレスポンス中に示されるようになりました。 この機能は、プレビューとして開発者が利用できるようになりました。 詳細については[ブログポスト](https://developer.github.com/changes/2018-09-05-project-card-events)を参照してください。

`project_card` 属性を受け取るには、リポジトリでプロジェクトボードが[有効化](/articles/disabling-project-boards-in-a-repository)されていなければならず、カスタムの[メディアタイプ](/rest/overview/media-types)を`Accept`ヘッダで提供しなければなりません。

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
