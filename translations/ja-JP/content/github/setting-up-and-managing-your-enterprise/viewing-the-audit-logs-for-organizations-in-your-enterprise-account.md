---
title: Enterprise アカウントで Organization の監査ログを見る
intro: Enterprise オーナーは、Enterprise アカウントが所有するすべての Organization からのアクションが集約された Audit log を表示できます。
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/viewing-the-audit-logs-for-organizations-in-your-business-account/
  - /articles/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

各 Audit log エントリには、次のようなイベントに関する適切な情報が表示されます:

- アクションが実行された Organization
- アクションを実行したユーザ
- アクションの対象となったリポジトリ
- 実行されたアクション
- アクションが実行された国
- アクションが発生した日時

Audit log で特定のイベントを検索したり、Audit log データをエクスポートしたりできます。 Audit log の検索と特定の Organization イベントの詳細については、「[Organization の Audit log をレビューする](/articles/reviewing-the-audit-log-for-your-organization)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
