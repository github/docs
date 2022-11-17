---
title: Устранение неполадок с перенаправлением портов для GitHub Codespaces
intro: Действия по устранению распространенных проблем с перенаправлением портов.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Port forwarding
redirect_from:
  - /codespaces/troubleshooting/troubleshooting-port-forwarding-for-codespaces
ms.openlocfilehash: 828150ca05c18cb1106f5a3c883331785b6bce2e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159152'
---
Когда приложение, работающее в среде codespace, подключает порт к консоли, {% data variables.product.prodname_github_codespaces %} обнаруживает шаблон URL-адреса localhost и автоматически переадресует порт. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace).

Если порт не переадресуется автоматически, его можно переадресовать вручную. Дополнительные сведения см. в разделе [Переадресация порта](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#forwarding-a-port).

Если перенаправление портов настроено, проверьте следующее:

- Используйте ссылку в всплывающем сообщении уведомления, которое появится в правом нижнем углу {% data variables.product.prodname_vscode_shortname %}, или щелкните URL-адрес в терминале, чтобы открыть переадресованный порт. Ввод `localhost:8000` (в качестве примера) на локальном компьютере работать не будет, если вы подключены к codespace через браузер.
- Убедитесь, что приложение по-прежнему запущено, из codespace. Если среда codespace остановилась после периода бездействия, необходимо перезапустить приложение после ее перезапуска.

Как правило, вы можете сделать переадресованный порт общедоступным либо доступным в организации, которая владеет репозиторием. Дополнительные сведения см. в разделе [Переадресация портов в кодовом пространстве](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace). Если один из вариантов общей видимости или видимости для организации либо они оба недоступны, это означает, что настроена политика на уровне организации. Дополнительные сведения см. в разделе [Ограничение видимости переадресованных портов](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports).

{% data reusables.codespaces.forwarded-ports-environment-variable %}
