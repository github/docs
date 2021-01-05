---
title: スキーマプレビュー
intro: '{% data variables.product.prodname_dotcom %}のGraphQLスキーマの今後の機能や変更を、{% data variables.product.prodname_dotcom %}のGraphQL APIに追加される前にプレビューできます。'
redirect_from:
  - /v4/previews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### スキーマプレビューについて

プレビュー期間中は、開発者からのフィードバックに基づいて機能を変更することがあります。 変更をする際には、事前の通知なく[開発者blog](https://developer.github.com/changes/)でアナウンスします。

スキーマプレビューにアクセスするには、リクエストの` Accept`ヘッダー内でカスタムの[メディアタイプ](/rest/overview/media-types)を提供しなければなりません。 各プレビューの機能ドキュメントに、どのカスタムメディアタイプを提供するのかが示されています。

{% note %}

**ノート:** 現時点では、プレビューのGraphQLスキーマメンバーは、Explorerからはアクセスできません。

{% endnote %}

{% for preview in graphql.previewsForCurrentVersion %}
### {{ preview.title }}

{{ preview.description }}

このプレビューを切り替えて以下のスキーマメンバーにアクセスするには、`Accept`ヘッダー内でカスタムのメディアタイプを渡さなければなりません。

```
{{ preview.accept_header }}
```

プレビューされたスキーマメンバー：

{% for schemaMemberPath in preview.toggled_on %}
- `{{ schemaMemberPath }}`
{% endfor %}

{% if preview.announcement %}
**アナウンス：** [{{ preview.announcement.date }}]({{ preview.announcement.url }})
{% endif %}

{% if preview.updates %}
{% for update in preview.updates %}
**更新：** [{{ update.date }}]({{ update.url }})
{% endfor %}
{% endif %}

{% endfor %}
