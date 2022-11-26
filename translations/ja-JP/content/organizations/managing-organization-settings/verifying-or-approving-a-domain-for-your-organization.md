---
title: Organizationのためのドメインの検証あるいは承認
intro: 'Organizationのアイデンティティを確認するために、{% data variables.product.company_short %}でドメインの所有権を検証できます。 Organization　のメンバーに{% data variables.product.company_short %}がメール通知を送信できるドメインを承認することもできます。'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
ms.openlocfilehash: 3cdd2954798e8584d5803ea9254d626d9cb37ee5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061747'
---
## ドメイン検証について

Organization のドメインの所有権を検証したあと、「検証済み」バッジが Organization のプロフィールに表示されます。 {% ifversion ghec %}Organization が企業向け利用規約に同意した場合、Organization の所有者は、検証済みドメインにある各メンバーのメール アドレスを見て、Organization メンバーの身元を検証できるようになります。 詳しくは、「[Organization のプロフィール ページについて](/articles/about-your-organization-s-profile/)」および「<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">企業向け利用規約へのアップグレード</a>」をご覧ください。{% endif %}

{% ifversion ghec %}Organization が Enterprise アカウントによって所有されている場合、{% elsif ghes %}{% endif %}Organization 用に検証されたドメインに加えて、Enterprise アカウント用に検証されたドメインの "検証済み" バッジが Organization のプロフィールに表示されます。 Organizationのオーナーは、Enterpriseのオーナーが検証もしくは承認したドメインをすべて見ることができ、OrganizationオーナーがEnterpriseオーナーでもある場合は、それらのドメインを編集できます。 詳細については、「[エンタープライズのドメインの確認または承認](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」を参照してください。

{% ifversion ghec %} {% note %}

**注:** ドメインを検証または承認するには、Organization で {% data variables.product.prodname_ghe_cloud %} を使用している必要があります。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %}Organization のドメインの所有権を検証した後、そのドメインに対する Organization のメール通知を制限することができます。 詳しくは、「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」をご覧ください。
{% endif %}

{% ifversion ghec %}{% data variables.product.prodname_pages %} で使われているカスタム ドメインを検証して、カスタム ドメインが設定されたままになっていながら {% data variables.product.prodname_pages %} のサイトが無効化された、あるいはそのドメインを使用していない状態になっている場合のドメイン乗っ取りを回避することもできます。 詳しくは、「[{% data variables.product.prodname_pages %} のカスタム ドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」をご覧ください。{% endif %}

## ドメインの承認について

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Organizationのためのドメインを承認したあと、Organization内のアクティビティに関するメール通知を、検証済みあるいは承認済みのドメイン内のメールアドレスを持つユーザに限定できます。 詳しくは、「[Organization のメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」をご覧ください。

Enterpriseオーナーは、承認済みドメイン内の通知をどのOrganizationメンバーあるいはメールアドレスが受け取るのかを、見ることはできません。

Enterpriseオーナーは、Enterpriseが所有するOrganizationのための追加ドメインを承認することもできます。 {% ifversion ghec %}詳しくは、「[Enterprise のドメインを検証または承認する](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」をご覧ください。{% endif %}{% ifversion ghes %}詳しくは、「[Enterprise のドメインを検証または承認する](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」をご覧ください。{% endif %}

## Organizationのためのドメインの検証

ドメインを検証するには、ドメインをホストしているサービスでドメインレコードを変更するためのアクセス権が必要です。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. DNS 設定が変更されるまで待ちます。これには、最大 72 時間かかる場合があります。 コマンドラインで `dig` コマンドを実行し、`ORGANIZATION` を Organization の名前に、`example.com` を検証するドメインに置き換えることで、DNS 構成が変更されたことを確認できます。 新しい TXT レコードがコマンド出力に表示されているはずです。
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. DNSにTXTレコードが追加されたことを確認したら、上記のステップ1から3に従い、Organizationの承認済み及び検証済みドメインにアクセスしてください。
{% data reusables.organizations.continue-verifying-domain %}
11. 必要に応じて、Organization のプロフィールページに「検証済み」バッジが表示されたら、ドメインホスティングサービスの DNS レコードから TXT エントリを削除できます。
![検証済みバッジ](/assets/images/help/organizations/verified-badge.png)

## Organizationのためのドメインの承認

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## 検証済みあるいは承認済みのドメインの削除

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %}
1. 削除するドメインの右で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、 **[削除]** をクリックしてください。
    ![ドメインの "削除"](/assets/images/help/organizations/domains-delete.png)
