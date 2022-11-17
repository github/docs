---
title: Приглашения репозитория
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: API приглашений репозитория позволяет просматривать приглашения и управлять ими для совместной работы в репозитории.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065797'
---
## Сведения об API приглашений репозитория

API приглашений репозитория позволяет просматривать приглашения и управлять ими для совместной работы в репозитории. Приглашенные пользователи (или внешние службы от имени приглашенных пользователей) могут принимать и отклонять приглашения.

Чтобы добавить пользователя в качестве участника совместной работы, используйте API участников совместной работы. Дополнительные сведения см. в разделе [Добавление участника совместной работы в репозитории](/rest/collaborators/collaborators#add-a-repository-collaborator).

Обратите внимание, что `repo:invite` [область OAuth](/developers/apps/scopes-for-oauth-apps) предоставляет целевой доступ к приглашениям **без** предоставления доступа к коду репозитория, а область `repo` — разрешение на код, а также приглашения.
