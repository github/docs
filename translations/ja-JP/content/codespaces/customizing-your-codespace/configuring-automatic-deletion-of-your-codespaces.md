---
title: codespace の自動削除を構成する
shortTitle: Configure automatic deletion
intro: 非アクティブの codespace は自動的に削除されます。 停止した codespace を保持する期間は、最大 30 日まで選ぶことができます。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5414d2223f490638f27475840a25883e9c353e77
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160109'
---
既定では、{% data variables.product.prodname_github_codespaces %} は、停止して、非アクティブな状態で 30 日間が過ぎると、自動的に削除されます。

しかしながら、{% data variables.product.prodname_github_codespaces %} のストレージ料金が発生するため、{% data variables.product.prodname_github_codespaces %} の個人設定で既定の保持期間を変更して、期間を短縮することをお勧めします。 ストレージ料金の詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} の課金について](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。

{% note %}

**注**: 個人の codespace 保持期間を設定したかどうかにかかわらず、codespace は不要になったら削除することを習慣にすることをお勧めします。 詳細については、「[codespace の削除](/codespaces/developing-in-codespaces/deleting-a-codespace)」を参照してください。

{% endnote %}

自動削除は、codespace にプッシュされていない変更が含まれているかどうかに関係なく行われます。 codespace の自動削除を防ぐには、codespace をもう一度開くだけです。 codespace に接続するたびに保持期間がリセットされ、codespace を停止すると、保持期間のカウントダウンが再開されます。

リポジトリが Organaization に属している場合、Organaization 管理者が Organaization 全体の保持期間を設定していることがあります。 この期間の方が個人設定の既定の保持期間より短い場合は、このリポジトリ用に作成した codespace には、Organaization の保持期間が適用されます。 詳しい情報については、「[codespace の保持期間を制限する](/codespaces/managing-codespaces-for-your-organization/restricting-the-retention-period-for-codespaces)」をご覧ください。

codespace ごとに独自の保持期間があります。 そのため、codespace によって保持期間が異なる場合があります。 たとえば、次の場合です。
* codespace を作成した後、既定の保持期間を変更し、別の codespace を作成した。
* codespace を {% data variables.product.prodname_cli %} を使って作成し、異なる保持期間を指定した。
* Organaization 用の保持期間が構成されている Organaization が所有するリポジトリから codespace を作成した。

{% note %}

**注**: 保持期間は日数で指定します。 1 日とは、codespace を停止した時点から始まる 24 時間を意味します。

{% endnote %}

{% webui %}

## codespace の既定の保持期間を設定する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [既定の保持期間] に、停止後に codespace を保持する既定の日数を入力します。 

   ![保持期間を選ぶ](/assets/images/help/codespaces/setting-default-retention.png)

   既定の保持期間は `0` から `30` 日の間で設定できます。 

   {% warning %}

   **警告**: 期間を `0` に設定すると、codespace は、停止したとき、または非アクティブのためにタイムアウトしたとき、即座に削除されます。 詳しい情報については、「[{% data variables.product.prodname_github_codespaces %} のタイムアウト期間を設定する](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)」をご覧ください。

   {% endwarning %}
 
1. **[保存]** をクリックします。

codespace を {% data variables.product.prodname_cli %} を使って作成する場合は、この既定値をオーバーライドできます。 より短い保持期間を指定する Organaization で codespace を作成した場合、個人設定は、Organaization レベルの値によってオーバーライドされます。

1 日を超える保持期間を設定すると、削除の 1 日前にメール通知を受け取ります。 

## 自動削除までの残り時間を確認する

codespace が間もなく自動的に削除される予定かどうかを確認できます。 

非アクティブな codespace の保持期間が終わりに近づくと、{% data variables.product.prodname_dotcom %} の codespace のリスト ([https://github.com/codespaces](https://github.com/codespaces)) にその旨が示されます。

![{% data variables.product.prodname_dotcom %} の codespace リストに表示されている削除前のメッセージ](/assets/images/help/codespaces/retention-deletion-message.png)

{% endwebui %}

{% cli %}

## codespace の保持期間を設定する

codespace の作成時に codespace 保持期間を設定するには、`codespace create` サブコマンドで `--retention-period` フラグを使います。 期間を日数で指定します。 0 から 30 日の期間を指定してください。

```shell
gh codespace create --retention-period DAYS
```

codespace の作成時に保持期間を指定しない場合は、既定の保持期間と Organaization の保有期間のどちらか短い方が使われます。 既定の保持期間の設定の詳しい情報については、このページの [Web ブラウザー] タブをクリックしてください。 

{% data reusables.cli.cli-learn-more %}

{% endcli %}

{% vscode %}

## 保持期間を設定する

既定の保持期間は、Web ブラウザー内の {% data variables.product.prodname_dotcom_the_website %} で設定できます。 また、codespace を {% data variables.product.prodname_cli %} を使って作成する場合は、その特定の codespace の保持期間を設定できます。 詳しい情報については、上記の該当するタブをクリックしてください。

## codespace が間もなく自動削除されるかどうかを確認する

{% data variables.product.prodname_vscode %} デスクトップ アプリケーションで、codespace が間もなく自動的に削除される予定かどうかを確認できます。

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. まだ選んでいない場合は、リモート エクスプローラーの右上にあるドロップダウン メニューから **{% data variables.product.prodname_github_codespaces %}** を選びます。
1. [GitHub Codespaces] の下で、目的の codespace の上にマウス ポインターを置きます。 codespace に関する情報を示すポップアップ ボックスが表示されます。

   codespace の保持期間が終わりに近づいている場合は、codespace がいつ削除されるのかを通知する行が含まれます。

   ![削除までの時間を示す codespace 情報](/assets/images/help/codespaces/vscode-deleting-in-5-days.png)

{% endvscode %}
