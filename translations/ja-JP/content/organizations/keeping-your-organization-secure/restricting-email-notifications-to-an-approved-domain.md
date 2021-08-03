---
title: メール通知を承認済みドメインに制限する
intro: Organization の情報が個人アカウントに漏れるのを防ぐために、Organization のオーナーは Organization アクティビティに関するメール通知を検証済みドメインに制限できます。
product: '{% data reusables.gated-features.restrict-email-domain %}'
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

### メールの制限について

Organization で制限付きのメール通知が有効になっている場合、メンバーは Organization の検証済みドメインに関連付けられたメールアドレスのみを使用して、Organization のアクティビティに関するメール通知を受信できます。 詳しい情報については [Organization のドメインの検証](/articles/verifying-your-organization-s-domain)を参照してください。

外部のコラボレーターは、検証済みドメインへのメール通知の制限の対象になりません。 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

Enterprise アカウントがオーナーの Organization の場合、Organization のメンバーは、Organization の検証済みドメインに加えて、Enterprise アカウントの検証済みドメインから通知を受け取ることができます。 詳しい情報については、「[Enterprise アカウントのドメインを検証する](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)」を参照してください。

### メール通知を承認済みドメインに制限する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. [**Save**] をクリックします。
