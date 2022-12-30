---
title: Просмотр действий развертывания для репозитория
intro: Вы можете просмотреть сведения о развертываниях для всего репозитория или для конкретного запроса на вытягивание.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/viewing-deployment-activity-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/viewing-deployment-activity-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View deployment activity
ms.openlocfilehash: 395f25648609801ee376b3f689c11bb651c23195
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145136610'
---
{% note %}

**Примечание**. Панель мониторинга развертываний в настоящее время доступна в виде бета-версии и может быть изменена.

{% endnote %}

Пользователи с доступом на чтение к репозиторию могут просматривать общие сведения обо всех текущих развертываниях и журнал прошлых действий развертывания, если рабочий процесс развертывания репозитория интегрирован с {% data variables.product.product_name %} через API развертываний или приложение из [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). Дополнительные сведения см. в разделе [Развертывания](/rest/reference/repos#deployments).

Сведения о развертывании также можно просмотреть на вкладке "Беседа" запроса на вытягивание.

## Просмотр панели мониторинга развертываний

{% data reusables.repositories.navigate-to-repo %}
2. Справа от списка файлов щелкните **Среды**.
![Среды справа на странице репозитория](/assets/images/help/repository/environments.png)

## Дополнительные материалы
 - [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
