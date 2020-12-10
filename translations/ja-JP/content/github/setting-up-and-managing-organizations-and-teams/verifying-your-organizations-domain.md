---
title: Organization のドメインを検証する
intro: 'Organization が管理しているドメインを検証して、{% data variables.product.product_name %} で Organization のアイデンティティを確認できます。'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
versions:
  free-pro-team: '*'
---

{% data variables.product.product_name %} 上のドメインを確認するには、Organization のコードオーナー権限が必要です。 詳細は「[Organization の権限レベル](/articles/permission-levels-for-an-organization)」を参照してください。 ドメインホスティングサービスでドメインレコードを変更するためのアクセスも必要になります。

Organization のドメインの所有権を検証したあと、「検証済み」バッジが Organization のプロフィールに表示されます。 Organization が {% data variables.product.prodname_ghe_cloud %} 上にあり、企業向け利用規約に同意した場合、Organization のオーナーは、検証済みドメインにある各メンバーのメールアドレスを見て、Organization メンバーの身元を検証できるようになります。 詳細は「[Organization のプロフィールページについて](/articles/about-your-organization-s-profile/)」および「[企業利用規約にアップグレードする](/articles/upgrading-to-the-corporate-terms-of-service)」を参照してください。

「検証済み」バッジを表示するには、Organization のプロフィールに表示されるウェブサイトとメールの情報が、検証済みのドメインと一致している必要があります。 Organization のプロフィールに表示されているウェブサイトとメールアドレスが異なるドメインでホストされている場合は、両方のドメインを検証する必要があります。

{% note %}

**メモ:** Organization: のプロフィールに表示されているメールアドレスとウェブサイトで同じドメインのバリアントが使用されている場合は、両方のバリアントを確認する必要があります。 たとえば、Organization のプロフィールにウェブサイト `www.example.com` とメールアドレス `info@example.com` が表示されている場合、`www.example.com` と `example.com` の両方を検証する必要があります。

{% endnote %}

{% data variables.product.prodname_ghe_cloud %} では、Organization のドメインの所有権を検証したあと、その Organization へのメール通知を制限することができます。 詳しい情報については「[メール通知を承認済みドメインに制限する](/articles/restricting-email-notifications-to-an-approved-domain)」を参照してください。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.verified-domains %}
5. [**Add a domain**] をクリックします。 ![[Add a domain] ボタン](/assets/images/help/organizations/add-a-domain-button.png)
6. ドメインフィールドに検証するドメインを入力し、[**Add domain**] をクリックします。 ![[Add a domain] フィールド](/assets/images/help/organizations/add-domain-field.png)
7. ドメインホスティングサービスで DNS TXT レコードを作成するには、「**DNS TXT レコードを追加する**」の手順に従ってください。 DNS 設定が変更されるまでに最大 72 時間かかることがあります。 DNS 設定が変更されたら、次のステップに進みます。 ![DNS テキストレコードを作成するための手順](/assets/images/help/organizations/create-dns-txt-record-instructions.png)

   {% tip %}

   **ヒント:** コマンドラインで ` dig ` コマンドを実行すると、DNS 設定が変更されたことを確認できます。 コマンド例では、`ORGANIZATION` を Organization の名前に、`example.com` を確認するドメインに置き換えます。 新しい TXT レコードがコマンド出力に表示されているはずです。

   ```shell
   $ dig _github-challenge-<em>ORGANIZATION</em>.<em>example.com</em> +nostats +nocomments +nocmd TXT
   ```

   {% endtip %}

8. TXT レコードが DNS に追加されたことを確認したら、組織の設定の [Verified domains] タブに移動します。 [Verified domains] タブを探すには、上記のステップ 1 〜 4 を実行します。 ![保留ドメインを含む確認済みドメイン設定ページ](/assets/images/help/organizations/pending-domain-verification.png)
9. 検証待ちのドメインの横にある {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} をクリックし、[**Continue verifying**] をクリックします。 ![ドメインの検証を続行するボタン](/assets/images/help/organizations/continue-verifying-domain.png)
10. [**Verify domain**] をクリックします。 ![ドメイン検証ボタン](/assets/images/help/organizations/verify-domain-final-button.png)
11. 必要に応じて、Organization のプロフィールページに「検証済み」バッジが表示されたら、ドメインホスティングサービスの DNS レコードから TXT エントリを削除できます。 ![検証済みバッジ](/assets/images/help/organizations/verified-badge.png)
