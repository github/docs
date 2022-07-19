---
title: Enterprise のドメインを検証または承認する
shortTitle: ドメインの検証もしくは承認
intro: 'You can verify your ownership of domains with {% data variables.product.company_short %} to confirm the identity of organizations owned by your enterprise account. You can also approve domains where organization members can receive email notifications.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
---

## About verification of domains

ドメインを検証することで、Enterprise アカウントが所有する Organization のプロファイルにリストされている Web サイトとメールアドレスが Enterprise によって管理されていることを確認できます。 Enterpriseアカウントの検証済みドメインは、そのEnterpriseアカウントが所有するすべてのOrganizationに適用されます。

Enterprise アカウントのドメインの所有権を検証すると、プロファイルにドメインがリストされている各 Organization のプロファイルに「検証済み」のバッジが表示されます。 {% data reusables.organizations.verified-domains-details %}

For domains configured at the enterprise level, enterprise owners can verify the identity of organization members by viewing each member's email address within the verified domain. Enterprise owners can also view a list of enterprise members who don't have an email address from a verified domain associated with their user account on {% data variables.product.prodname_dotcom %}. 詳しい情報については「[検証済みドメインのメールアドレスを持っていないメンバーの表示](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)」を参照してください。

Enterprise アカウントのドメインを検証した後、Enterprise アカウントが所有するすべての Organization の検証済みドメインにメール通知を制限できます。 For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."

Enterprise アカウントのメール通知を制限しない場合でも、Organization のオーナーが Organization のメール通知を制限している場合、Organization のメンバーは、Organizationで検証済みあるいは承認済みのドメインに加えて、Enterprise アカウントで検証済みあるいは承認済みのドメインから通知を受信できます。 Organization の通知を制限する方法について詳しくは、「[Organizationのメール通知を制限する](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照してください。

Organizationのオーナーは、自分のOrganizatinのための追加ドメインを検証することもできます。 詳しい情報については「[Organizationのドメインの検証もしくは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。

## About approval of domains

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Enterpriseアカウントのためのドメインを承認したあと、Enterpriseアカウント内のアクティビティに関するメール通知を、検証済みあるいは承認済みのドメイン内のメールアドレスを持つユーザに限定できます。 For more information, see "[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)."

{% ifversion ghec %}To receive email notifications, the owner of the user account must verify the email address on {% data variables.product.product_name %}. 詳しい情報については、「[メールアドレスの検証](/github/getting-started-with-github/verifying-your-email-address)」を参照してください。{% endif %}

Organizationのオーナーは、メールアドレスあるいは承認済みドメインからのメールアドレスにどのユーザアカウントが関連づけられているかを見ることはできません。

Organizationのオーナーは、自分のOrganizatinのための追加ドメインを承認することもできます。 詳しい情報については「[Organizationのドメインの検証もしくは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)」を参照してください。

## Verifying a domain for your enterprise account

Enterprise アカウントのドメイン検証するには、ドメインホスティングサービスでドメインレコードを変更するためのアクセス権が必要です。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. DNS 設定が変更されるまで待ちます。これには、最大 72 時間かかる場合があります。 コマンドラインで `dig` コマンドを実行し、`ENTERPRISE-ACCOUNT` を Enterprise アカウントの名前に置き換え、`example.com` を検証するドメインに置き換えると、DNS 設定が変更されたことを確認できます。 新しい TXT レコードがコマンド出力に表示されているはずです。
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. TXTレコードがDNSに追加されたことを確認したら、上記のステップ1から4までに従い、Enterpriseアカウントの承認及び検証済みのドメインにアクセスしてください。
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. 必要に応じて、Organization のプロフィールに「検証済み」バッジが表示されたら、ドメインホスティングサービスの DNS レコードから TXT エントリを削除します。 ![検証済みバッジ](/assets/images/help/organizations/verified-badge.png)

## Approving a domain for your enterprise account

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.enterprise-accounts.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## 検証済みあるいは承認済みのドメインの削除

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
1. 削除するドメインの右で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックし、続いて[**Delete**]をクリックしてください。 ![ドメインの"削除"](/assets/images/help/organizations/domains-delete.png)
