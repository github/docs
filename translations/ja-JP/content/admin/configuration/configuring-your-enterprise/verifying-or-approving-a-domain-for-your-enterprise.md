---
title: Enterprise のドメインを検証または承認する
shortTitle: Verify or approve a domain
intro: '{% data variables.product.company_short %} を使ってドメインの所有権を検証し、エンタープライズ アカウントが所有する組織の ID を確認できます。 また、組織のメンバーがメール通知を受け取ることができるドメインを承認することができます。'
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
ms.openlocfilehash: 6cadd805d10095bb7a7443a86333312fce507617
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147060915'
---
## ドメインの検証について

ドメインを検証することで、Enterprise アカウントが所有する Organization のプロファイルにリストされている Web サイトとメールアドレスが Enterprise によって管理されていることを確認できます。 Enterpriseアカウントの検証済みドメインは、そのEnterpriseアカウントが所有するすべてのOrganizationに適用されます。

Enterprise アカウントのドメインの所有権を検証すると、プロファイルにドメインがリストされている各 Organization のプロファイルに「検証済み」のバッジが表示されます。 {% data reusables.organizations.verified-domains-details %}

エンタープライズ レベルで構成したドメインの場合、エンタープライズ所有者は、検証したドメイン内の各メンバーのメール アドレスを表示して、組織のメンバーの ID を検証することができます。 また、エンタープライズ所有者は、{% data variables.product.prodname_dotcom %} 上のユーザー アカウントに関連付けられた検証済みドメインのメール アドレスを持たないエンタープライズ メンバーの一覧を表示することもできます。 詳細については、「[検証済みドメインのメール アドレスを持たないメンバーの表示](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)」を参照してください。

Enterprise アカウントのドメインを検証した後、Enterprise アカウントが所有するすべての Organization の検証済みドメインにメール通知を制限できます。 詳細については、「[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)」 (Enterprise のメール通知を制限する) を参照してください。

Enterprise アカウントのメール通知を制限しない場合でも、Organization のオーナーが Organization のメール通知を制限している場合、Organization のメンバーは、Organizationで検証済みあるいは承認済みのドメインに加えて、Enterprise アカウントで検証済みあるいは承認済みのドメインから通知を受信できます。 Organization に対する通知の制限について詳しくは、「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」をご覧ください。

Organizationのオーナーは、自分のOrganizatinのための追加ドメインを検証することもできます。 詳細については、[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)に関する記事を参照してください。

## ドメインの承認について

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Enterpriseアカウントのためのドメインを承認したあと、Enterpriseアカウント内のアクティビティに関するメール通知を、検証済みあるいは承認済みのドメイン内のメールアドレスを持つユーザに限定できます。 詳細については、「[Restricting email notifications for your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)」 (Enterprise のメール通知を制限する) を参照してください。

{% ifversion ghec %}メール通知を受け取るには、ユーザー アカウントの所有者が {% data variables.product.product_name %} でメール アドレスを検証する必要があります。 詳細については、「[メール アドレスの確認](/github/getting-started-with-github/verifying-your-email-address)」を参照してください。{% endif %}

Organizationのオーナーは、メールアドレスあるいは承認済みドメインからのメールアドレスにどのユーザアカウントが関連づけられているかを見ることはできません。

Organizationのオーナーは、自分のOrganizatinのための追加ドメインを承認することもできます。 詳細については、[Organization のためのドメインの検証あるいは承認](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)に関する記事を参照してください。

## Enterprise アカウントのドメインを検証する

Enterprise アカウントのドメイン検証するには、ドメインホスティングサービスでドメインレコードを変更するためのアクセス権が必要です。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. DNS 設定が変更されるまで待ちます。これには、最大 72 時間かかる場合があります。 コマンド ラインで `dig` コマンドを実行することで、DNS の構成が変更されたことを確認できます。`ENTERPRISE-ACCOUNT` は Enterprise アカウントの名前に、`example.com` は検証するドメインに置き換えます。 新しい TXT レコードがコマンド出力に表示されているはずです。
   ```shell
   dig _github-challenge-<em>ENTERPRISE-ACCOUNT</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. TXTレコードがDNSに追加されたことを確認したら、上記のステップ1から4までに従い、Enterpriseアカウントの承認及び検証済みのドメインにアクセスしてください。
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. 必要に応じて、Organization のプロフィールに「検証済み」バッジが表示されたら、ドメインホスティングサービスの DNS レコードから TXT エントリを削除します。
![検証済みバッジ](/assets/images/help/organizations/verified-badge.png)

## Enterprise アカウントのドメインを承認する

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## 検証済みあるいは承認済みのドメインの削除

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. 削除するドメインの右にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックした後、 **[削除]** をクリックします。
    ![ドメインの "削除"](/assets/images/help/organizations/domains-delete.png)
