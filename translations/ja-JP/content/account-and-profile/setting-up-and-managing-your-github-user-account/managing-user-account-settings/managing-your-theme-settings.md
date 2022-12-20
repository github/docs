---
title: テーマ設定を管理する
intro: You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 238af803ead331a9323e9457024a85dff05fc5d4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088847"
---
{% data variables.product.product_name %} を使用時期と使用方法を選択して柔軟性を高めるために、テーマ設定をして {% data variables.product.product_name %} の外観を変更できます。 ライトとダークの 2 つのテーマから選択するか、システム設定に従うかを {% data variables.product.product_name %} で設定できます。

ダーク テーマを使用して、特定のデバイスの電力消費量を削減したり、暗い場所で目の負担を減らしたり、テーマの外観を優先したりすることができます。

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}弱視の方は、前景と背景の要素のコントラストが強いハイ コントラスト テーマの使用をお勧めします。{% endif %}{% ifversion fpt or ghae or ghec %}色覚障碍がある方には、ライトとダークの色覚障碍向けテーマをお勧めします。

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. [テーマ モード] で、ドロップダウン メニューを選択し、テーマの設定をクリックします。

   ![テーマの設定を選択するための [テーマ モード] のドロップダウン メニュー](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. 使いたいテーマをクリックしてください。
    - 1 つのテーマを選択する場合は、そのテーマをクリックします。

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![1 つのテーマを選択するためのラジオ ボタン](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![1 つのテーマを選択するためのラジオ ボタン](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - システム設定に従うことを選択した場合は、昼のテーマと夜のテーマをクリックします。

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![システム設定と同期するテーマを選択するためのボタン](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![システム設定と同期するテーマを選択するためのボタン](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - 現在パブリック ベータ版のテーマを選択する場合は、まず機能プレビューでそれを有効にする必要があります。 詳細については、「[機能プレビューを使用した早期アクセス リリースを探索する](/get-started/using-github/exploring-early-access-releases-with-feature-preview)」を参照してください。{% endif %}

{% if command-palette %}

{% note %}

**注:** コマンド パレットを使用してテーマの設定を変更することもできます。 詳細については、「[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)」を参照してください。

{% endnote %}

{% endif %}

## <a name="further-reading"></a>参考資料

- [{% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop) の設定方法
