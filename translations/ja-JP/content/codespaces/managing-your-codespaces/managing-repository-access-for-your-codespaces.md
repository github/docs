---
title: codespace 内の他のリポジトリへのアクセスの管理
allowTitleToDifferFromFilename: true
shortTitle: Repository access
intro: '{% data variables.product.prodname_github_codespaces %} からアクセスできるリポジトリを管理できます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
  - Security
redirect_from:
  - /codespaces/managing-your-codespaces/managing-access-and-security-for-your-codespaces
ms.openlocfilehash: 3f8379c322bd7ccd9ff7d31e17da90a77461536d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160108'
---
## 概要

既定では、codespace には、作成元のリポジトリをスコープとするトークンが割り当てられます。 テンプレートから作成した codespace を {% data variables.product.product_name %} 上の新しいリポジトリに発行すると、codespace には新しいリポジトリにスコープが設定されたトークンが割り当てられます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} のセキュリティ](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)」をご覧ください。 プロジェクトに他のリポジトリに対する追加のアクセス許可が必要な場合は、`devcontainer.json` ファイルでこれを構成し、他のコラボレーターが適切なアクセス許可セットを持っていることを確認できます。

`devcontainer.json` ファイルにアクセス許可が一覧表示されると、そのリポジトリのcodespace 作成の一環として、追加のアクセス許可を確認して承認するように求められます。 一覧表示されているアクセス許可を承認すると、{% data variables.product.prodname_github_codespaces %} は選択を記憶し、`devcontainer.json` ファイル内のアクセス許可が変更されない限り、承認を求めるメッセージは表示されません。

## 前提条件

カスタム アクセス許可が定義された codespace を作成するには、次のいずれかを使用する必要があります。
* {% data variables.product.prodname_dotcom %} Web UI
* [{% data variables.product.prodname_dotcom %} CLI](https://github.com/cli/cli/releases/latest) 2.5.2 以降
* [{% data variables.product.prodname_github_codespaces %} {% data variables.product.prodname_vscode %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 1.5.3 以降

## 追加のリポジトリのアクセス許可の設定

1. `devcontainer.json` ファイルの {% data variables.product.prodname_github_codespaces %} のリポジトリのアクセス許可を構成します。 リポジトリに `devcontainer.json` ファイルがまだ含まれていない場合は、今すぐ追加します。 詳細については、「[プロジェクトへの開発コンテナーへの追加](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)」に関するページを参照してください。

1. `devcontainer.json` ファイルを編集し、`repositories` オブジェクトに必要なリポジトリ名とアクセス許可を追加します。

  ```json{:copy}
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  {% note %}

  **注:** 参照できるのは、現在作業しているリポジトリと同じ個人アカウントまたは組織に属するリポジトリのみです。

  {% endnote %}

  一覧に示されている各リポジトリに対して、次のアクセス許可のうち、いくつでも付与することができます。
   * `actions` - 読み取り / 書き込み
   * `checks` - 読み取り / 書き込み
   * `contents` - 読み取り / 書き込み
   * `deployments` - 読み取り / 書き込み
   * `discussions` - 読み取り / 書き込み
   * `issues` - 読み取り / 書き込み
   * `packages` - 読み取り
   * `pages` - 読み取り / 書き込み
   * `pull_requests` - 読み取り / 書き込み
   * `repository_projects` - 読み取り / 書き込み
   * `statuses` - 読み取り / 書き込み
   * `workflows` - 書き込み

  組織内のすべてのリポジトリのアクセス許可を設定するには、`repositories` オブジェクト内の組織名の後に `*` ワイルドカードを使用します。

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/*": {
            "permissions": {
              "issues": "write"
            }
          }
        }
      }
    }
  }
  ```

  特定のリポジトリのすべてのアクセス許可を設定するには、リポジトリ オブジェクトで `"permissions": "read-all"` または `"permissions": "write-all"` を使用します。

  ```json
  {
    "customizations": {
      "codespaces": {
        "repositories": {
          "my_org/my_repo": {
            "permissions": "write-all"
          }
        }
      }
    }
  }
  ```

## 要求されたアクセス許可の承認

`devcontainer.json` ファイルで追加のリポジトリのアクセス許可が定義されている場合、このリポジトリの codespace またはプレビルド構成を作るときに、アクセス許可を確認し、必要に応じて認可するように求められます。 リポジトリのアクセス許可を承認すると、要求されたアクセス許可のセットがリポジトリに対して変更されない限り、{% data variables.product.prodname_github_codespaces %} は再プロンプトを表示しません。

![要求されたアクセス許可ページ](/assets/images/help/codespaces/codespaces-accept-permissions.png)

承認する必要があるのは、自分が知っていて信頼できるリポジトリに対するアクセス許可のみです。 要求されたアクセス許可のセットを信頼できない場合は、 **[承認なしで続行]** をクリックして、基本のアクセス許可のセットを使用して codespace を作成します。 追加のアクセス許可を拒否すると、codespace は作成元のリポジトリにしかアクセスできないため、codespace 内のプロジェクトの機能に影響を与える可能性があります。

個人アカウントが既に所有しているアクセス許可のみを承認できます。 現在アクセス権を持たないリポジトリでのアクセス許可を codespace が要求する場合は、リポジトリの所有者または管理者に連絡して十分なアクセス権を取得してから、codespace の作成を再試行してください。

## アクセスとセキュリティ

{% warning %}

**非推奨の注意**: 以下で説明するアクセスとセキュリティの設定は現在非推奨であり、ここには参考用に記載されています。 他のリポジトリへの拡張アクセスを有効にするには、前述のように、要求されたアクセス許可を codespace の開発コンテナー定義に追加します。

{% endwarning %}

個人アカウントが所有するリポジトリのアクセスとセキュリティを有効にすると、そのリポジトリ用に作成された codespace には、所有している他のすべてのリポジトリへの読み取り権限が付与されます。 Codespace がアクセスできるリポジトリを制限する場合は、Codespace がオープンされたリポジトリまたは特定のリポジトリのいずれかに制限できます。 信頼するリポジトリに対してのみ、アクセスとセキュリティを有効にしてください。 

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [アクセスとセキュリティ] で、あなたの個人アカウントの設定を選択します。

  ![信頼するリポジトリを管理するラジオボタン](/assets/images/help/settings/codespaces-access-and-security-radio-buttons.png)

1. [選択したリポジトリ] を選んだ場合、ドロップダウン メニューを選んでから、あなたの所有するその他のリポジトリにアクセスを許可する、リポジトリの codespace をクリックします。 所有するその他のリポジトリにコードスペースによるアクセスを許可したい、すべてのリポジトリについて同じ手順を繰り返します。

  ![[選択したリポジトリ] ドロップダウン メニュー](/assets/images/help/settings/codespaces-access-and-security-repository-drop-down.png)
