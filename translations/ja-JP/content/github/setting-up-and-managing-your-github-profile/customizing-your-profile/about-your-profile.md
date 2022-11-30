---
title: プロフィールについて
intro: プロフィールページは、関心のあるリポジトリ、行ったコントリビューション、会話を通じて、あなたの作業の様子を他者に伝えます。
redirect_from:
  - /articles/viewing-your-feeds/
  - /articles/profile-pages/
  - /articles/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

以前の職場、コントリビュートしたプロジェクト、あなたが興味を持っていることなど、他者が知りたいあなたに関する個人情報を略歴に追加できます。 詳細は「[プロフィールに略歴を追加する](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![プロフィールに表示されるプロフィール README ファイル](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

あなたのプロフィールにアクセスすると、あなたがオープンした Issue やプルリクエスト、行ったコミット、レビューしたプルリクエストなど、あなたのコントリビューションのアクティビティのタイムラインが表示されます。 パブリックコントリビューションだけを表示させることも、プライベートな匿名化されたコントリビューションも表示させることもできます。 詳細は「[プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)」または「[プライベートコントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。

あなたのプロフィールにアクセスしたユーザは、次の情報も見ることができます。

- あなたが所有している、もしくはコントリビューションしたリポジトリと Gist。 {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}リポジトリと Gist をプロファイルにピン止めすることで、最も優れた作業を見せることができます。 詳細は「[プロフィールにアイテムをピン止めする](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)」を参照してください。{% endif %}
- Star を付けたリポジトリ。 詳しい情報については、「[Star を付けてリポジトリを保存する](/articles/saving-repositories-with-stars/)」を参照してください。
- あなたが最もアクティブな Organization、リポジトリ、Team でのあなたのアクティビティの概要。 詳しい情報については、「[プロフィール上にアクティビティの概要を表示する](/articles/showing-an-overview-of-your-activity-on-your-profile)」を参照してください。{% if currentVersion == "free-pro-team@latest" %}
- {% data variables.product.prodname_pro %} の使用や、{% data variables.product.prodname_arctic_vault %}、{% data variables.product.prodname_sponsors %}、{% data variables.product.company_short %} 開発者プログラムなどのプログラムへの参加を示すバッジ。 詳細は「[プロフィールをパーソナライズする](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)」を参照してください。{% endif %}

プロフィールにステータスを設定して、可用性に関する情報を提供することもできます。 詳細は「[ステータスを設定する](/articles/personalizing-your-profile/#setting-a-status)」を参照してください。

### 参考リンク

- [プロフィール画像のセットアップ方法](/articles/how-do-i-set-up-my-profile-picture)
- [プロフィールでプライベートコントリビューションを公開または非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [プロフィール上でのコントリビューションの表示](/articles/viewing-contributions-on-your-profile)
