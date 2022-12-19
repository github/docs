---
title: Устранение неполадок с перенаправлением портов для Codespaces
intro: Действия по устранению распространенных проблем с перенаправлением портов.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Port forwarding
ms.openlocfilehash: 3b4a8af53b7c4ab28f30ed3c8b4b73c45c6a47e6
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "145092469"
---
Когда приложение, работающее в среде codespace, подключает порт к консоли, {% data variables.product.prodname_codespaces %} обнаруживает шаблон URL-адреса localhost и автоматически переадресует порт. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Если порт не переадресуется автоматически, его можно переадресовать вручную. Дополнительные сведения см. в разделе [Переадресация порта](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port).

Если перенаправление портов настроено, проверьте следующее:

- Используйте всплывающее уведомление или щелкните URL-адрес в терминале, чтобы открыть переадресованный порт. Ввод `localhost:8000` (в качестве примера) на локальном компьютере работать не будет, если вы подключены к codespace через браузер.
- Убедитесь, что приложение по-прежнему запущено, из codespace. Если среда codespace остановилась после периода бездействия, необходимо перезапустить приложение после ее перезапуска.

Как правило, вы можете сделать переадресованный порт общедоступным либо доступным в организации, которая владеет репозиторием. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace). Если один из вариантов общей видимости или видимости для организации либо они оба недоступны, это означает, что настроена политика на уровне организации. Дополнительные сведения см. в разделе [Ограничение видимости переадресованных портов](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports).
