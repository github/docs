---
title: GitHub Enterprise と GitHub.com の間で統一されたコントリビューションを設定する
intro: 'サイト管理者として {% data variables.product.prodname_github_connect %} を有効にしている場合、エンドユーザに {% data variables.product.prodname_dotcom_the_website %} コントリビューショングラフの {% data variables.product.prodname_enterprise %} からの作業に対する匿名のコントリビューションカウントの表示を許可することができます。'
hidden: true
redirect_from:
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/articles/configuring-unified-contributions-between-github-enterprise-and-githubcom
versions:
  enterprise-server: '*'
---


両方の環境で、{% data variables.product.prodname_github_connect %} および {% data variables.product.prodname_unified_contributions %} を有効にすると、インスタンスのエンドユーザは {% data variables.product.prodname_dotcom_the_website %} アカウントに接続して {% data variables.product.prodname_enterprise %} からのコントリビューションカウントを {% data variables.product.prodname_dotcom_the_website %} に送信することができます。 詳細は「[{% data variables.product.prodname_unified_contributions %} と {% data variables.product.prodname_enterprise %} の間で {% data variables.product.prodname_dotcom_the_website %} を有効にする](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com)」 および「[{% data variables.product.prodname_ghe_server %} コントリビューションを {% data variables.product.prodname_dotcom_the_website %} プロフィールに送信する](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile/)」を参照してください。

サイト管理者が機能を無効にするか、開発者が接続を拒否すると、{% data variables.product.prodname_enterprise %}　コントリビューションカウントは {% data variables.product.prodname_dotcom_the_website %} から削除されます。 開発者がプロフィールを無効にした後に再接続すると、過去 90 日間のコントリビューションカウントが復元されます。

1.  管理シェルで、{% data variables.product.product_location_enterprise %}の{% data variables.product.prodname_unified_contributions %}設定を有効にします。
  ```shell
  $ ghe-config 'app.github.dotcom-contributions-configurable' 'true'
  $ ghe-config-apply
  ```
2. {% data variables.product.prodname_enterprise %} に戻ります。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.business-settings %}
{% data reusables.enterprise-accounts.github-connect-tab %}
7. [Users can share contribution counts to {% data variables.product.prodname_dotcom_the_website %}] で、ドロップダウンメニューを使用して [**Enabled**] をクリックします。
8. {% data variables.product.prodname_dotcom_the_website %} にリダイレクトされた後、接続済みのユーザアカウントに {% data variables.product.prodname_enterprise %} コントリビューションアカウントを書き込むには、{% data variables.product.prodname_github_app %} をアップグレードする必要があります。 接続済みの {% data variables.product.prodname_dotcom_the_website %} Organization の Organization 管理者は、`external_contributions` 権限で {% data variables.product.prodname_github_app %} のアップグレードを承認する必要があります。

