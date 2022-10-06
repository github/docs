---
title: GitHub CLI クイックスタート
intro: '{% data variables.product.prodname_cli %} を使用して、コマンド ラインで {% data variables.product.company_short %} を操作します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
ms.openlocfilehash: 004f848e973aa66d19b9de6b922d65dba76f1aea
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068537'
---
## {% data variables.product.prodname_cli %} について

{% data reusables.cli.about-cli %}

## 作業の開始

1. macOS、Windows、または Linux に {% data variables.product.prodname_cli %} を[インストール](https://github.com/cli/cli#installation)します。
1. コマンド ラインで、{% data variables.product.company_short %} に対して認証します。

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %} {% data variables.product.product_location %} に対して認証するには、`--hostname` フラグを使用します。

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. コマンド ラインで {% data variables.product.company_short %} の操作を開始します。 たとえば、`gh issue status` または `gh issue list --assignee @me` を使用して、作業する Issue を見つけます。 `gh pr create` を使用してプルリクエストを作成します。 `gh pr checkout`、`gh pr diff`、`gh pr review` を使用してプルリクエストを確認します。

## 次の手順

- テキスト エディターを開くコマンドで使用されるテキスト エディターを {% data variables.product.prodname_cli %} に指定します。 たとえば、`gh config set editor "code -w"` を入力して、優先するテキスト エディターに {% data variables.product.prodname_vscode %} を設定します。 詳細については、「[`gh config set`](https://cli.github.com/manual/gh_config_set)」を参照してください。

- よく実行するコマンドのエイリアスを定義します。 たとえば、`gh alias set prd "pr create --draft"` を実行した場合、`gh prd` を実行すると、下書きのプルリクエストをすばやく開くことができるようになります。 詳細については、「[`gh alias`](https://cli.github.com/manual/gh_alias)」を参照してください。

- {% data variables.product.prodname_cli %} 拡張機能を使用して、カスタム コマンドを作成または追加します。 詳細については、「[{% data variables.product.prodname_cli %} 拡張機能の使用](/github-cli/github-cli/using-github-cli-extensions)」および「[{% data variables.product.prodname_cli %} 拡張機能の作成](/github-cli/github-cli/creating-github-cli-extensions)」を参照してください。

- {% data variables.product.prodname_cli %} で実行できるすべてのコマンドの詳細については、「[{% data variables.product.prodname_cli %} リファレンス](/github-cli/github-cli/github-cli-reference)」を参照してください。
