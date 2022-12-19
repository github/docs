---
title: Organization のニュースフィードについて
intro: Organization のニュースフィードを使って、その Organization が所有しているリポジトリ上での最近のアクティビティを知ることができます。
redirect_from:
  - /articles/news-feed
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
shortTitle: Organization news feed
ms.openlocfilehash: 2ef8e11cd2ede1fedd284aed3d554bcd658d413e
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130892'
---
Organization のニュースフィードは、その Organization が所有しているリポジトリ上での他の人々のアクティビティを知らせます。 Organization のニュースフィードを使って、誰かによる Issue あるいはプルリクエストのオープン、クローズ、マージや、ブランチの作成や削除、タグあるいはリリースの作成、Issue、プルリクエスト、コミットへのコメント、あるいは新しいコミットの {% data variables.product.product_name %}へのプッシュを知ることができます。

## Organization のニュースフィードへのアクセス

1. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}上のアカウントに対する{% data variables.product.signin_link %}。
2. 自分の {% data reusables.user-settings.personal_dashboard %} を開きます。
3. ページの左上隅にあるアカウントコンテキストスイッチャーをクリックします。
  ![Enterprise のコンテキストスイッチャーボタン](/assets/images/help/organizations/account_context_switcher.png)
4. ドロップダウンメニューから Organization を選択します。{% ifversion fpt or ghec %} ![dotcom のコンテキストスイッチャーメニュー](/assets/images/help/organizations/account-context-switcher-selected-dotcom.png){% else %} ![エンタープライズのコンテキストスイッチャーメニュー](/assets/images/help/organizations/account_context_switcher.png){% endif %}
