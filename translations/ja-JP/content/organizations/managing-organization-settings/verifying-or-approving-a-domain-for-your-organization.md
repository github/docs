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
  ghes: '>=3.2'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: ドメインの検証もしくは承認
---

## ドメイン検証について

Organization のドメインの所有権を検証したあと、「検証済み」バッジが Organization のプロフィールに表示されます。 {% ifversion ghec %}Organizationが企業向け利用規約に同意した場合、Organizationのオーナーは、検証済みドメインにある各メンバーのメールアドレスを見て、Organizationメンバーの身元を検証できるようになります。 詳しい情報については「[Organizationのプロフィールページについて](/articles/about-your-organization-s-profile/)」および「<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">企業利用規約にアップグレードする</a>」を参照してください。{% endif %}

{% ifversion ghec %}Enterprise アカウントがオーナーの Organization の場合、{% elsif ghes %}{% endif %}Organization による検証済みのドメインに加えて、Enterprise アカウントで検証されたドメインの「検証済み」バッジが Organization のプロフィールに表示されます。 Organizationのオーナーは、Enterpriseのオーナーが検証もしくは承認したドメインをすべて見ることができ、OrganizationオーナーがEnterpriseオーナーでもある場合は、それらのドメインを編集できます。 詳しい情報については「[Enterpriseのためのドメインの検証あるいは承認](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」を参照してください。

{% ifversion ghec %}
{% note %}

**ノート:** ドメインを検証あるいは承認するには、Organizationは{% data variables.product.prodname_ghe_cloud %}を使っていなければなりません。 {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes > 3.1 %}
Organization のドメインの所有権を検証したあと、その Organizationへのメール通知を制限することができます。 詳しい情報については「[Organizationのメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照してください。
{% endif %}

{% ifversion ghec %}{% data variables.product.prodname_pages %}で使われているカスタムドメインを検証して、カスタムドメインが設定されたままになっていながら{% data variables.product.prodname_pages %}のサイドが無効化された、あるいはそのドメインを使用していない状態になっている場合のドメイン乗っ取りを回避することもできます。 詳しい情報については「[{% data variables.product.prodname_pages %}のカスタムドメインの検証](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)」を参照してください。{% endif %}

## ドメインの承認について

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

Organizationのためのドメインを承認したあと、Organization内のアクティビティに関するメール通知を、検証済みあるいは承認済みのドメイン内のメールアドレスを持つユーザに限定できます。 詳しい情報については「[Organizationのメール通知の制限](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)」を参照してください。

Enterpriseオーナーは、承認済みドメイン内の通知をどのOrganizationメンバーあるいはメールアドレスが受け取るのかを、見ることはできません。

Enterpriseオーナーは、Enterpriseが所有するOrganizationのための追加ドメインを承認することもできます。 {% ifversion ghec %}詳しい情報については「[Enterpriseのドメインの検証もしくは承認](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」を参照してください。{% endif %}{% ifversion ghes > 3.1 %}詳しい情報については「[Enterpriseのドメインの検証もしくは承認](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)」を参照してください。{% endif %}

## Organizationのためのドメインの検証

ドメインを検証するには、ドメインをホストしているサービスでドメインレコードを変更するためのアクセス権が必要です。

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. DNS 設定が変更されるまで待ちます。これには、最大 72 時間かかる場合があります。 コマンドラインで `dig` コマンドを実行し、`ORGANIZATION` を Organization の名前に、`example.com` を検証するドメインに置き換えることで、DNS 設定が変更されたことを確認できます。 新しい TXT レコードがコマンド出力に表示されているはずです。
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
1. DNSにTXTレコードが追加されたことを確認したら、上記のステップ1から3に従い、Organizationの承認済み及び検証済みドメインにアクセスしてください。
{% data reusables.organizations.continue-verifying-domain %}
11. 必要に応じて、Organization のプロフィールページに「検証済み」バッジが表示されたら、ドメインホスティングサービスの DNS レコードから TXT エントリを削除できます。 ![検証済みバッジ](/assets/images/help/organizations/verified-badge.png)

## Organizationのためのドメインの承認

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
{% data reusables.organizations.add-a-domain %}
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.domains-approve-it-instead %}
{% data reusables.organizations.domains-approve-domain %}

## 検証済みあるいは承認済みのドメインの削除

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.verified-domains %}
1. 削除するドメインの右で、{% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}をクリックし、続いて[**Delete**]をクリックしてください。 ![ドメインの"削除"](/assets/images/help/organizations/domains-delete.png)
