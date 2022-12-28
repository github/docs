---
title: codespace でのポートの転送
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158910'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## 転送されるポートについて

ポート転送を使用すると、Codespaces 内で実行されている TCP ポートにアクセスできます。 たとえば、codespace の特定のポートで Web アプリケーションを実行している場合は、そのポートを転送できます。 これにより、テストやデバッグのために、ローカル コンピューター上のブラウザーからアプリケーションにアクセスできます。

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. ポートの一覧で、 **[ポートの追加]** をクリックします。

   ![[ポートの追加] ボタン](/assets/images/help/codespaces/add-port-button.png)

1. ポート番号またはアドレスを入力し、Enter キーを押します。

   ![ポート番号を入力するテキスト ボックス](/assets/images/help/codespaces/port-number-text-box.png)

## HTTPS 転送の使用

既定では、{% data variables.product.prodname_github_codespaces %} は HTTP を使ってポートを転送しますが、必要に応じて、HTTPS を使うように任意のポートを更新できます。 パブリック表示を使ってポートを HTTPS を使えるように更新すると、ポートの表示は自動的にプライベートに変更されます。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 更新するポートを右クリックし、 **[ポートのプロトコルの変更]** をポイントします。
  ![ポートのプロトコルを変更するオプション](/assets/images/help/codespaces/update-port-protocol.png)
1. このポートに必要なプロトコルを選択します。 選択したプロトコルは、codespace の有効期間中、このポートに対して記憶されます。

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 共有するポートを右クリックし、[ポートの可視性] メニューを選択して、 **[Organization にプライベート]** または **[パブリック]** をクリックします。
  ![右クリック メニューでポートの可視性を選択するオプション](/assets/images/help/codespaces/make-public-option.png)
1. ポートのローカル アドレスの右側にあるコピー アイコンをクリックします。
  ![ポートの URL のコピー アイコン](/assets/images/help/codespaces/copy-icon-port-url.png)
1. コピーした URL を、ポートを共有するユーザーに送信します。

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. ポートの一覧で、 **[ポートの追加]** をクリックします。

   ![[ポートの追加] ボタン](/assets/images/help/codespaces/add-port-button.png)

1. ポート番号またはアドレスを入力し、Enter キーを押します。

   ![ポート番号を入力するテキスト ボックス](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 共有するポートを右クリックし、[ポートの可視性] メニューを選択して、 **[Organization にプライベート]** または **[パブリック]** をクリックします。
  ![右クリック メニューでポートをパブリックにするオプション](/assets/images/help/codespaces/make-public-option.png)
1. ポートのローカル アドレスの右側にあるコピー アイコンをクリックします。
  ![ポートの URL のコピー アイコン](/assets/images/help/codespaces/copy-icon-port-url.png)
1. コピーした URL を、ポートを共有するユーザーに送信します。

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

ポートを転送するには、`gh codespace ports forward` サブコマンドを使用します。 `codespace-port:local-port` を、接続するリモート ポートとローカル ポートに置き換えます。 コマンドを入力した後、表示される codespace の一覧から選択します。

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

このコマンドの詳細については、[{% data variables.product.prodname_cli %} に関するマニュアル](https://cli.github.com/manual/gh_codespace_ports_forward)を参照してください。

転送されるポートの詳細を表示するには、`gh codespace ports` を入力して codespace を選択します。

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

転送されるポートの可視性を変更するには、`gh codespace ports visibility` サブコマンドを使用します。 {% data reusables.codespaces.port-visibility-settings %}

`codespace-port` を、転送されるポート番号に置き換えます。 `setting` を、`private`、`org`、または `public` に置き換えます。 コマンドを入力した後、表示される codespace の一覧から選択します。

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

1 つのコマンドを使用して、複数のポートの可視性を設定できます。 次に例を示します。

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

このコマンドの詳細については、[{% data variables.product.prodname_cli %} に関するマニュアル](https://cli.github.com/manual/gh_codespace_ports_visibility)を参照してください。

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

codespace の転送されたポートを一覧表示するとき、ポート ラベルを表示できます。 これを行うには、`gh codespace ports` コマンドを使用し、codespace を選択します。

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## ポートの転送

ローカル コンピューターのポートに codespace のポートを転送する方法については、JetBrains ドキュメントの「[セキュリティ モデル](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)」という記事の「ポート転送」を参照してください。

あるいは、{% data variables.product.prodname_cli %} を使用してポートを転送できます。 詳細については、このページの上部にある [{% data variables.product.prodname_cli %}] タブをクリックしてください。

{% endjetbrains %}
