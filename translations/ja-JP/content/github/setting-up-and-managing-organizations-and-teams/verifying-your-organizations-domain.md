---
title: Organization のドメインを検証する
intro: 'Organization が管理しているドメインを検証して、{% data variables.product.product_name %} で Organization のアイデンティティを確認できます。'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
---

### About domain verification

{% data variables.product.product_name %} 上のドメインを確認するには、Organization のコードオーナー権限が必要です。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。 ドメインホスティングサービスでドメインレコードを変更するためのアクセスも必要になります。

Organization のドメインの所有権を検証したあと、「検証済み」バッジが Organization のプロフィールに表示されます。 Organization が {% data variables.product.prodname_ghe_cloud %} 上にあり、企業向け利用規約に同意した場合、Organization のオーナーは、検証済みドメインにある各メンバーのメールアドレスを見て、Organization メンバーの身元を検証できるようになります。 詳細は「[Organization のプロフィールページについて](/articles/about-your-organization-s-profile/)」および「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

If your organization is owned by an enterprise account, a "Verified" badge will display on your organization's profile for any domains verified for the enterprise account, in addition to any domains verified for the organization. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

{% data reusables.organizations.verified-domains-details %}

{% data variables.product.prodname_ghe_cloud %} では、Organization のドメインの所有権を検証したあと、その Organization へのメール通知を制限することができます。 詳しい情報については「[メール通知を承認済みドメインに制限する](/articles/restricting-email-notifications-to-an-approved-domain)」を参照してください。

### Organization のドメインを検証する

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. [**Add a domain**] をクリックします。 ![[Add a domain] ボタン](/assets/images/help/organizations/add-a-domain-button.png)
{% data reusables.organizations.add-domain %}
{% data reusables.organizations.add-dns-txt-record %}
1. Wait for your DNS configuration to change, which may take up to 72 hours. You can confirm your DNS configuration has changed by running the `dig` command on the command line, replacing `ORGANIZATION` with the name of your organization and `example.com` with the domain you'd like to verify. 新しい TXT レコードがコマンド出力に表示されているはずです。
   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```
8. TXT レコードが DNS に追加されたことを確認したら、組織の設定の [Verified domains] タブに移動します。 [Verified domains] タブを探すには、上記のステップ 1 〜 4 を実行します。 ![保留ドメインを含む確認済みドメイン設定ページ](/assets/images/help/organizations/pending-domain-verification.png)
{% data reusables.organizations.continue-verifying-domain %}
11. 必要に応じて、Organization のプロフィールページに「検証済み」バッジが表示されたら、ドメインホスティングサービスの DNS レコードから TXT エントリを削除できます。 ![検証済みバッジ](/assets/images/help/organizations/verified-badge.png)
