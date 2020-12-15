---
title: スポンサードアカウントでイベントに webhook を設定する
intro: 新しいスポンサーシップを受領したとき、または既存のスポンサーシップに変更があったときにアラートがあるように webhook を設定することができます。
versions:
  free-pro-team: '*'
---

### About webhooks for events in your sponsored account

支払い期間の終了に伴うキャンセルなど、スポンサーシップに対する変更を監視するために、スポンサードユーザまたはスポンサード Organization のアカウントに webhook を作成できます。 When you set up a webhook for your sponsored account, you'll receive updates when sponsorships are created, edited, or deleted. 詳細は、[`スポンサーシップ`webhook イベント](/webhooks/event-payloads/#sponsorship)を参照してください。

### Managing webhooks for events in your sponsored account

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-webhooks-tab %}
{% data reusables.sponsors.add-webhook %}
{% data reusables.sponsors.add-payload-url %}
{% data reusables.sponsors.webhook-content-formatting %}
{% data reusables.sponsors.webhook-secret-token %}
{% data reusables.sponsors.add-active-triggers %}
{% data reusables.sponsors.confirm-add-webhook %}
{% data reusables.sponsors.manage-existing-webhooks %}