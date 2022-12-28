---
title: テンプレートからリポジトリを作成する
intro: 既存のリポジトリと同じディレクトリ構造およびファイルで、新しいリポジトリを作成できます。
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160244'
---
## リポジトリテンプレートついて

リポジトリに対する読み取り権限があるユーザなら誰でも、テンプレートからリポジトリを作成できます。 詳細については、「[テンプレート リポジトリの作成](/articles/creating-a-template-repository)」を参照してください。

{% tip %}

**ヒント**: {% data variables.product.prodname_cli %} を使用してリポジトリをテンプレートから作成することもできます。 詳細については、{% data variables.product.prodname_cli %} ドキュメントの "[`gh repo create`](https://cli.github.com/manual/gh_repo_create)" を参照してください。

{% endtip %}

テンプレートリポジトリのデフォルトブランチのみからディレクトリ構造とファイルを含めるか、すべてのブランチを含めるかを選択できます。 テンプレートから作成されたブランチには関連のない履歴があるため、pull request を作成したり、ブランチ間でマージしたりすることはできません。

テンプレートからリポジトリを作成することは、リポジトリをフォークすることに似ていますが、以下の点で異なります:
- 新しいフォークは、親リポジトリのコミット履歴すべてを含んでいますが、テンプレートから作成されたリポジトリには、最初は 1 つのコミットしかありません。
- フォークへのコミットはコントリビューショングラフに表示されませんが、テンプレートから作成されたリポジトリへのコミットはコントリビューショングラフに表示されます。
- フォークは、既存のプロジェクトにコードをコントリビュートするための一時的な方法となります。テンプレートからリポジトリを作成することは、新しいプロジェクトを素早く始める方法です。

フォークについて詳しくは、「[フォークについて](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)」をご覧ください。

## テンプレートからリポジトリを作成する

{% data reusables.repositories.navigate-to-repo %}
1. ファイルの一覧の上にある **[Use this template]\(このテンプレートを使用する\)** をクリックします。
{% ifversion fpt or ghec %}
1. **[新しいリポジトリの作成]** を選びます。

   ![[このテンプレートを使用する] ボタン](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **注:** または、codespace でテンプレートを開き、後で作業内容を新しいリポジトリに発行することもできます。 詳しくは、「[テンプレートから codespace を作成する](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)」をご覧ください。

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. 必要に応じて、既定のブランチだけでなく、テンプレートのすべてのブランチからディレクトリ構造とファイルを含めるには、 **[すべてのブランチを含める]** を選びます。
  ![[すべてのブランチを含める] チェック ボックス](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. **[Create repository from template]\(テンプレートからリポジトリを作成する\)** をクリックします。
