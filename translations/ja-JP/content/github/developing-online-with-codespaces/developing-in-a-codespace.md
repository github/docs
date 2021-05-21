---
title: codespace で開発する
intro: '{% data variables.product.product_name %} で codespace を開き、{% data variables.product.prodname_vscode %} の機能を使用して開発できます。'
product: '{% data reusables.gated-features.codespaces %}'
permissions: ユーザは、自分のユーザアカウントで所有している codespace で開発することができます。
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.use-chrome %} 詳しい情報については、「[codespace のトラブルシューティング](/github/developing-online-with-codespaces/troubleshooting-your-codespace)」を参照してください。

### {% data variables.product.prodname_vscode %} から Codespaces に接続する
{% data reusables.codespaces.connect-to-codespace-from-vscode %}

### Codespaces に移動する
{% data reusables.codespaces.navigate-to-codespaces %}
2. 開発する codespace の名前をクリックします。 ![codespace の名前](/assets/images/help/codespaces/click-name-codespace.png)

### ポートを転送する

ポート転送を使用すると、Codespaces 内で実行されている TCP ポートにアクセスできます。 たとえば、ポート 3000 で Web アプリケーションを実行している場合は、ブラウザからアプリケーションにアクセスして、テストとデバッグを行うことができます。

Codespaces 内で実行されているアプリケーションがポートをコンソールに出力すると、{% data variables.product.prodname_codespaces %} はローカルホストの URL パターンを検出し、それらのポートを自動的に転送します。 ターミナルの URL をクリックすると、ブラウザで開くことができます。 たとえば、アプリケーションが `http://127.0.0.1:3000` または `http://localhost:3000` をコンソールに出力する場合、ログは出力をポート 3000 のクリック可能な URL に自動的に変換します。

![自動ポート転送](/assets/images/help/codespaces/automatic-port-forwarding.png)

または、次のいずれかの方法を使用してポートを転送することもできます。

* コマンドパレット (`shift command P` / `shift control P`) をトリガーし、「Codespaces: Forward Port」と入力すると、オンデマンドでポートを転送できます。 次に、転送するポートの番号を入力します。

    ![コマンドパレットのポート転送](/assets/images/help/codespaces/command-palette-port-forwarding.png)

* `forwardPorts` プロパティを使用して、`.devcontainer.json` ファイルで転送ポートを自動的に設定できます。

* Remote Explorer 拡張機能内で転送ポートを追加または削除できます。 Remote Explorer から転送されたポートの URL をコピーして貼り付けることができ、ブラウザからそれらにアクセスできます。

    ![リモートエクスプローラのポート転送](/assets/images/help/codespaces/remote-explorer-port-forwarding.png)
