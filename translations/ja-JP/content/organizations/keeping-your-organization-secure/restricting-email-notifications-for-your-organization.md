---
title: Organizationのメール通知の制限
intro: Organizationの情報が個人のメールアカウントに漏れてしまうことを避けるために、メンバーがOrganizationのアクティビティに関するメール通知を受信できるドメインを制限できます。
product: '{% data reusables.gated-features.restrict-email-domain %}'
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain/
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.2'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
---

### メールの制限について

Organization で制限付きのメール通知が有効になっている場合、メンバーは Organization の検証済みあるいは承認済みドメインに関連付けられたメールアドレスのみを使用して、Organization のアクティビティに関するメール通知を受信できます。

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

詳しい情報については「[Organizationのドメインの検証もしくは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。

{% data reusables.notifications.email-restrictions-verification %}

外部のコラボレーターは、検証済みあるいは承認済みドメインへのメール通知の制限の対象になりません。 外部コラボレーターに関する詳しい情報については「[Organization の権限レベル](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)」を参照してください。

Enterprise アカウントがオーナーの Organization の場合、Organization のメンバーは、Organization の検証済みあるいは承認済みドメインに加えて、Enterprise アカウントの検証済みあるいは承認済みドメインから通知を受け取ることができます。 詳しい情報については「[Enterpriseアカウントのためのドメインの検証あるいは承認](/github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account)」を参照してください。

### メール通知の制限

Organizationのメール通知を制限できるようにするには、Oraganizationに対して最低1つのドメインを検証あるいは承認するか、EnterpriseのオーナーがEnterpriseアカウントに対して最低1つのドメインを検証あるいは承認しなければなりません。

Organizationの検証済み及び承認済みドメインに関する詳しい情報については「[Organizationのドメインの検証もしくは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.restrict-email-notifications %}
6. [**Save**] をクリックします。
