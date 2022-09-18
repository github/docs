---
title: プルリクエストのクローズ
intro: 'pull request を [上流ブランチにマージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)することなく、その pull request を "*閉じる*" ようにできます。 これは、ブランチで提案された変更が必要でなくなったり、他のブランチで別の解決方法が提案されたりした場合に役立ちます。'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
  - /articles/closing-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/closing-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 51048cfd4ae917149d81a011a8ec5418ca4beb51
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139675'
---
{% tip %}

**参考**: 間違ったベースブランチで pull request をオープンした場合は、それをクローズして別のものをオープンする代わりに、ベースブランチを変更することで対処できます。 詳細については、[pull request のベースブランチ変更](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)に関するページを参照してください。

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. [Pull Requests] リストで、クローズしたいプルリクエストをクリックします。
3. pull request のコメントボックスの下にある **[pull request をクローズ]** をクリックします。
  ![[pull request をクローズ] ボタン](/assets/images/help/pull_requests/pullrequest-closebutton.png)
4. あるいは、[ブランチを削除](/articles/deleting-unused-branches)してください。 こうすることで、リポジトリにあるブランチのリストが整理された状態を保てます。
