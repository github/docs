---
title: Сведения о веб-перехватчиках
redirect_from:
  - /post-receive-hooks
  - /articles/post-receive-hooks
  - /articles/creating-webhooks
  - /articles/about-webhooks
  - /github/extending-github/about-webhooks
intro: 'Веб-перехватчики предоставляют способ доставки уведомлений на внешний веб-сервер всякий раз, когда в репозитории или организации выполняются определенные действия.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 30232a560237d473f17ec01d6451cb25195521fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880616'
---
{% tip %}

**Совет**. {% data reusables.organizations.owners-and-admins-can %} управлять веб-перехватчиками для организации. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

Веб-перехватчики могут активироваться каждый раз, когда в репозитории или организации выполняются различные действия. Например, вы можете настроить веб-перехватчик так, чтобы он выполнялся каждый раз:

* при отправке в репозиторий;
* при открытии запроса на вытягивание;
* при создании сайта {% data variables.product.prodname_pages %};
* при добавлении нового участника в команду.

С помощью API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} можно сделать так, чтобы эти веб-перехватчики обновляли внешнее средство отслеживания проблем, активировали сборки CI, обновляли зеркальную резервную копию или даже производили развертывание на рабочем сервере.

Чтобы настроить новый веб-перехватчик, вам потребуется доступ к внешнему серверу и знакомство с техническими процедурами. Справку по созданию веб-перехватчика, включая полный список действий, с которыми можно выполнить связывание, см. в разделе [Веб-перехватчики](/webhooks).
