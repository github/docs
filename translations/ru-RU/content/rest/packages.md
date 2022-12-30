---
title: Пакеты
intro: 'Используйте REST API для взаимодействия с {% data variables.product.prodname_registry %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192828'
---
## Сведения о {% data variables.product.prodname_registry %}

С помощью REST API можно управлять пакетами в репозиториях и организациях {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Восстановление и удаление пакетов](/packages/learn-github-packages/deleting-and-restoring-a-package).

Чтобы использовать REST API для управления {% data variables.product.prodname_registry %}, необходимо пройти проверку подлинности с помощью {% data variables.product.pat_v1 %}.
  - Чтобы получить доступ к метаданным пакета, маркер должен включать область `read:packages`.
  - Чтобы удалить пакеты и версии пакетов, маркер должен включать области `read:packages` и `delete:packages`.
  - Чтобы восстановить пакеты и версии пакетов, маркер должен включать области `read:packages` и `write:packages`.

Если пакет находится в реестре, который поддерживает детализированные разрешения, маркеру не требуется `repo` область для доступа к этому пакету или управления им. Если пакет находится в реестре, который поддерживает только разрешения на уровне репозитория, то маркер должен также включать `repo` область, так как пакет наследует разрешения от репозитория {% data variables.product.prodname_dotcom %}. Список реестров, которые поддерживают только разрешения на уровне репозитория, см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages).

Чтобы получить доступ к ресурсам в организации с включенным единым входом, необходимо включить единый вход для {% data variables.product.pat_v1 %}. Дополнительные сведения см. в разделе [Авторизация {% data variables.product.pat_generic %} для использования с единым вхожением SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}в документации по {% data variables.product.prodname_ghe_cloud %}. {% else %}". {% endif %}
