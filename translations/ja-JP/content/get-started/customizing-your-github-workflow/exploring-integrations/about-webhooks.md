---
title: webhook について
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: webhook は、特定のアクションがリポジトリあるいは Organization で生じたときに外部の Web サーバーへ通知を配信する方法を提供します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% tip %}

**ヒント:** {% data reusables.organizations.owners-and-admins-can %}は Organization の webhook を管理します。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

webhook は、リポジトリあるいは Organization にさまざまなアクションが行われたときに動作します。 たとえば以下のような場合に動作するよう webhook を設定できます:

* リポジトリへのプッシュ
* プルリクエストのオープン
* {% data variables.product.prodname_pages %}サイトの構築
* Team への新しいメンバーの追加

Using the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, you can make these webhooks update an external issue tracker, trigger CI builds, update a backup mirror, or even deploy to your production server.

新しい webhook をセットアップするには、外部サーバーにアクセスでき、関連する技術的な手順に精通している必要があります。 関連付けられるアクションの完全なリストを含む、webhook の作成に関するヘルプについては、「[ webhook](/webhooks)」を参照してください。
