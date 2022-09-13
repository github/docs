---
title: ラベルを管理する
intro: 'ラベルの作成、編集、適用、削除によって、{% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue と pull request {% endif %}を分類できます。'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145130907'
---
## ラベルについて

ラベルを作成して {% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue と pull request {% endif %}を分類することで、{% data variables.product.product_name %} での作業を管理できます。 ラベルが作成されたリポジトリ内にラベルを適用できます。 ラベルがあれば、そのリポジトリ内の任意の {% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue または pull request {% endif %}にラベルを使用できます。

## デフォルトラベルについて

{% data variables.product.product_name %} は、すべての新しいリポジトリにデフォルトのラベルを提供します。 これらのデフォルトラベルを使用して、リポジトリに標準のワークフローを作成しやすくすることができます。

Label | 説明
---  | ---
`bug` | 予期しない問題または意図しない動作を示します{% ifversion fpt or ghes or ghec %}
`documentation` | ドキュメンテーションに改善や追加が必要であることを示します{% endif %}
`duplicate` | 似た {% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue または pull request {% endif %}を示します
`enhancement` | 新しい機能のリクエストを示します
`good first issue` | 初回のコントリビューターに適した Issue を示します
`help wanted` | メンテナーが Issue もしくはプルリクエストに助けを求めていることを示します
`invalid` | {% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue または pull request {% endif %}が関係なくなっていることを示します
`question` | {% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue または pull request {% endif %}にさらに情報が必要であることを示します
`wontfix` | {% ifversion fpt or ghec %}issue、pull request、ディスカッション{% else %}issue または pull request {% endif %}に対する作業が続けられないことを示します

リポジトリの作成時に、すべての新しいリポジトリにデフォルトのラベルが含められますが、後でそのラベルを編集または削除できます。

`good first issue` ラベルの付いた issue は、リポジトリの `contribute` ページを設定するために使われます。 `contribute` ページの例については、[github/docs/contribute](https://github.com/github/docs/contribute) を参照してください。 

{% ifversion fpt or ghes or ghec %}Organization の所有者は、自分の Organization 内のリポジトリ用の既定のラベルをカスタマイズできます。 詳しくは、「[Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization)」をご覧ください。
{% endif %}

## ラベルの作成

リポジトリへの書き込みアクセス権を持つユーザは、ラベルを作成できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. 検索フィールドの右側にある **[新しいラベル]** をクリックします。
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## ラベルの適用

リポジトリへのtriageアクセス権を持つユーザは、ラベルを適用及び解除できます。

1. {% ifversion fpt or ghec %}issue、 pull request、またはディスカッション{% else %}issue または pull request {% endif %}に移動します。
1. 右のサイドバーで、"Labels（ラベル）"の右の{% octicon "gear" aria-label="The gear icon" %}をクリックし、続いてラベルをクリックしてください
  ![[ラベル] ドロップダウン メニュー](/assets/images/help/issues/labels-drop-down.png)

## ラベルの編集

リポジトリへの書き込みアクセス権を持つユーザは、既存のラベルを編集できます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## ラベルの削除

リポジトリへの書き込みアクセス権を持つユーザは、既存のラベルを削除できます。

ラベルを削除すると、Issue とプルリクエストからラベルが削除されます。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## 参考資料
- [Issue 及び Pull Request のフィルタリングと検索](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests){% ifversion fpt or ghes or ghec %}
- [Organization 内のリポジトリのためのデフォルトラベルを管理する](/articles/managing-default-labels-for-repositories-in-your-organization){% endif %}{% ifversion fpt or ghec %}
- [ラベルを使用してプロジェクトに役立つコントリビューションを促す](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels){% endif %}
- [Basic writing and formatting syntax (基本的な書き方とフォーマットの構文)](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji)
