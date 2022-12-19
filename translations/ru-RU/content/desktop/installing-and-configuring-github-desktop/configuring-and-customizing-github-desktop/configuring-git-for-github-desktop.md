---
title: Настройка Git для GitHub Desktop
shortTitle: Configuring Git
intro: 'Вы можете управлять параметрами конфигурации Git для локальных репозиториев с помощью {% data variables.product.prodname_desktop %}.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058519'
---
## Сведения о конфигурации Git для {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} использует локальные параметры конфигурации Git и предоставляет возможность настройки некоторых из этих параметров, таких как глобальные сведения о авторе и ветвь по умолчанию, используемая при создании нового репозитория.

{% data variables.product.prodname_desktop %} позволяет задать имя и адрес электронной почты, связанные с вашими фиксациями в репозиториях. Если ваше имя и адрес электронной почты уже заданы в глобальной конфигурации Git для вашего компьютера, {% data variables.product.prodname_desktop %} обнаружит эти значения и будет использовать их. {% data variables.product.prodname_desktop %} также позволяет задать другое имя и адрес электронной почты для отдельного репозитория. Это полезно, если необходимо использовать отдельный рабочий адрес электронной почты для определенного репозитория.

Если адрес электронной почты, заданный в конфигурации Git, не соответствует адресу электронной почты, связанному с учетной записью {% data variables.product.product_name %}, в которую вы вошли, в {% data variables.product.prodname_desktop %} перед фиксацией отобразится соответствующее предупреждение.

{% data variables.product.prodname_desktop %} также позволяет изменить имя ветви по умолчанию, которое вы хотите использовать при создании новых репозиториев. По умолчанию {% data variables.product.prodname_desktop %} использует `main` в качестве имени ветви по умолчанию в создаваемых вами репозиториях.

{% tip %}

**Совет.** Любой пользователь сможет увидеть адрес электронной почты в конфигурации Git, если ваши фиксации будут общедоступными. Дополнительные сведения см. в разделе [Настройка адреса электронной почты для фиксации](/articles/setting-your-commit-email-address/).

{% endtip %}

## Настройка сведений о глобальном авторе

Настройка сведений о глобальном авторе в {% data variables.product.prodname_desktop %} позволяет обновить имя и адрес электронной почты в глобальной конфигурации Git. Это будут имя и адрес электронной почты по умолчанию для всех новых локальных репозиториев, создаваемых в {% data variables.product.prodname_desktop %}.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. В окне "Настройки" нажмите **Git**.
  ![Область Git в меню "Настройки"](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Поле для имени конфигурации Git](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Выбранный адрес электронной почты в поле конфигурации Git](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Кнопка "Сохранить" в поле конфигурации Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. В окне "Параметры" нажмите **Git**.
![Область Git в меню "Параметры"](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Поле для имени конфигурации Git](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Выбранный адрес электронной почты в поле конфигурации Git](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Кнопка "Сохранить" в поле конфигурации Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## Настройка разных сведений о авторе для отдельного репозитория

Вы можете изменить имя и адрес электронной почты, используемые для создания фиксаций в определенном репозитории. Эта локальная конфигурация Git переопределит глобальные параметры конфигурации Git только для этого репозитория.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## Настройка ветви по умолчанию для новых репозиториев

Вы можете настроить ветвь по умолчанию, которая будет использоваться при создании нового репозитория в {% data variables.product.prodname_desktop %}. Дополнительные сведения о ветви по умолчанию см. в разделе [Сведения о ветви по умолчанию](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. В окне "Настройки" нажмите **Git**.
  ![Область Git в меню "Параметры"](/assets/images/help/desktop/mac-select-git-pane.png)
1. В разделе "Имя ветви по умолчанию для новых репозиториев" выберите имя ветви по умолчанию, которое вы хотите использовать, или введите требуемое имя, выбрав "Другое...".
  ![Параметры выбора имени ветви по умолчанию](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Кнопка "Сохранить" в поле конфигурации Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. В окне "Параметры" нажмите **Git**.
  ![Область Git в меню "Параметры"](/assets/images/help/desktop/windows-select-git-pane.png)
1. В разделе "Имя ветви по умолчанию для новых репозиториев" выберите имя ветви по умолчанию, которое вы хотите использовать, или нажмите кнопку "Другое..." , чтобы ввести другое имя.
  ![Параметры выбора имени ветви по умолчанию](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Кнопка "Сохранить" в поле конфигурации Git](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## Дополнительные материалы

- [Добавление адреса электронной почты в учетную запись GitHub](/articles/adding-an-email-address-to-your-github-account/)
- [Указание адреса электронной почты для фиксаций](/articles/setting-your-commit-email-address/)
- [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches)
