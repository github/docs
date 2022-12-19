---
title: GitHub Pages サイトを取り下げる
intro: '{% data variables.product.prodname_pages %} サイトを取り下げて、サイトを利用不可にすることができます。'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page
  - /articles/unpublishing-a-project-page
  - /articles/unpublishing-a-project-pages-site
  - /articles/unpublishing-a-user-pages-site
  - /articles/unpublishing-a-github-pages-site
  - /github/working-with-github-pages/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: 'People with admin or maintainer permissions for a repository can unpublish a {% data variables.product.prodname_pages %} site.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Unpublish Pages site
ms.openlocfilehash: bfb22638b51560cb0006cca49a55b9842d8b807d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109548'
---
{% ifversion pages-custom-workflow %}

自分のサイトを非公開にすると、そのサイトは利用不可になります。 既存のリポジトリ設定またはコンテンツが、影響を受けることはありません。

{% data reusables.repositories.navigate-to-repo %}
1. **{% data variables.product.prodname_pages %}** の下で、**サイトがライブになっている場所** に関するメッセージの横にある、[{% octicon "kebab-horizontal" aria-label="the horizontal kebab icon" %}] をクリックします。
1. 表示されるメニューで、 **[サイトを取り下げる]** を選びます。

   ![サイトを取り下げるためのドロップ ダウン メニュー](/assets/images/help/pages/unpublish-site.png)

{% else %}

## プロジェクトサイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. リポジトリに `gh-pages` ブランチが存在する場合は、`gh-pages` ブランチを削除します。 詳細については、「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」を参照してください。
3. `gh-pages` ブランチが公開ソースの場合、{% ifversion fpt or ghec %}手順 6 に進みます{% else %}サイトは公開されていません。残りの手順はスキップできます{% endif %}。
{% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
5. "{% data variables.product.prodname_pages %}" で、 **[Source]\(ソース\)** ドロップダウン メニューを使用し、 **[None]\(なし\)** を選択します。
  ![公開ソースを選択するためのドロップダウン メニュー](/assets/images/help/pages/publishing-source-drop-down.png) {% data reusables.pages.update_your_dns_settings %}

## ユーザまたは Organization サイトを取り下げる

{% data reusables.repositories.navigate-to-repo %}
2. 公開元として使用しているブランチを削除するか、リポジトリ全体を削除します。 詳細については、「[リポジトリ内でブランチを作成および削除する](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)」と「[リポジトリを削除する](/articles/deleting-a-repository)」を参照してください。
{% data reusables.pages.update_your_dns_settings %}

{% endif %}
