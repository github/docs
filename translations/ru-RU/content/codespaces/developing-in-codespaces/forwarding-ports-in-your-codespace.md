---
title: Переадресация портов в кодовом пространстве
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Forward ports
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158912'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Сведения о переадресованных портах

Переадресация портов обеспечивает доступ к TCP-портам, работающим в кодовом пространстве. Например, если веб-приложение выполняется через определенный порт в кодовом пространстве, можно настроить переадресацию этого порта. Это позволяет получать доступ к приложению из браузера на локальном компьютере для тестирования и отладки.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. В списке портов нажмите кнопку **Добавить порт**.

   ![Кнопка "Добавить порт"](/assets/images/help/codespaces/add-port-button.png)

1. Введите номер или адрес порта, а затем нажмите клавишу ВВОД.

   ![Кнопка с текстовым полем для указания порта](/assets/images/help/codespaces/port-number-text-box.png)

## Использование переадресации HTTPS

По умолчанию {% data variables.product.prodname_github_codespaces %} пересылает порты по протоколу HTTP, но при необходимости вы можете обновить любой порт для использования ПРОТОКОЛА HTTPS. При обновлении порта с общедоступной видимостью для использования ПРОТОКОЛА HTTPS видимость порта автоматически изменится на частный.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Щелкните правой кнопкой мыши порт, который требуется обновить, а затем наведите указатель мыши на пункт **Изменить протокол порта**.
  ![Параметр для изменения протокола порта](/assets/images/help/codespaces/update-port-protocol.png)
1. Выберите протокол, необходимый для этого порта. Выбранный протокол будет запоминаться для этого порта на время существования кодового пространства.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Щелкните правой кнопкой мыши порт, к которому требуется предоставить доступ, выберите меню "Видимость порта", а затем щелкните **Частный для организации** или **Общедоступный**.
  ![Параметр выбора видимости порта в контекстном меню](/assets/images/help/codespaces/make-public-option.png)
1. Справа от локального адреса порта щелкните значок копирования.
  ![Значок копирования для URL-адреса порта](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Отправьте скопированный URL-адрес пользователю, которому требуется предоставить доступ к порту.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. В списке портов нажмите кнопку **Добавить порт**.

   ![Кнопка "Добавить порт"](/assets/images/help/codespaces/add-port-button.png)

1. Введите номер или адрес порта, а затем нажмите клавишу ВВОД.

   ![Кнопка с текстовым полем для указания порта](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Щелкните правой кнопкой мыши порт, к которому требуется предоставить доступ, выберите меню "Видимость порта", а затем щелкните **Частный для организации** или **Общедоступный**.
  ![Параметр, позволяющий сделать порт общедоступным, в контекстном меню](/assets/images/help/codespaces/make-public-option.png)
1. Справа от локального адреса порта щелкните значок копирования.
  ![Значок копирования для URL-адреса порта](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Отправьте скопированный URL-адрес пользователю, которому требуется предоставить доступ к порту.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Для переадресации порта используйте подкоманду `gh codespace ports forward`. Замените `codespace-port:local-port` удаленными и локальными портами, которые требуется подключить. Выполнив команду, выберите требуемый вариант из представленного списка кодовых пространств.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

Дополнительные сведения об этой команде см. в [ руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_forward).

Чтобы просмотреть сведения о переадресованных портах, введите `gh codespace ports` и выберите кодовое пространство.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

Для изменения видимости переадресованного порта используйте подкоманду `gh codespace ports visibility`. {% data reusables.codespaces.port-visibility-settings %}

Замените `codespace-port` номером переадресованного порта. Замените `setting` на `private`, `org` или `public`. Выполнив команду, выберите требуемый вариант из представленного списка кодовых пространств.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

Задать видимость для нескольких портов можно с помощью одной команды. Пример:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Дополнительные сведения об этой команде см. в [ руководстве по {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

Метки портов отображаются при перечислении перенаправленных портов для codespace. Для этого используйте `gh codespace ports` команду , а затем выберите codespace.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## Переадресация порта

Сведения о том, как перенаправить порт в codespace на порт на локальном компьютере, см. в разделе "Перенаправление портов" статьи "[Модель безопасности](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)" документации JetBrains.

Кроме того, для пересылки порта можно использовать {% data variables.product.prodname_cli %}. Для получения дополнительных сведений перейдите на вкладку "{% data variables.product.prodname_cli %}" в верхней части этой страницы.

{% endjetbrains %}
