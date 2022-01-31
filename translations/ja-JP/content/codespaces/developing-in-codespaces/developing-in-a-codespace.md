---
title: codespace で開発する
intro: '{% data variables.product.product_name %} で codespace を開き、{% data variables.product.prodname_vscode %} の機能を使用して開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: 'You can develop in codespaces you''ve created for repositories owned by organizations using {% data variables.product.prodname_team %} and {% data variables.product.prodname_ghe_cloud %}.'
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
---

 

## About development with {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} は、{% data variables.product.prodname_vscode %} の完全な開発体験を提供します。 {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![codespace の概要(注釈付き)](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. サイドバー: デフォルト設定では、このエリアには Explorer でプロジェクトファイルが表示されます。
2. アクティビティバー: ビューが表示され、それらを切り替える方法が提供されます。 ビューはドラッグアンドドロップで並べ替えることができます。
3. エディタ: ファイルを編集できます。 各エディタのタブを使用して、必要な場所に正確に配置できます。
4. パネル: 出力とデバッグ情報、および統合ターミナルのデフォルトの場所を確認できます。
5. ステータスバー: このエリアには、codespace とプロジェクトに関する有用な情報が表示されます。 たとえば、ブランチ名、設定されたポートなどです。

{% data variables.product.prodname_vscode %} の使用の詳細については、{% data variables.product.prodname_vscode %} ドキュメントの[ユーザインターフェースガイド](https://code.visualstudio.com/docs/getstarted/userinterface)を参照してください。

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} For more information, see "[Troubleshooting Codespaces clients](/codespaces/troubleshooting/troubleshooting-codespaces-clients)."

### Codespace をパーソナライズする

{% data reusables.codespaces.about-personalization %} 詳しい情報については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)」を参照してください。

{% data reusables.codespaces.apply-devcontainer-changes %}詳しい情報については、「[プロジェクトの {% data variables.product.prodname_codespaces %} を設定する](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)」を参照してください。

### Codespace からアプリケーションを実行する
{% data reusables.codespaces.about-port-forwarding %} For more information, see "[Forwarding ports in your codespace](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)."

### 変更をコミットする

{% data reusables.codespaces.committing-link-to-procedure %}

### Using the {% data variables.product.prodname_vscode_command_palette %}

The {% data variables.product.prodname_vscode_command_palette %} allows you to access and manage many features for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. For more information, see "[Using the {% data variables.product.prodname_vscode_command_palette %} in {% data variables.product.prodname_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)."

## 既存の codespace に移動する

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. 開発する codespace の名前をクリックします。 ![codespace の名前](/assets/images/help/codespaces/click-name-codespace.png)

Alternatively, you can see any active codespaces for a repository by navigating to that repository and selecting **{% octicon "code" aria-label="The code icon" %} Code**. The drop-down menu will display all active codespaces for a repository.
