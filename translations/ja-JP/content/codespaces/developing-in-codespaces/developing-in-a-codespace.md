---
title: codespace で開発する
intro: '{% data variables.product.product_name %} で codespace を開き、{% data variables.product.prodname_vscode %} の機能を使用して開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: 459e98978fdc062d96372c26c56a0f042878d40d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108988'
---
## {% data variables.product.prodname_github_codespaces %} での開発について

{% data variables.product.prodname_github_codespaces %} は、{% data variables.product.prodname_vscode %} の完全な開発体験を提供します。 {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![codespace の概要(注釈付き)](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. サイドバー: デフォルト設定では、このエリアには Explorer でプロジェクトファイルが表示されます。
2. アクティビティバー: ビューが表示され、それらを切り替える方法が提供されます。 ビューはドラッグアンドドロップで並べ替えることができます。
3. エディタ: ファイルを編集できます。 各エディタのタブを使用して、必要な場所に正確に配置できます。
4. パネル: 出力とデバッグ情報、および統合ターミナルのデフォルトの場所を確認できます。
5. ステータスバー: このエリアには、codespace とプロジェクトに関する有用な情報が表示されます。 たとえば、ブランチ名、設定されたポートなどです。

{% data variables.product.prodname_vscode_shortname %} の使用方法の詳しい情報については、{% data variables.product.prodname_vscode_shortname %} ドキュメントで[ユーザー インターフェイス ガイド](https://code.visualstudio.com/docs/getstarted/userinterface)を参照してください。

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %}詳しくは、「[{% data variables.product.prodname_github_codespaces %} クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-codespaces-clients)」を参照してください。

### Codespace をパーソナライズする

{% data reusables.codespaces.about-personalization %} 詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)」をご覧ください。

{% data reusables.codespaces.apply-devcontainer-changes %}詳しくは、「[開発コンテナーの概要](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)」を参照してください。

### Codespace からアプリケーションを実行する
{% data reusables.codespaces.about-port-forwarding %} 詳しい情報については、「[Codespace でポートを転送する](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

### 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %} 

### {% data variables.product.prodname_vscode_command_palette %} を使用する

{% data variables.product.prodname_vscode_command_palette %} を使用すると、{% data variables.product.prodname_github_codespaces %} と {% data variables.product.prodname_vscode_shortname %} で多くの機能を利用したり、管理したりすることができます。 詳しくは、「[{% data variables.product.prodname_vscode_command_palette_shortname %} in {% data variables.product.prodname_github_codespaces %} の使用](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)」を参照してください。
