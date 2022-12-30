---
title: Управление параметрами специальных возможностей
shortTitle: Manage accessibility settings
intro: 'Пользовательский интерфейс {% data variables.product.product_name %} может адаптироваться к особенностям зрения, слуха, моторики, когнитивным навыкам или потребностям в обучении.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 088bb097004f6c3b13412ec9716665b1f02edca5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107216'
---
## Сведения о параметрах специальных возможностей

Чтобы создать интерфейс для {% ifversion fpt или ghec или ghes %}{% данных variables.location.product_location %}{% elsif ghae %}{% данных variables.product.product_name %}{% endif %}, который соответствует вашим потребностям, можно настроить пользовательский интерфейс. Параметры специальных возможностей могут быть важными для пользователей с ограниченными возможностями, но также могут быть полезными для всех. Например, настройка сочетаний клавиш имеет важное значение для пользователей, которые выполняют навигацию с помощью голосового управления, но также может быть полезной для всех, если сочетание клавиш для {% data variables.product.product_name %} конфликтует с другим ярлыком приложения.

## Управление параметрами специальных возможностей

Вы можете решить, следует ли использовать некоторые или все сочетания клавиш для {% ifversion fpt или ghec %}{% данных variables.location.product_location %}{% elsif ghes или ghae %}, веб-сайт для {% данных variables.location.product_location %}{% endif %}, и вы можете управлять отображением анимированных изображений.

### Управление сочетаниями клавиш

Вы можете выполнять действия на веб-сайте {% data variables.product.product_name %}, используя только клавиатуру. Сочетания клавиш могут быть полезны для экономии времени, но их можно активировать случайно или они могут помешать работе специальной технологии.

По умолчанию все сочетания клавиш включены в {% data variables.product.product_name %}. Дополнительные сведения см. в разделе [Сочетания клавиш](/get-started/using-github/keyboard-shortcuts).

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. В разделе "Сочетания клавиш" можно настроить параметры для сочетаний клавиш.

   - Чтобы отключить сочетания клавиш, которые не используют клавиши-модификаторы, такие как <kbd>CONTROL</kbd> или <kbd>COMMAND</kbd>, в разделе "Общие" отмените выбор **клавиш символов**.
     - Если отключить клавиши символов, вы по-прежнему сможете активировать сочетания клавиш для веб-браузера, а также активировать сочетания клавиш для {% data variables.product.product_name %}, которые используют клавишу-модификатор.
   {%- ifversion command-palette %}
   - Чтобы настроить сочетания клавиш для активации палитры команд, в разделе "Палитра команд" используйте раскрывающиеся меню для выбора сочетания клавиш. Дополнительные сведения см. в разделе [Палитра команд {% data variables.product.company_short %}](/get-started/using-github/github-command-palette).
   {%- endif %}

{% ifversion motion-management %}

### Управление движением

Вы можете контролировать, как {% data variables.product.product_name %} отображает анимированные изображения _GIF_.

По умолчанию {% data variables.product.product_name %} синхронизируется с параметром системного уровня для движения со сжатием. Дополнительные сведения см. в разделе документации или параметров операционной системы.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. В разделе "Движение" можно управлять параметрами движения.

   - Чтобы контролировать, как {% data variables.product.product_name %} отображает анимированные изображения, в разделе "Автоматическое воспроизведение анимированных изображений" выберите **Синхронизация с системой**, **Включено** или **Отключено**.

{% endif %}
