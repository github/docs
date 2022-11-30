---
title: webhook について
intro: インテグレーションの構築とセットアップに役立つwebhookの動作の基本を学んでください。
redirect_from:
  - /webhooks
  - /developers/webhooks-and-events/about-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Webhooks
---

Webhooks allow you to build or set up integrations, such as [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) or [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/), which subscribe to certain events on GitHub.com. それらのイベントのいずれかがトリガーされると、webhookに設定されたURLにHTTP POSTペイロードが送信されます。 webhookは、外部のIssueトラッカーを更新したり、CIビルドをトリガーしたり、バックアップミラーを更新したり、さらにはプロダクションサーバーへのデプロイをしたりするのに利用できます。 想像力が及ぶかぎりのことが可能です。

webhookは、{% ifversion ghes or ghae %} [{% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#global-webhooks/)、{% endif %}[Organization][org-hooks]、特定の[リポジトリ][repo-hooks]、{% data variables.product.prodname_github_app %}にインストールできます。 インストールされると、1つ以上のサブスクライブされたイベントが発生するたびに、webhookが送信されます。

作成できるwebhookは、それぞれのインストールターゲット{% ifversion ghes or ghae %}({% data variables.product.prodname_ghe_server %} のインスタンス、特定のOrganization、あるいは特定のリポジトリ){% else %}(特定のOrganizationもしくは特定のリポジトリ){% endif %}上の各イベントに対して最大{% ifversion ghes or ghae %}250{% else %}20{% endif %}です。

## イベント

{% data reusables.webhooks.webhooks_intro %}

それぞれのイベントは、Organizationやリポジトリに生じうる一連のアクションに対応します。 たとえば、`issues`イベントにサブスクライブしているなら、Issueのオープン、クローズ、ラベル付けなどが生じるたびに詳細なペイロードを受信することになります。

For a complete list of available webhook events and their payloads, see "[Webhook events and payloads](/developers/webhooks-and-events/webhook-events-and-payloads)."

## Pingイベント

{% data reusables.webhooks.ping_short_desc %}

`ping`イベントのwebhookのペイロードに関する詳細な情報については[`ping`](/webhooks/event-payloads/#ping)イベントを参照してください。

[org-hooks]: /rest/reference/orgs#webhooks/
[repo-hooks]: /rest/reference/repos#hooks
