---
title: プロフィールについて
intro: プロフィールページは、関心のあるリポジトリ、行ったコントリビューション、会話を通じて、あなたの作業の様子を他者に伝えます。
redirect_from:
  - /articles/viewing-your-feeds
  - /articles/profile-pages
  - /articles/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
ms.openlocfilehash: edbe34a38c2ab23de22e3b5ea466e35276c6bc35
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '146199955'
---
以前の職場、コントリビュートしたプロジェクト、あなたが興味を持っていることなど、他者が知りたいあなたに関する個人情報を略歴に追加できます。 詳細については、「[プロフィールに略歴を追加する](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)」を参照してください。

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

![プロフィールに表示されるプロフィール README ファイル](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

あなたのプロフィールにアクセスすると、あなたがオープンした Issue やプルリクエスト、行ったコミット、レビューしたプルリクエストなど、あなたのコントリビューションのアクティビティのタイムラインが表示されます。 パブリックコントリビューションだけを表示させることも、プライベートな匿名化されたコントリビューションも表示させることもできます。 詳細については、「[プロフィール ページでコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)」または「[プライベート コントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)」を参照してください。

あなたのプロフィールにアクセスしたユーザは、次の情報も見ることができます。

- あなたが所有している、もしくはコントリビューションしたリポジトリと Gist。 {% ifversion fpt or ghes or ghec %}リポジトリと gist をプロフィールにピン留めすることで、自分の最も優れた作業を紹介できます。 詳細については、「[プロフィールにアイテムをピン留めする](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)」を参照してください。{% endif %}
- 星を付けたリポジトリ{% ifversion fpt or ghec %}およびリストに編成したリポジトリ{% endif %}。詳細については、「[星を付けてリポジトリを保存する](/articles/saving-repositories-with-stars/)」を参照してください。
- あなたが最もアクティブな Organization、リポジトリ、Team でのあなたのアクティビティの概要。 詳細については、「[プロフィールでアクティビティの概要を表示する](/articles/showing-an-overview-of-your-activity-on-your-profile)」を参照してください。{% ifversion fpt or ghec %}
- アクティビティを強調し、{% data variables.product.prodname_pro %} の使用や {% data variables.product.prodname_arctic_vault %}、{% data variables.product.prodname_sponsors %}、{% data variables.product.company_short %} 開発者プログラムなどのプログラムへの参加を示すバッジとアチーブメント。 詳細については、「[プロフィールをパーソナライズする](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)」を参照してください。{% endif %}

プロフィールにステータスを設定して、可用性に関する情報を提供することもできます。 詳細については、「[状態を設定する](/articles/personalizing-your-profile/#setting-a-status)」を参照してください。

## 参考資料

- [プロフィール画像を設定する方法](/articles/how-do-i-set-up-my-profile-picture)
- [プライベート コントリビューションをプロフィールで公開または非公開にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [プロフィールでコントリビューションを表示する](/articles/viewing-contributions-on-your-profile)
