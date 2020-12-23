---
title: メール通知を承認済みドメインに制限する
intro: 'Organization の情報が個人アカウントに漏れるのを防ぐために、Organization のオーナーは Organization アクティビティに関するメール通知を検証済みドメインに制限できます。'
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
---

制限されたメール通知が Organization 内で有効な場合、メンバーは Organization の検証済みドメインに関連付けられているメール アドレスで Organization の活動に関するメール通知のみを受信できます。 詳しい情報については [Organization のドメインの検証](/articles/verifying-your-organization-s-domain)を参照してください。

外部のコラボレーターは、検証済みドメインへのメール通知の制限の対象になりません。 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. [Enforcement preferences] の下で、[**Restrict email notifications to domain email**] を選択します。 ![メール通知を検証済みドメインのメールに制限するためのチェックボックス](/assets/images/help/organizations/restrict-email-notifications-to-domain.png)
6. [**Save**] をクリックします。
