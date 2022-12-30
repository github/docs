---
title: Управление параметрами темы
intro: 'Вы можете управлять внешним видом {% data variables.product.product_name %}, задав параметры темы в соответствии с параметрами системы, или всегда использовать светлый или темный режим.'
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
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108950'
---
Для выбора и гибкости в том, как и когда использовать {% data variables.product.product_name %}, можно настроить параметры темы, чтобы изменить внешний вид {% data variables.product.product_name %}. Можно выбрать тему (светлую или темную) либо настроить {% data variables.product.product_name %} для соблюдения параметров системы.

Можно использовать темную тему для уменьшения энергопотребления на определенных устройствах, если нужно снизить нагрузку на глаза в условиях низкой освещенности или если вы предпочитаете такой ее вид.

Если у вас слабое зрение, вы можете воспользоваться темой с высокой контрастностью, с большей контрастностью между элементами переднего плана и фона. {% ifversion fpt or ghae or ghec %} Если у вас есть цветовая окраска, вы можете воспользоваться нашей светлой и темной цветовой темой.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. В разделе "Режим темы" выберите раскрывающееся меню, а затем параметр темы.

   ![Раскрывающееся меню в разделе "Режим темы" для выбора параметра темы](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. Щелкните тему, которую вы хотите использовать.
    - Если выбрана одна тема, щелкните ее.

      {%- ifversion ghes = 3.5 %} {% note %}

      **Примечание.** Светлая тема с высокой контрастностью была недоступна в {% data variables.product.product_name %} 3.5.0, 3.5.1, 3.5.2 и 3.5.3. Эта тема доступна в версии 3.5.4 и более поздних версиях. Для получения дополнительных сведений об обновлениях обратитесь к администратору сайта.

      Дополнительные сведения о том, как определить используемую версию  {% data variables.product.product_name %}, см. в разделе [Сведения о версиях {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server).
      {% endnote %} {%- endif %}

      ![Переключатели для выбора одной темы](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png)
    - Если нужно наследовать параметры системы, щелкните дневную и ночную темы.

      ![Кнопки для выбора темы для синхронизации с системным параметром](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png) {% ifversion fpt or ghec %}
    - Если вы хотите выбрать тему, которая в настоящее время находится в общедоступной бета-версии, сначала необходимо включить ее с помощью предварительной версии функции. Дополнительные сведения см. в разделе [Изучение выпусков раннего доступа с предварительной версией функций](/get-started/using-github/exploring-early-access-releases-with-feature-preview).{% endif %}

{% ifversion command-palette %}

{% note %}

**Примечание.** Можно также изменить параметры темы с помощью палитры команд. Дополнительные сведения см. в разделе [{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette).

{% endnote %}

{% endif %}

## Дополнительные материалы

- [Настройка темы для {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop).
