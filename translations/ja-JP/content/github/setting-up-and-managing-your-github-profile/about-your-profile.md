---
title: プロフィールについて
intro: 'プロフィールページは、関心のあるリポジトリ、行ったコントリビューション、会話を通じて、あなたの作業の様子を他者に伝えます。'
redirect_from:
  - /articles/viewing-your-feeds/
  - /articles/profile-pages/
  - /articles/about-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

以前の職場、コントリビュートしたプロジェクト、あなたが興味を持っていることなど、他者が知りたいあなたに関する個人情報を略歴に追加できます。 詳細は「[プロフィールに略歴を追加する](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![プロフィールに表示されるプロフィール README ファイル](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

あなたのプロフィールにアクセスすると、あなたがオープンした Issue やプルリクエスト、行ったコミット、レビューしたプルリクエストなど、あなたのコントリビューションのアクティビティのタイムラインが表示されます。 パブリックコントリビューションだけを表示させることも、プライベートな匿名化されたコントリビューションも表示させることもできます。 詳細は「[プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)」または「[プライベートコントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。

People who visit your profile can also see the following information.

- あなたが所有している、もしくはコントリビューションしたリポジトリと Gist。 {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}You can showcase your best work by pinning repositories and gists to your profile. 詳細は「[プロフィールにアイテムをピン止めする](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)」を参照してください。{% endif %}
- Star を付けたリポジトリ。 For more information, see "[Saving repositories with stars](/articles/saving-repositories-with-stars/)."
- あなたが最もアクティブな Organization、リポジトリ、Team でのあなたのアクティビティの概要。 For more information, see "[Showing an overview of your activity on your profile](/articles/showing-an-overview-of-your-activity-on-your-profile)."{% if currentVersion == "free-pro-team@latest" %}
- Badges that show if you use {% data variables.product.prodname_pro %} or participate in programs like the {% data variables.product.prodname_arctic_vault %}, {% data variables.product.prodname_sponsors %}, or the {% data variables.product.company_short %} Developer Program. 詳細は「[プロフィールをパーソナライズする](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)」を参照してください。{% endif %}

You can also set a status on your profile to provide information about your availability. 詳細は「[ステータスを設定する](/articles/personalizing-your-profile/#setting-a-status)」を参照してください。

### 参考リンク

- [プロフィール画像のセットアップ方法](/articles/how-do-i-set-up-my-profile-picture)
- [プロフィールでプライベートコントリビューションを公開または非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [プロフィール上でのコントリビューションの表示](/articles/viewing-contributions-on-your-profile)
