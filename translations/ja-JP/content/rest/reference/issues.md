---
title: 問題
redirect_from:
  - /v3/issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Issue のカスタムメディアタイプ

Issue についてサポートされているメディアタイプは次のとおりです。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

メディアタイプの詳しい情報については、「[カスタムメディアタイプ](/rest/overview/media-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## アサインされた人

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assignees' %}{% include rest_operation %}{% endif %}
{% endfor %}

## コメント

Issue コメント API は、Issue およびプルリクエストに関するリスト、表示、編集、コメントの作成に対応しています。

Issue コメントは、[3 つのカスタムメディアタイプ](#custom-media-types)を使用します。 API におけるメディアタイプの使用に関する詳細は、[こちら](/v3/media/)を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## イベント

Issue イベント API は、Issue およびプルリクエストでのアクティビティによってトリガーされるイベントのタイプを返します。 The Issue Events API can return different types of events triggered by activity in issues and pull requests. For more information about the specific events that you can receive from the Issue Events API, see "[Issue event types](/developers/webhooks-and-events/issue-event-types)." 詳細は、「[イベント API](/developers/webhooks-and-events/github-event-types)」を参照してください。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## ラベル

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'labels' %}{% include rest_operation %}{% endif %}
{% endfor %}

## マイルストーン

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'milestones' %}{% include rest_operation %}{% endif %}
{% endfor %}

## タイムライン

タイムラインイベント API は、Issue およびプルリクエストでのタイムラインアクティビティによってトリガーされるイベントのタイプを返します。 The Issue Events API can return different types of events triggered by activity in issues and pull requests. For more information about the specific events that you can receive from the Issue Events API, see "[Issue event types](/developers/webhooks-and-events/issue-event-types)." 詳細は、「[GitHub イベント API](/developers/webhooks-and-events/github-event-types)」を参照してください。

この API を使用すると、Issue およびプルリクエストに関する情報を表示したり、Issue コメントを通知する相手を決定したりできます。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'timeline' %}{% include rest_operation %}{% endif %}
{% endfor %}
