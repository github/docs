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

### About email restrictions

When restricted email notifications are enabled in an organization, members can only use an email address associated with the organization's verified domains to receive email notifications about organization activity. 詳しい情報については [Organization のドメインの検証](/articles/verifying-your-organization-s-domain)を参照してください。

外部のコラボレーターは、検証済みドメインへのメール通知の制限の対象になりません。 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/github/setting-up-and-managing-organizations-and-teams/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

If your organization is owned by an enterprise account, organization members will be able to receive notifications from any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

### メール通知を承認済みドメインに制限する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. [**Save**] をクリックします。
