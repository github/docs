---
title: テーマ設定を管理する
intro: 'システム設定に従うか、ライトまたはダーク モードを常に使用するようにテーマを設定することで、{% data variables.product.product_name %} の外観を管理できます。'
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 3f7d35978d3a80f7fb63cce1d054afd15b579f13
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108952'
---
{% data variables.product.product_name %} を使用時期と使用方法を選択して柔軟性を高めるために、テーマ設定をして {% data variables.product.product_name %} の外観を変更できます。 ライトとダークの 2 つのテーマから選択するか、システム設定に従うかを {% data variables.product.product_name %} で設定できます。

ダーク テーマを使用して、特定のデバイスの電力消費量を削減したり、暗い場所で目の負担を減らしたり、テーマの外観を優先したりすることができます。

弱視の方は、前景と背景の要素のコントラストが強いハイ コントラスト テーマの使用をお勧めします。{% ifversion fpt or ghae or ghec %}色覚障碍がある方には、ライトとダークの色覚障碍向けテーマをお勧めします。

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. [テーマ モード] で、ドロップダウン メニューを選択し、テーマの設定をクリックします。

   ![テーマの設定を選択するための [テーマ モード] のドロップダウン メニュー](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. 使いたいテーマをクリックしてください。
    - 1 つのテーマを選択する場合は、そのテーマをクリックします。

      {%- ifversion ghes = 3.5 %} {% note %}

      **注**: 明るいハイ コントラスト テーマは、{% data variables.product.product_name %} 3.5.0、3.5.1、3.5.2、および 3.5.3 では使用できませんでした。 このテーマは 3.5.4 以降で使用できます。 アップグレードの詳しい情報については、サイト管理者にお問い合わせください。

      使用する {% data variables.product.product_name %} のバージョンの決定について詳しくは、「[{% data variables.product.prodname_docs %} のバージョンについて](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)」を参照してください。
      {% endnote %} {%- endif %}

      ![1 つのテーマを選択するためのラジオ ボタン](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png)
    - システム設定に従うことを選択した場合は、昼のテーマと夜のテーマをクリックします。

      ![システム設定と同期するテーマを選択するためのボタン](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% ifversion fpt or ghec %}
    - 現在パブリック ベータ版のテーマを選択する場合は、まず機能プレビューでそれを有効にする必要があります。 詳細については、「[機能プレビューを使用した早期アクセス リリースを探索する](/get-started/using-github/exploring-early-access-releases-with-feature-preview)」を参照してください。{% endif %}

{% ifversion command-palette %}

{% note %}

**注:** コマンド パレットを使用してテーマの設定を変更することもできます。 詳細については、「[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)」を参照してください。

{% endnote %}

{% endif %}

## 参考資料

- [{% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop) の設定方法
