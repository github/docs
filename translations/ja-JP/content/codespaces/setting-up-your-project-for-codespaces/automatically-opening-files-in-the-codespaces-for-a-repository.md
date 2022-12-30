---
title: リポジトリの codespace にあるファイルを自動的に開く
shortTitle: Automatically opening files
intro: 'あなたのリポジトリの codespace を誰かが作成し、{% data variables.product.prodname_vscode %} Web クライアントでその codespace を開いたときに、特定のファイルが自動的に開かれるように設定することができます。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114107'
---
## 概要

他のユーザーがリポジトリに codespace を作成するときに確認しておくと便利な特定のファイルがある場合は、{% data variables.product.prodname_vscode_shortname %} Web クライアントでそのファイルが自動的に開かれるように設定することができます。 この設定は、リポジトリの開発コンテナー構成ファイルで行います。 

指定した 1 つ以上のファイルが開かれるのは、Web クライアントで codespace が初めて開かれたときのみです。 指定したファイルをユーザーが閉じた場合、同じユーザーが次にその codespace を開いたときまたは再起動したときに、それらのファイルを自動的に再び開く処理は行われません。

{% note %}

**注**: この自動化は {% data variables.product.prodname_vscode_shortname %} Web クライアントにのみ適用されます。{% data variables.product.prodname_vscode_shortname %} デスクトップ アプリケーションやその他のサポートされるエディターには適用されません。

{% endnote %}

## ファイルが自動的に開かれるように設定する

{% data reusables.codespaces.edit-devcontainer-json %}
1. `devcontainer.json` ファイルを編集し、`customizations.codespaces.openFiles` プロパティを追加します。 `customizations` プロパティは、ファイルの最上位レベルの、JSON オブジェクト内にあります。 次に例を示します。

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   `openFiles` プロパティの値は、リポジトリ内の 1 つ以上のファイルの配列です。 パスはリポジトリのルートからの相対パスです (絶対パスはサポートされていません)。 Web クライアントでは、指定した順序でファイルが開かれ、配列の最初のファイルがエディターに表示されます。
   
1. ファイルを保存し、リポジトリの必要なブランチに加えた変更をコミットします。

## 参考資料

- "[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
