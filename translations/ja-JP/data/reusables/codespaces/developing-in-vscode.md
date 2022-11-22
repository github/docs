---
ms.openlocfilehash: 71aea4a0d9c72885e56e7aef5a20b36bf817fec5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160063"
---
### リポジトリの codespace をカスタマイズする

リポジトリ用に作成された codespace は、リポジトリの開発コンテナー構成を作成または更新してカスタマイズできます。 これは、codespace 内から行うことができます。 開発コンテナー構成を変更した後、codespace の Docker コンテナーを再構築することで、変更を現在の codespace に適用できます。 詳細については、[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)に関するページをご覧ください。

### Codespace をパーソナライズする

[ドットファイル](https://dotfiles.github.io/tutorials/) リポジトリと[同期設定](https://code.visualstudio.com/docs/editor/settings-sync)を使用して、作成した任意の codespace の codespace 環境のアスペクトをパーソナライズすることができます。 パーソナライズには、シェルの環境設定や追加のツールが含まれます。 詳細については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)」を参照してください。

### Codespace からアプリケーションを実行する
{% data reusables.codespaces.about-port-forwarding %} 詳しい情報については、「[Codespace でポートを転送する](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

### 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %} 

### {% data variables.product.prodname_vscode_command_palette %} を使用する

{% data variables.product.prodname_vscode_command_palette %} を使用すると、{% data variables.product.prodname_codespaces %} と {% data variables.product.prodname_vscode %} で多くの機能を利用したり、管理したりすることができます。 詳しい情報については、「[{% data variables.product.prodname_codespaces %} で {% data variables.product.prodname_vscode_command_palette %} を使用する](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)」を参照してください。