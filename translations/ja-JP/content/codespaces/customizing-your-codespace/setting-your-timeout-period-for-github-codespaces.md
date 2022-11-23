---
title: GitHub Codespaces のタイムアウト期間を設定する
shortTitle: Set the timeout
intro: '個人用設定ページで、{% data variables.product.prodname_github_codespaces %} の既定のタイムアウトを設定できます。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 6ca559fefddc34eb6de0441d17344ff8054db509
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159928'
---
## アイドル タイムアウトについて

非アクティブな期間が経過すると、codespace の実行が停止します。 既定では、この期間は 30 分間ですが、{% data variables.product.prodname_dotcom %} で、個人用設定での既定のタイムアウト期間をより長くまたは短く指定することができます。 更新された設定は、作成した新しい codespace に、または次回開始するときに既存の codespace に適用されます。 また、{% data variables.product.prodname_cli %} を使って codespace を作成するときに、タイムアウトを指定することもできます。

{% warning %}

**警告**: codespace コンピューティング使用量は、codespace がアクティブな期間に対して課金されます。 codespace を使ってはいないものの、実行中のままであり、まだタイムアウトしていない場合は、codespace を使っているかどうかにかかわらず、codespace がアクティブだった合計時間に対して課金されます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。

{% endwarning %}

### Organization が所有するリポジトリのタイムアウト期間

Organization は、そのリポジトリの一部またはすべてから作成された codespace に対して、最大アイドル タイムアウト ポリシーを設定できます。 Organization ポリシーによって最大タイムアウトが設定され、それがユーザーによって設定された既定のタイムアウトよりも短い場合、ユーザーが設定したものではなく、Organization のタイムアウトが使用されます。 このことは、codespace が作成されるとユーザーに通知されます。 詳細については、「[アイドル タイムアウト期間の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)」を参照してください。

{% webui %}

## 既定のタイムアウト期間を設定する

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. [既定のアイドル タイムアウト] の下に必要な時間を入力し、 **[保存]** をクリックします。 時間は 5 分から 240 分 (4 時間) の間で指定する必要があります。
   ![タイムアウトの選択](/assets/images/help/codespaces/setting-default-timeout.png)

{% endwebui %}

{% cli %}

## codespace のタイムアウト期間を設定する

{% data reusables.cli.cli-learn-more %}

codespace の作成時にタイムアウト期間を設定するには、`codespace create` サブコマンドで `idle-timeout` 引数を使用します。 時間を分単位で指定します (後ろに `m` を付けます)。 時間は 5 分から 240 分 (4 時間) の間で指定する必要があります。

```shell
gh codespace create --idle-timeout 90m
```

codespace を作成するときにタイムアウト期間を指定しない場合は、既定のタイムアウト期間が使用されます。 既定のタイムアウト期間の設定については、このページの [Web ブラウザー] タブをクリックしてください。 現在、{% data variables.product.prodname_cli %} を使用して既定のタイムアウト期間を指定することはできません。

{% endcli %}

{% vscode %}

## タイムアウト期間を設定する

既定のタイムアウト期間は、Web ブラウザー内の {% data variables.product.prodname_dotcom_the_website %} で設定できます。 また、codespace を {% data variables.product.prodname_cli %} を使って作成する場合は、その特定の codespace のタイムアウト期間を設定できます。 詳しくは、上記の該当するタブをクリックしてください。

{% endvscode %}
