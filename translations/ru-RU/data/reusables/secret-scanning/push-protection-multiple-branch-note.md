---
ms.openlocfilehash: 4cc5759031be6a031424abf13b7aa4c1db05c84f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147578742"
---
{% note %}

**Примечания** 

* Если конфигурация Git поддерживает отправку в несколько ветвей, а не только в текущую ветвь, отправка может быть заблокирована из-за отправки дополнительных и незапланированных ссылок. Дополнительные сведения см. в разделе [Параметры `push.default`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-pushdefault) в документации Git.
* Если истечет время ожидания {% data variables.product.prodname_secret_scanning %} при отправке, {% data variables.product.prodname_dotcom %} все равно выполнит проверку фиксаций на наличие секретов после отправки.

{% endnote %}
