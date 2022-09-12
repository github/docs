---
title: 管理主题设置
intro: '通过设置主题首选项以遵循系统设置或始终使用浅色模式或深色模式，您可以管理 {% data variables.product.product_name %} 的外观，'
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
ms.openlocfilehash: 6251b265d99271f58a4ad02d2f6cb7fdf722cb6b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147580445'
---
为了选择和灵活地使用 {% data variables.product.product_name %}，您可以配置主题设置来更改 {% data variables.product.product_name %} 的外观。 您可以在浅色和深色两个主题中进行选择，也可以配置 {% data variables.product.product_name %} 遵循系统设置。

您可能需要使用深色主题来减少某些设备的功耗，以在低光条件下减小眼睛的压力，或者因为您更喜欢主题的外观。

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}如果你视力低下，你可能会受益于高对比度主题，其前景和背景元素之间的对比度更高。{% endif %}{% ifversion fpt or ghae or ghec %} 如果你有色盲，你可能会从我们的浅色和深色色盲主题中受益。

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. 在“Theme mode（主题模式）”下，选择下拉菜单，然后单击主题首选项。

   ![“主题模式”下的下拉菜单，用于选择主题首选项](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. 单击想要使用的主题。
    - 如果您选择单个主题，请单击一个主题。

      {%- ifversion ghes = 3.5 %} {% note %}

      **注意**：在 {% data variables.product.product_name %} 3.5.0、3.5.1、3.5.2 和 3.5.3 中，浅色高对比度主题不可用。 此主题在 3.5.4 及更高版本中可用。 有关升级的详细信息，请联系站点管理员。

      有关确定所使用的 {% data variables.product.product_name %} 版本的详细信息，请参阅“[关于 {% data variables.product.prodname_docs %} 的版本](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)”。
      {% endnote %} {%- endif %}

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![用于选择单个主题的单选按钮](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![用于选择单个主题的单选按钮](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - 如果您选择遵循系统设置，请单击白天主题和夜间主题。

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![用于选择要与系统设置同步的主题的按钮](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![用于选择与系统设置同步的主题的按钮](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - 如果您想选择当前处于公开测试阶段的主题，则首先需要通过功能预览启用它。 有关详细信息，请参阅“[使用功能预览探索抢先体验版](/get-started/using-github/exploring-early-access-releases-with-feature-preview)”。{% endif %}

{% ifversion command-palette %}

{% note %}

注意：你还可以使用命令面板更改主题设置。 有关详细信息，请参阅“[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”。

{% endnote %}

{% endif %}

## 延伸阅读

- “[为 {% data variables.product.prodname_desktop %} 设置主题](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)”
