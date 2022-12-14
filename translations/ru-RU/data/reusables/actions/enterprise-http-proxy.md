---
ms.openlocfilehash: 4efb2b0e214ee93dc8815055b005e11ea29534bb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107680"
---
Если у вас есть **прокси-сервер HTTP** , настроенный на {% данных variables.location.product_location %}:

  - Необходимо добавить `localhost` и `127.0.0.1` в список **исключений прокси-сервера HTTP**.
  - Если расположение внешнего хранилища не маршрутизируется, необходимо также добавить URL-адрес внешнего хранилища в список исключений.

  Дополнительные сведения об изменении параметров прокси-сервера см. в разделе [Настройка сервера веб-прокси исходящего трафика](/admin/configuration/configuring-an-outbound-web-proxy-server).
