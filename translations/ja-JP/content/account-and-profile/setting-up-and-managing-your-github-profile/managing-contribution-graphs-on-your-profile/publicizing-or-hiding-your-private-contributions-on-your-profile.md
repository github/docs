---
title: プライベートコントリビューションをプロフィールで公開または非公開にする
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068944"
---
プライベートコントリビューションを公開しても、あなたが作業しているプライベートリポジトリへのアクセス権がないユーザーがあなたのプライベートコントリビューションを見ることはできません。 かわりに、特定の日におけるプライベートコントリビューションの数だけを見ることができます。 パブリックコントリビューションには、詳細な情報が含まれます。 詳細については、[プロファイル ページでの投稿の表示](/articles/viewing-contributions-on-your-profile-page)に関する説明を参照してください。

{% note %}

**注:** {% ifversion fpt or ghes or ghec %}{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} で、ご自分のプロファイル上のパブリック コントリビューションは、{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %} にアクセスできる世界中のすべてのユーザーが参照できます。{% data variables.product.product_location%}{% endif %}の他のユーザーのみ。{% elsif ghae %}{% data variables.product.prodname_ghe_managed %} で、ご自分のプロファイル上のコントリビューションは、ご自分のエンタープライズのその他のメンバーのみが参照できます。{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>プライベートコントリビューションの可視性を変更する

{% data reusables.profile.access_profile %}
1. プライベートコントリビューションをプロフィールで公開または非公開にする
    - プライベート コントリビューションを公開するには、コントリビューション グラフの上にある **[コントリビューションの設定]** ドロップダウン メニューを使用して、 **[プライベート コントリビューション]** を選択します。 訪問者には、プライベートコントリビューションの数だけが表示され、それ以上の詳細は表示されません。
  ![[コントリビューションの設定] ドロップダウン メニューで、閲覧者がプライベート コントリビューションを見られるようにする](/assets/images/help/profile/private-contributions-on.png)
    - プライベート コントリビューションを非公開にするには、コントリビューション グラフの上にある **[コントリビューションの設定]** ドロップダウン メニューを使用して、 **[プライベート コントリビューション]** を選択解除します。 閲覧者には、公開されたコントリビューションのみが表示されます。
   ![[コントリビューションの設定] ドロップダウン メニューで、閲覧者がプライベート コントリビューションを見られるようにする](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>参考資料

- "[プロフィール ページでコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)"
- "[コントリビューションがプロフィールに表示されないのはなぜですか?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
