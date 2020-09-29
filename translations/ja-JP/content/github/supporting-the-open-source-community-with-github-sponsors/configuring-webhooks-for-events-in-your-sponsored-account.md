---
title: スポンサードアカウントでイベントに webhook を設定する
intro: 新しいスポンサーシップを受領したとき、または既存のスポンサーシップに変更があったときにアラートがあるように webhook を設定することができます。
versions:
  free-pro-team: '*'
---

支払い期間の終了に伴うキャンセルなど、スポンサーシップに対する変更を監視するために、スポンサードユーザまたはスポンサード Organization のアカウントに webhook を作成できます。 スポンサードユーザまたはスポンサード Organization のアカウントに webhook を設定すると、スポンサーシップが作成、編集、削除されたときにアップデートを受け取れます。 詳細は、[`スポンサーシップ`webhook イベント](/webhooks/event-payloads/#sponsorship)を参照してください。

### スポンサードユーザアカウントに対する webhook の管理

{% data reusables.sponsors.navigate-to-dev-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}

### スポンサード Organization に対する webhook の管理

Organizationのオーナーは、スポンサード Organization に webhook を設定できます。

{% data reusables.sponsors.navigate-to-org-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}
