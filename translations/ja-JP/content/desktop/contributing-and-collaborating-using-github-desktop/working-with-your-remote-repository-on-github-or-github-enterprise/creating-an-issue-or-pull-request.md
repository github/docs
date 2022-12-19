---
title: Issueもしくはプルリクエストの作成
intro: リポジトリに対する変更の提案あるいは共同作業のために、Issueあるいはプルリクエストを作成できます。
permissions: 'Anyone can create an issue in a public repository that has issues enabled. Anyone with read permissions to a repository can create a pull request, but you must have write permissions to create a branch.'
redirect_from:
  - /desktop/contributing-to-projects/creating-an-issue-or-pull-request
  - /desktop/contributing-to-projects/creating-a-pull-request
  - /desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request
versions:
  fpt: '*'
shortTitle: Create an issue or PR
ms.openlocfilehash: 5430c8f11d08efc3f21cf1c62f470f38dcc2f257
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117478'
---
## Issue とプルリクエストについて

Issue を使用して、プロジェクトにとって重要なアイデア、バグ、タスク、およびその他の情報を追跡できます。 {% data variables.product.prodname_desktop %} を使用して、プロジェクトのリポジトリに Issue を作成できます。 issue の詳細については、「[Issue について](/github/managing-your-work-on-github/about-issues)」を参照してください。

ブランチを作成してプロジェクトのファイルに変更を加えた後、プルリクエストを作成できます。 プルリクエストを使用すると、変更をプロジェクトにマージする前に、変更を提案、議論、反復できます。 {% data variables.product.prodname_desktop %} を使用して、プロジェクトのリポジトリにプルリクエストを作成できます。 pull request の詳細については、「[pull requests について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)」を参照してください。

## 前提条件

プルリクエストを作成する前に、変更を {% data variables.product.prodname_dotcom %} のブランチにプッシュする必要があります。
- ローカルブランチの変更を保存してコミットします。 詳細については、「[プロジェクトへの変更のコミットやレビュー](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)」を参照してください。
- ローカルコミットをリモートリポジトリにプッシュします。 詳細については、「[GitHub に変更をプッシュする](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)」を参照してください。
- 現在のブランチを {% data variables.product.prodname_dotcom %} に公開します。 詳細については、「[ブランチを管理する](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)」を参照してください。

## Issue の作成

{% mac %}

1. メニュー バーの **[リポジトリ]** ドロップダウン メニューを使用し、 **[{% data variables.product.prodname_dotcom %} での Issue の作成]** をクリックします。
    ![ブランチ メニュー内のリポジトリの値](/assets/images/help/desktop/create-issue-mac.png)
2. {% data variables.product.prodname_dotcom %} で、 **[始める]** をクリックして Issue テンプレートを開くか、 **[空の Issue をオープン]** をクリックします。
    ![新規 Issue の作成オプション](/assets/images/help/desktop/create-new-issue.png)

{% endmac %}

{% windows %}

1. メニュー バーの **[リポジトリ]** ドロップダウン メニューを使用し、 **[{% data variables.product.prodname_dotcom %} での Issue の作成]** をクリックします。
    ![ブランチ メニュー内のリポジトリの値](/assets/images/help/desktop/create-issue-windows.png)
2. {% data variables.product.prodname_dotcom %} で、 **[始める]** をクリックして Issue テンプレートを開くか、 **[空の Issue をオープン]** をクリックします。
    ![新規 Issue の作成オプション](/assets/images/help/desktop/create-new-issue.png)

{% endwindows %}

{% note %}

**注**: 現在のリポジトリで Issue テンプレートが有効化されていないなら、{% data variables.product.prodname_desktop %} は {% data variables.product.prodname_dotcom %} 上の空の Issue へリダイレクトします。

{% endnote %}

## pull request の作成

{% mac %}

1. プルリクエストを作成するブランチに切り替えます。 詳細については、「[ブランチ間で切り替える](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **[pull request の作成]** をクリックします。 {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。
  ![[Create pull request]\(pull request の作成\) ボタン](/assets/images/help/desktop/mac-create-pull-request.png)
4. {% data variables.product.prodname_dotcom %} で、 **[base:]** ドロップダウン メニューのブランチが変更をマージするブランチであることを確認します。 **[compare:]** ドロップダウン メニューのブランチが、変更を加えたトピック ブランチであることを確認します。
  ![[base] ブランチと [compare] ブランチを選択するためのドロップダウン メニュー](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. プルリクエストを作成するブランチに切り替えます。 詳細については、「[ブランチ間で切り替える](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)」を参照してください。
2. **[pull request の作成]** をクリックします。 {% data variables.product.prodname_desktop %} はデフォルトのブラウザを開いて {% data variables.product.prodname_dotcom %} に移動します。
  ![[Create pull request]\(pull request の作成\) ボタン](/assets/images/help/desktop/windows-create-pull-request.png)
3. {% data variables.product.prodname_dotcom %} で、 **[base:]** ドロップダウン メニューのブランチが変更をマージするブランチであることを確認します。 **[compare:]** ドロップダウン メニューのブランチが、変更を加えたトピック ブランチであることを確認します。
  ![[base] ブランチと [compare] ブランチを選択するためのドロップダウン メニュー](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

## 参考資料
- {% data variables.product.prodname_dotcom %} 用語集の "[Issue](/github/getting-started-with-github/github-glossary#issue)"
- {% data variables.product.prodname_dotcom %} 用語集の "[pull request](/github/getting-started-with-github/github-glossary#pull-request)"
- {% data variables.product.prodname_dotcom %} 用語集の "[ベース ブランチ](/github/getting-started-with-github/github-glossary#base-branch)"
- {% data variables.product.prodname_dotcom %} 用語集の "[トピック ブランチ](/github/getting-started-with-github/github-glossary#topic-branch)"
