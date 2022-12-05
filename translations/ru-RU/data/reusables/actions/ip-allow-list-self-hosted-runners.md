---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180159"
---
{% ifversion ghae %} Чтобы разрешить локальным средствам выполнения взаимодействовать с {% data variables.product.prodname_dotcom %}, добавьте IP-адрес или диапазон IP-адресов локальных средств выполнения в список разрешенных. Дополнительные сведения см. в разделе [Добавление разрешенного IP-адреса](#adding-an-allowed-ip-address).
{% else %} {% warning %}

**Предупреждение**. Если вы используете список разрешенных IP-адресов, а также хотите использовать {% data variables.product.prodname_actions %}, необходимо использовать локальные средства выполнения{% ifversion actions-hosted-runners %} или {% data variables.product.prodname_dotcom %}размещенные большие средства выполнения тестов со статическим диапазоном IP-адресов{% endif %}. Дополнительные сведения см. в разделе [Размещение собственных средств выполнения](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners) {% ifversion actions-hosted-runners %} или ["Использование средств выполнения больших размеров](/actions/using-github-hosted-runners/using-larger-runners)"{% endif %}.

{% endwarning %}

Чтобы разрешить локальным {% ifversion actions-hosted-runners %} или более крупным размещенным {% endif %} средствам выполнения тестов взаимодействовать с {% data variables.product.prodname_dotcom %}, добавьте IP-адрес или диапазон IP-адресов средств выполнения в список разрешенных IP-адресов, настроенный для вашего предприятия. {% endif %}
