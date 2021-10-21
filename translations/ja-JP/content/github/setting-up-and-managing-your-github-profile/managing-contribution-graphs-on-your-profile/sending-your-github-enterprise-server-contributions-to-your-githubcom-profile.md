---
title: GitHub.com プロフィールにGitHub Enterprise Server コントリビューションを伝達する
intro: '{% data variables.product.prodname_dotcom_the_website %} プロフィールにコントリビューションカウントを送ることで、{% data variables.product.prodname_ghe_server %} のあなたの作業をハイライトできます。'
redirect_from:
  - /articles/sending-your-github-enterprise-contributions-to-your-github-com-profile/
  - /articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile
  - /articles/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
  - /github/setting-up-and-managing-your-github-profile/sending-your-github-enterprise-server-contributions-to-your-githubcom-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Profiles
---

{% note %}

**ノート:**
- お客様のアカウント間のコネクションは、<a href="/articles/github-privacy-statement/" class="dotcom-only">GitHub's Privacy Statement</a> が適用されます。また、接続を有効にしているユーザは、<a href="/articles/github-terms-of-service/" class="dotcom-only">GitHub's Terms of Service</a> を承諾するものとします。

- {% data variables.product.prodname_ghe_server %} プロフィールを {% data variables.product.prodname_dotcom_the_website %} プロフィールに接続できるようにするには、サイトの管理者は、{% data variables.product.prodname_github_connect %} を有効化し、かつ、環境間で共有するコントリビューションを有効化する必要があります。 詳しい情報については、{% data variables.product.prodname_ghe_server %} サイト管理者にお問い合わせください。

{% endnote %}

{% data variables.product.prodname_dotcom_the_website %} プロフィールは、過去 90 日間の {% data variables.product.prodname_ghe_server %} コントリビューションのカウントを表示します。 {% data variables.product.prodname_ghe_server %} からの {% data reusables.github-connect.sync-frequency %} コントリビューションのカウントは、プライベートコントリビューションとみなされます。 コミットの詳細は、コントリビューションのカウントであり {% data variables.product.prodname_ghe_server %} で作成されたコントリビューションに限って表示する。

{% data variables.product.prodname_ghe_server %} および {% data variables.product.prodname_dotcom_the_website %} のエンドユーザがプライベートコントリビューションのカウントをパブリックにしたい場合、プライベートコントリビューションのカウントをパブリックにできます。 詳細は「[プライベートコントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile/)」を参照してください。

コントリビューションの計算方法の詳しい情報については、「[プロフィールでコントリビューショングラフを管理する](/articles/managing-contribution-graphs-on-your-profile/)」を参照してください。

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.github-connect.access-profile-settings %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
6. [Contributions] の下で、[**Send my contribution counts to {% data variables.product.prodname_dotcom_the_website %}**] を選択し、[**Update contributions**] をクリックします。 ![コントリビューションを送信するチェックボックスとコントリビューション更新ボタン](/assets/images/help/settings/send-and-update-contributions.png)
