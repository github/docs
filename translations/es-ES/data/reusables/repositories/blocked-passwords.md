---
ms.openlocfilehash: 1f59c95d79ab5fa0f778e05379112ec4b82afd42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145118338"
---
{% ifversion fpt or ghec %} Al escribir una contraseña para iniciar sesión, crear una cuenta o cambiar la contraseña, {% data variables.product.product_name %} comprobará si la contraseña que ha escrito se considera débil según los conjuntos de datos como HaveIBeenPwned. La contraseña se puede considerar débil, incluso si no la usaste nunca antes.

{% data variables.product.product_name %} solo inspecciona la contraseña cuando la escribes, pero nunca almacena la contraseña que ingresaste como texto simple. Para más información, vea [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
