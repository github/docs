---
title: GitHub Codespaces のタイムアウト期間を設定する
shortTitle: Set the timeout
intro: '個人用設定ページで、{% data variables.product.prodname_codespaces %} の既定のタイムアウトを設定できます。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
type: how_to
redirect_from:
  - /codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces
ms.openlocfilehash: 5b904e8b2f5cecbecbc93da096ab31126ed82727
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111527'
---
非アクティブな期間が経過すると、codespace の実行が停止します。 このタイムアウト期間の長さを指定できます。 更新した設定は、新しく作成した codespace に適用されます。

一部の組織では、最大アイドル タイムアウト ポリシーが用意されている場合があります。 組織のポリシーで最大タイムアウトが設定されていて、それが自分が設定した既定のタイムアウトより短い場合、組織のタイムアウトが自分の設定の代わりに使用され、そのことが codespace の作成後に通知されます。 詳細については、「[アイドル タイムアウト期間の制限](/codespaces/managing-codespaces-for-your-organization/restricting-the-idle-timeout-period)」を参照してください。

{% warning %}

**警告**: codespace は 1 分単位で課金されます。 codespace をアクティブに使用していなくても、codespace がまだタイムアウトしていない場合は、codespace が実行されている時間に対して課金されます。 詳しくは、「[{% data variables.product.prodname_github_codespaces %} の支払いについて](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#codespaces-pricing)」をご覧ください。

{% endwarning %}

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
