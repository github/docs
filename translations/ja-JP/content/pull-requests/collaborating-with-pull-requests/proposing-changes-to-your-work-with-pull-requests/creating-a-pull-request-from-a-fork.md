---
title: フォークからプルリクエストを作成する
intro: プルリクエストを作成して、上流リポジトリのフォークに加えた変更を提案できます。
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
  - /articles/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork
permissions: 'Anyone with write access to a repository can create a pull request from a user-owned fork. {% data reusables.enterprise-accounts.emu-permission-propose %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Create a PR from a fork
ms.openlocfilehash: 5a4aceef12c214d157dbdac7bf838bbe80e81731
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883288'
---
プルリクエストが上流リポジトリのブランチを base ブランチとして自分のトピックブランチと比較する場合、トピックブランチは「プルリクエストの比較ブランチ」とも呼ばれます。 pull request ブランチの詳細と例については、「[pull request の作成](/articles/creating-a-pull-request/#changing-the-branch-range-and-destination-repository)」を参照してください。

{% data reusables.pull_requests.perms-to-open-pull-request %}

1. 作成したフォークの元であるリポジトリに移動します。
{% data reusables.repositories.new-pull-request %}
3. [比較] ページで **[compare across forks]\(フォーク間の比較\)** をクリックします。
  ![[Compare across forks]\(フォーク間の比較\) リンク](/assets/images/help/pull_requests/compare-across-forks-link.png)
4. [base branch] ドロップダウンメニューで、変更をマージする上流リポジトリのブランチを選択します。
  ![base フォークとブランチを選択するドロップダウン メニュー](/assets/images/help/pull_requests/choose-base-fork-and-branch.png)
5. [head fork] ドロップダウンメニューでフォークを選択し、次に [compare branch] ドロップダウンメニューを使用して、変更を加えたブランチを選択します。
  ![ヘッドフォークと比較ブランチを選択するためのドロップダウン メニュー](/assets/images/help/pull_requests/choose-head-fork-compare-branch.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.allow-maintainers-user-forks %}

  ![allow-maintainers-to-make-edits-checkbox](/assets/images/help/pull_requests/allow-maintainers-to-make-edits.png) {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

## 参考資料

- "[フォークを使って作業する](/articles/working-with-forks)"
- "[フォークから作成された pull request のブランチへの変更の許可](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
