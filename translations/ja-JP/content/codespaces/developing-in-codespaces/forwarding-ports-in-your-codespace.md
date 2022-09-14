---
title: codespace でのポートの転送
intro: '{% data reusables.codespaces.about-port-forwarding %}'
product: '{% data reusables.gated-features.codespaces %}'
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
ms.openlocfilehash: b7309a1f2f878860bd9faf34b5516bd10ef80887
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '147110691'
---
## 転送されるポートについて

ポート転送を使用すると、Codespaces 内で実行されている TCP ポートにアクセスできます。 たとえば、codespace の特定のポートで Web アプリケーションを実行している場合は、そのポートを転送できます。 これにより、テストやデバッグのために、ローカル コンピューター上のブラウザーからアプリケーションにアクセスできます。

codespace 内で実行されているアプリケーションが、localhost URL (`http://localhost:PORT` や `http://127.0.0.1:PORT` など) を含むターミナルに出力すると、ポートが自動的に転送されます。 ブラウザーまたは {% data variables.product.prodname_vscode %} で {% data variables.product.prodname_github_codespaces %} を使用している場合、ターミナルの URL 文字列はリンクに変換され、それをクリックするとローカル コンピューターで Web ページを表示できます。 既定では、{% data variables.product.prodname_codespaces %} は HTTP を使用してポートを転送します。

![自動ポート転送](/assets/images/help/codespaces/automatic-port-forwarding.png)

また、ポートの手動転送、転送されるポートへのラベル付け、Organization のメンバーとの転送されるポートの共有、転送されるポートのパブリックな共有、codespace の構成への転送されるポートの追加などを行うこともできます。

{% note %}

**注**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## ポートの転送

自動的に転送されなかったポートを手動で転送できます。

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. ポートの一覧で、 **[ポートの追加]** をクリックします。

   ![[ポートの追加] ボタン](/assets/images/help/codespaces/add-port-button.png)

1. ポート番号またはアドレスを入力し、Enter キーを押します。

   ![ポート番号を入力するテキスト ボックス](/assets/images/help/codespaces/port-number-text-box.png)

## HTTPS 転送の使用

既定では、{% data variables.product.prodname_codespaces %} は HTTP を使用してポートを転送しますが、必要に応じて、HTTPS を使用するようにポートを更新できます。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 更新するポートを右クリックし、 **[ポートのプロトコルの変更]** をポイントします。
  ![ポートのプロトコルを変更するオプション](/assets/images/help/codespaces/update-port-protocol.png)
1. このポートに必要なプロトコルを選択します。 選択したプロトコルは、codespace の有効期間中、このポートに対して記憶されます。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. ポートの一覧で、 **[ポートの追加]** をクリックします。

   ![[ポートの追加] ボタン](/assets/images/help/codespaces/add-port-button.png)

1. ポート番号またはアドレスを入力し、Enter キーを押します。

   ![ポート番号を入力するテキスト ボックス](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

ポートを転送するには、`gh codespace ports forward` サブコマンドを使用します。 `codespace-port:local-port` を、接続するリモート ポートとローカル ポートに置き換えます。 コマンドを入力した後、表示される codespace の一覧から選択します。

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em>
```

このコマンドの詳細については、[{% data variables.product.prodname_cli %} に関するマニュアル](https://cli.github.com/manual/gh_codespace_ports_forward)を参照してください。

転送されるポートの詳細を表示するには、`gh codespace ports` を入力して codespace を選択します。

{% endcli %}

## ポートの共有

{% note %}

**注:** Organization が {% data variables.product.prodname_team %} または {% data variables.product.prodname_ghe_cloud %} を使用している場合にのみ、ポートを Organization に対してプライベートにすることができます。

{% endnote %}

転送されるポートを他のユーザーと共有する場合は、ポートを Organization に対してプライベートにするか、ポートをパブリックにすることができます。 ポートを Organization に対してプライベートにすると、そのポートの URL がわかっている組織内のすべてのユーザーが、実行中のアプリケーションを表示できます。 ポートをパブリックにすると、URL とポート番号を知っているすべてのユーザーが、認証を必要とせずに、実行中のアプリケーションを表示できます。

{% note %}

**注:** ポートの可視性オプションの選択は、Organization 用に構成されたポリシーによって制限される場合があります。 詳細については、「[転送されるポートの可視性の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)」を参照してください。

{% endnote %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 共有するポートを右クリックし、[ポートの可視性] メニューを選択して、 **[Organization にプライベート]** または **[パブリック]** をクリックします。
  ![右クリック メニューでポートの可視性を選択するオプション](/assets/images/help/codespaces/make-public-option.png)
1. ポートのローカル アドレスの右側にあるコピー アイコンをクリックします。
  ![ポートの URL のコピー アイコン](/assets/images/help/codespaces/copy-icon-port-url.png)
1. コピーした URL を、ポートを共有するユーザーに送信します。

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. 共有するポートを右クリックし、[ポートの可視性] メニューを選択して、 **[Organization にプライベート]** または **[パブリック]** をクリックします。
  ![右クリック メニューでポートをパブリックにするオプション](/assets/images/help/codespaces/make-public-option.png)
1. ポートのローカル アドレスの右側にあるコピー アイコンをクリックします。
  ![ポートの URL のコピー アイコン](/assets/images/help/codespaces/copy-icon-port-url.png)
1. コピーした URL を、ポートを共有するユーザーに送信します。

{% endvscode %}

{% cli %}

転送されるポートの可視性を変更するには、`gh codespace ports visibility` サブコマンドを使用します。 {% data reusables.codespaces.port-visibility-settings %}

`codespace-port` を、転送されるポート番号に置き換えます。 `setting` を、`private`、`org`、または `public` に置き換えます。 コマンドを入力した後、表示される codespace の一覧から選択します。

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em>
```

1 つのコマンドを使用して、複数のポートの可視性を設定できます。 次に例を示します。

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

このコマンドの詳細については、[{% data variables.product.prodname_cli %} に関するマニュアル](https://cli.github.com/manual/gh_codespace_ports_visibility)を参照してください。

{% endcli %}

## ポートのラベル付け

ポートにラベルを付けて、一覧でポートをいっそう識別しやすくできます。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. ラベルを付けるポートをポイントして、ラベル アイコンをクリックします。
  ![ポートのラベル アイコン](/assets/images/help/codespaces/label-icon.png) {% data reusables.codespaces.type-port-label %}

## codespace 構成へのポートの追加

転送されるポートをリポジトリの {% data variables.product.prodname_github_codespaces %} 構成に追加し、リポジトリから作成されるすべての codespace でポートが自動的に転送されるようにすることができます。 変更を適用するには、構成を更新した後、以前に作成した codespace をリビルドする必要があります。 詳細については、[プロジェクト用の {% data variables.product.prodname_codespaces %} の構成](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)に関する記事をご覧ください。

`.devcontainer.json` ファイルで `forwardPorts` プロパティを使用して転送されるポートを手動で構成することも、codespace の [ポート] パネルを使用することもできます。

{% data reusables.codespaces.navigate-to-ports-tab %}
1. codespace の構成に追加するポートを右クリックして、 **[ラベルを設定して devcontainer.json を更新する]** をクリックします。
  ![右クリック メニューでラベルを設定し devcontainer.json にポートを追加するオプション](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}
