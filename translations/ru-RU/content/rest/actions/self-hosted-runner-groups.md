---
title: Группы локального средства выполнения
intro: API групп локальных средств выполнения позволяет управлять группами локальных средств выполнения.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064373'
---
## Сведения об API групп локальных средств выполнения

API групп локальных средств выполнения позволяет управлять группами локальных средств выполнения. Дополнительные сведения см. в разделе [Управление доступом к средствам выполнения тестов локального размещения с помощью групп](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `administration` для репозиториев или разрешение `organization_self_hosted_runners` для организаций. Чтобы организации могли использовать этот API, пользователи, прошедшие проверку подлинности, должны иметь доступ администратора к репозиториям или организациям либо области `manage_runners:enterprise`.
