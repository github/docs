---
title: webhook について
redirect_from:
  - /post-receive-hooks/
  - /articles/post-receive-hooks/
  - /articles/creating-webhooks/
  - /articles/about-webhooks
intro: webhook は、特定のアクションがリポジトリあるいは Organization で生じたときに外部の Web サーバーへ通知を配信する方法を提供します。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% tip %}

**ヒント:** {% data reusables.organizations.owners-and-admins-can %}は Organization の webhook を管理します。 {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

webhook は、リポジトリあるいは Organization にさまざまなアクションが行われたときに動作します。 たとえば以下のような場合に動作するよう webhook を設定できます:

* リポジトリへのプッシュ
* プルリクエストのオープン
* {% data variables.product.prodname_pages %}サイトの構築
* Team への新しいメンバーの追加

{% data variables.product.product_name %}API を使えば、これらの webhook に外部の Issue トラッカーを更新させたり、CI ビルドを走らせたり、バックアップミラーを更新したり、さらにはプロダクションサーバーへデプロイしたりすることができます。

新しい webhook をセットアップするには、外部サーバーにアクセスでき、関連する技術的な手順に精通している必要があります。 関連付けられるアクションの完全なリストを含む、webhook の作成に関するヘルプについては、「[ webhook](/webhooks)」を参照してください。
