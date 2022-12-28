---
ms.openlocfilehash: 3746401728e99a429a8e5fd57874c7b6d83bdb56
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148098176"
---
{% данных variables.product.prodname_dotcom %} предоставляет предварительно настроенные начальные рабочие процессы, которые можно настроить для создания собственного рабочего процесса непрерывной интеграции. {% данных variables.product.product_name %} анализирует код и показывает начальные рабочие процессы CI, которые могут быть полезны для репозитория. Например, если репозиторий содержит код Node.js, вы увидите предложения для проектов Node.js. Начальные рабочие процессы могут быть отправной точкой для создания пользовательского рабочего процесса, или же его можно использовать в том виде, как есть.

Полный список начальных рабочих процессов можно просмотреть в репозитории {% ifversion fpt или ghec %}[actions/starter-workflows](https://github.com/actions/starter-workflows) {% else %} `actions/starter-workflows` в репозитории {% данных variables.location.product_location %}{% endif %}.
