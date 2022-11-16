---
title: Локальные средства выполнения тестов
intro: 'API локальных средств выполнения позволяет регистрировать, просматривать и удалять локальные средства выполнения.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064381'
---
## Сведения об API локальных средств выполнения

API локальных средств выполнения позволяет регистрировать, просматривать и удалять локальные средства выполнения. {% data reusables.actions.about-self-hosted-runners %} Дополнительные сведения см. в разделе [Размещение собственных средств выполнения](/actions/hosting-your-own-runners).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} должны иметь разрешение `administration` для репозиториев и разрешение `organization_self_hosted_runners` для организаций. Чтобы организации могли использовать этот API, пользователи, прошедшие проверку подлинности, должны иметь доступ администратора к репозиториям или организациям либо области `manage_runners:enterprise`.
