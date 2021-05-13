---
title: 议题
redirect_from:
  - /v3/issues
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

### 议题的自定义媒体类型

以下是议题支持的媒体类型。

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

有关媒体类型的更多信息，请参阅“[自定义媒体类型](/rest/overview/media-types)”。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 受理人

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'assignees' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 评论

议题评论 API 支持列出、查看、编辑和创建对议题和拉取请求的评论。

议题评论使用[这些自定义媒体类型](#custom-media-types)。 您可以在[此处](/rest/overview/media-types)阅读有关 API 中媒体类型使用情况的更多信息。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 事件

议题事件 API 可以返回议题和拉取请求中的活动所触发的不同类型的事件。 议题事件 API 可以返回议题和拉取请求中的活动所触发的不同类型的事件。 有关可以从议题事件 API 接收的特定事件的更多信息，请参阅“[议题事件类型](/developers/webhooks-and-events/issue-event-types)”。 更多信息请参阅“[事件 API](/developers/webhooks-and-events/github-event-types)”。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 标签

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'labels' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 里程碑

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'milestones' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 时间表

时间表事件 API 可以返回议题和拉取请求中的时间表活动所触发的不同类型的事件。 议题事件 API 可以返回议题和拉取请求中的活动所触发的不同类型的事件。 有关可以从议题事件 API 接收的特定事件的更多信息，请参阅“[议题事件类型](/developers/webhooks-and-events/issue-event-types)”。 更多信息请参阅“[GitHub 事件 API](/developers/webhooks-and-events/github-event-types)”。

您可以使用此 API 显示有关议题和拉取请求的信息，或确定应向谁通知议题评论。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'timeline' %}{% include rest_operation %}{% endif %}
{% endfor %}
