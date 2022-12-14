---
title: Управление параметрами темы
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
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088845"
---
Для выбора и гибкости в том, как и когда использовать {% data variables.product.product_name %}, можно настроить параметры темы, чтобы изменить внешний вид {% data variables.product.product_name %}. Можно выбрать тему (светлую или темную) либо настроить {% data variables.product.product_name %} для соблюдения параметров системы.

Можно использовать темную тему для уменьшения энергопотребления на определенных устройствах, если нужно снизить нагрузку на глаза в условиях низкой освещенности или если вы предпочитаете такой ее вид.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}Если у вас плохое зрение, можно воспользоваться темой высокой контрастности с повышенной контрастностью между передним планом и фоновыми элементами.{% endif %}{% ifversion fpt or ghae or ghec %} Если вы страдаете дальтонизмом, вам могут подойти наши светлая и темная цветовые темы для дальтоников.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. В разделе "Режим темы" выберите раскрывающееся меню, а затем параметр темы.

   ![Раскрывающееся меню в разделе "Режим темы" для выбора параметра темы](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Щелкните тему, которую вы хотите использовать.
    - Если выбрана одна тема, щелкните ее.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Переключатели для выбора одной темы](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![Переключатели для выбора одной темы](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - Если нужно наследовать параметры системы, щелкните дневную и ночную темы.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![Кнопки для выбора темы для синхронизации с системным параметром](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png) {% else %}![Кнопка для выбора темы для синхронизации с системным параметром](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - Если вы хотите выбрать тему, которая в настоящее время находится в общедоступной бета-версии, сначала необходимо включить ее с помощью предварительной версии функции. Дополнительные сведения см. в разделе [Изучение выпусков раннего доступа с предварительной версией функций](/get-started/using-github/exploring-early-access-releases-with-feature-preview).{% endif %}

{% if command-palette %}

{% note %}

**Примечание.** Можно также изменить параметры темы с помощью палитры команд. Дополнительные сведения см. в разделе [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).

{% endnote %}

{% endif %}

## <a name="further-reading"></a>Дополнительные материалы

- [Настройка темы для {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop).
