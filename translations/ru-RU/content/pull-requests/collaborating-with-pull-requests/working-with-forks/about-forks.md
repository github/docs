---
title: О вилках
intro: "Вилка\_— это копия репозитория, которым вы управляете. Вилки позволяют вносить изменения в проект, не влияя на исходный репозиторий. Вы можете получать обновления из исходного репозитория или отправлять изменения для него с помощью запросов на вытягивание."
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/working-with-forks/about-forks
  - /articles/about-forks
  - /github/collaborating-with-issues-and-pull-requests/about-forks
  - /github/collaborating-with-pull-requests/working-with-forks/about-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 83372d27f052ee8c22730f5ce5d22e9efbf04fbb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158752'
---
Создание вилки репозитория аналогично копированию репозитория с двумя следующими важными отличиями.

* Вы можете использовать запрос на вытягивание, чтобы предложить изменения из принадлежащей пользователю вилки в исходный репозиторий в его экземпляре GitHub, также называемый *вышестоящим* репозиторием.
* Вы можете перенести изменения из вышестоящего репозитория в локальную вилку, синхронизировав вилку с вышестоящим репозиторием.

{% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}

Если вы являетесь участником {% data variables.enterprise.prodname_emu_enterprise %}, существуют дополнительные ограничения на репозитории, которые можно разветвить. {% data reusables.enterprise-accounts.emu-forks %} Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %}" в документации {% data variables.product.prodname_ghe_cloud %}.{% else %}.{% endif %}

{% endif %}

{% data reusables.repositories.desktop-fork %}

Удаление вилки не приведет к удалению исходного вышестоящего репозитория. Вы можете вносить в свою вилку любые изменения — добавлять участников совместной работы, переименовывать файлы, создавать {% data variables.product.prodname_pages %}, не влияя на исходный репозиторий.{% ifversion fpt or ghec %} Вы не можете восстановить удаленную вилку репозитория. Дополнительные сведения см. в разделе [Восстановление удаленного репозитория](/articles/restoring-a-deleted-repository).{% endif %}

В проектах с открытым кодом вилки часто используются для повторного выполнения идей или изменений, прежде чем предложить их обратно в вышестоящий репозиторий. Когда вы вносите изменения в принадлежащую пользователю вилку и открываете запрос на вытягивание, который сравнивает вашу работу с вышестоящим репозиторием, вы можете предоставить любому пользователю с доступом на отправку к вышестоящему репозиторию разрешение на отправку изменений в вашу ветвь запроса на вытягивание (включая разрешение на удаление ветви). Это ускоряет совместную работу, позволяя тем, кто обслуживает репозиторий, выполнять фиксации или запускать тесты локально в ветви запроса на вытягивание из принадлежащей пользователю вилки перед слиянием. Вы не можете предоставить разрешения на отправку в вилку, принадлежащую организации. 

{% data reusables.repositories.private_forks_inherit_permissions %}

Если вы хотите создать новый репозиторий из содержимого существующего репозитория, но не хотите в будущем сливать ваши изменения с вышестоящим репозиторием, то можно дублировать репозиторий или, если репозиторий является шаблоном, использовать его в качестве шаблона. Дополнительные сведения см. в разделах [Дублирование репозитория](/articles/duplicating-a-repository) и [Создание репозитория из шаблона](/articles/creating-a-repository-from-a-template).

## Дополнительные материалы

- [Сведения о моделях совместной разработки](/pull-requests/collaborating-with-pull-requests/getting-started/about-collaborative-development-models)
- [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Руководства по открытому коду](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
