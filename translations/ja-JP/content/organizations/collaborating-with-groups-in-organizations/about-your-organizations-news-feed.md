---
title: Organization のニュースフィードについて
intro: Organization のニュースフィードを使って、その Organization が所有しているリポジトリ上での最近のアクティビティを知ることができます。
redirect_from:
  - /articles/news-feed/
  - /articles/about-your-organization-s-news-feed
  - /articles/about-your-organizations-news-feed
  - /github/setting-up-and-managing-organizations-and-teams/about-your-organizations-news-feed
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Organizationニュースフィード
---

Organization のニュースフィードは、その Organization が所有しているリポジトリ上での他の人々のアクティビティを知らせます。 Organization のニュースフィードを使って、誰かによる Issue あるいはプルリクエストのオープン、クローズ、マージや、ブランチの作成や削除、タグあるいはリリースの作成、Issue、プルリクエスト、コミットへのコメント、あるいは新しいコミットの {% data variables.product.product_name %}へのプッシュを知ることができます。

## Organization のニュースフィードへのアクセス

1. {% data variables.product.signin_link %} to your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.
2. 自分の {% data reusables.user_settings.personal_dashboard %}を開きます。
3. ページの左上隅にあるアカウントコンテキストスイッチャーをクリックします。 ![Enterprise のコンテキストスイッチャーボタン](/assets/images/help/organizations/account_context_switcher.png)
4. Select an organization from the drop-down menu.{% ifversion fpt or ghec %} ![Context switcher menu in dotcom](/assets/images/help/organizations/account-context-switcher-selected-dotcom.png){% else %}
![Context switcher menu in Enterprise](/assets/images/help/organizations/account_context_switcher.png){% endif %}
