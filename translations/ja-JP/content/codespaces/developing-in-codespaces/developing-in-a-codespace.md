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
ms.openlocfilehash: 70b7b5b91e68b80033edd59ae3a7826e0e2ee25f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614352'
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

{% data reusables.codespaces.use-chrome %} 詳しい情報については、「[Codespace クライアントのトラブルシューティング](/codespaces/troubleshooting/troubleshooting-codespaces-clients)」を参照してください。

### Codespace をパーソナライズする

{% data reusables.codespaces.about-personalization %} 詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)」をご覧ください。

{% data reusables.codespaces.apply-devcontainer-changes %} 詳しい情報については、[プロジェクトの {% data variables.product.prodname_codespaces %} の構成](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)に関するページを参照してください。

### Codespace からアプリケーションを実行する
{% data reusables.codespaces.about-port-forwarding %} 詳しい情報については、「[Codespace でポートを転送する](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)」を参照してください。

### 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %} 

### {% data variables.product.prodname_vscode_command_palette %} を使用する

{% data variables.product.prodname_vscode_command_palette %} を使用すると、{% data variables.product.prodname_codespaces %} と {% data variables.product.prodname_vscode_shortname %} で多くの機能を利用したり、管理したりすることができます。 詳しい情報については、「[{% data variables.product.prodname_vscode_command_palette_shortname %} in {% data variables.product.prodname_codespaces %} を使用する](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)」を参照してください。

## 既存の codespace に移動する

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. 開発する codespace の名前をクリックします。
  ![Codespace の名前](/assets/images/help/codespaces/click-name-codespace.png)

または、リポジトリに移動して、 **{% octicon "code" aria-label="The code icon" %} Code** を選択することで、そのリポジトリのアクティブな codespace を表示することもできます。 ドロップダウン メニューには、リポジトリのすべてのアクティブな codespace が表示されます。
