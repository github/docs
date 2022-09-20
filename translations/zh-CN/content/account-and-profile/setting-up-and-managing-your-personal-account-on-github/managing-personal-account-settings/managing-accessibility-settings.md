---
title: 管理辅助功能设置
shortTitle: Manage accessibility settings
intro: '{% data variables.product.product_name %} 的用户界面可以适应视觉、听觉、运动、认知或学习需求。'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d4811368ab825f0b24864283f8be54672f72a787
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614317'
---
## 关于辅助功能设置

若要在 {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上创建满足需求的体验，可以自定义用户界面。 辅助功能设置对残障人士至关重要，但对任何人都很有用。 例如，键盘快捷方式的自定义对使用语音控制导航的人而言必不可少，但如果 {% data variables.product.product_name %} 的键盘快捷方式与另一个应用程序快捷方式发生冲突，则自定义对任何人都很有用。

## 管理辅助功能设置

可以决定是否要在 {% ifversion fpt or ghec %}{% data variables.product.product_location %}{% elsif ghes or ghae %} 网站上使用 {% data variables.product.product_location %}{% endif %} 的部分或全部键盘快捷方式，并且可以控制动画图像的显示。

### 管理键盘快捷方式

可以单纯使用键盘在 {% data variables.product.product_name %} 网站上执行操作。 键盘快捷方式可用于节省时间，但可能意外激活或干扰辅助技术。

默认情况下，在 {% data variables.product.product_name %} 上启用所有键盘快捷方式。 有关详细信息，请参阅“[键盘快捷方式](/get-started/using-github/keyboard-shortcuts)”。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. 在“键盘快捷方式”下，管理键盘快捷方式的设置。

   - 若要禁用不使用修改键（如 <kbd>Control</kbd> 或 <kbd>Command</kbd>）的快捷键，请在“常规”下取消选择“字符键”。
     - 如果禁用字符键，仍可触发 Web 浏览器的快捷方式，并且仍可触发使用修该键的 {% data variables.product.product_name %} 的快捷方式。
   {%- ifversion command-palette %}
   - 若要自定义用于触发命令面板的键盘快捷方式，在“命令面板”下，请使用下拉菜单选择键盘快捷方式。 有关详细信息，请参阅“[{% data variables.product.company_short %} 命令面板](/get-started/using-github/github-command-palette)”。
   {%- endif %}

{% ifversion motion-management %}

### 管理运动

可以控制 {% data variables.product.product_name %} 显示动画 .gif 图像的方式。

默认情况下，{% data variables.product.product_name %} 与系统级偏好同步，以减少运动。 有关详细信息，请参阅操作系统的文档或设置。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. 在“运动”下，管理运动设置。

   - 若要控制 {% data variables.product.product_name %} 显示动画图像的方式，请在“自动播放动画图像”下选择“与系统同步”、“已启用”或“已禁用”  。

{% endif %}
