---
ms.openlocfilehash: 9523f75cde4298a6e1cd4335127a1dfb5bb342b5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160093"
---
Когда приложение, выполняющееся в кодовом пространстве, выводит выходные данные в терминал, содержащий URL-адрес localhost, например, `http://localhost:PORT` или `http://127.0.0.1:PORT`, выполняется автоматическая переадресация порта. Если {% data variables.product.prodname_github_codespaces %} используется в браузере или в {% data variables.product.prodname_vscode %}, строка URL-адреса в терминале преобразуется в ссылку, по которой можно перейти, чтобы просмотреть веб-страницу на локальном компьютере. По умолчанию {% data variables.product.prodname_github_codespaces %} пересылает порты по протоколу HTTP.

![Автоматическая переадресация портов](/assets/images/help/codespaces/automatic-port-forwarding.png)

Можно также выполнить переадресацию порта вручную, пометить переадресованные порты, предоставить доступ к переадресованным портам членам организации, предоставить общий доступ к переадресованным портам и добавить переадресованные порты в конфигурацию кодового пространства.

{% note %}

**Примечание**. {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Переадресация порта

Можно вручную выполнить переадресацию порта, который не был переадресован автоматически.