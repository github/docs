---
ms.openlocfilehash: 110de05126a0656467f63f7c377b257adf401c26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064965"
---
Если вы разрешаете отправку секрета, на вкладке "Безопасность" создается оповещение. {% data variables.product.prodname_dotcom %} закрывает оповещение и не отправляет уведомление, если указать, что секрет является ложным срабатыванием или используется только в тестах. Если указать, что секрет является реальным и что вы исправите это позже, {% data variables.product.prodname_dotcom %} оставит оповещение системы безопасности открытым и отправит уведомления автору фиксации, а также администраторам репозитория. Дополнительные сведения см. в разделе [Управление оповещениями при анализе секретов](/code-security/secret-scanning/managing-alerts-from-secret-scanning).
