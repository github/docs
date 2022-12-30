---
title: Selbstgehostete Runner
intro: 'Mit der selbstgehosteten Runner-API kannst du selbstgehostete Runner registrieren, anzeigen und löschen.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064378'
---
## Informationen zur selbstgehosteten Runner-API

Mit der selbstgehosteten Runner-API kannst du selbstgehostete Runner registrieren, anzeigen und löschen. {% data reusables.actions.about-self-hosted-runners %} Weitere Informationen findest du unter [Hosting der eigenen Runner](/actions/hosting-your-own-runners).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} müssen über die `administration`-Berechtigung für Repositorys und `organization_self_hosted_runners`-Berechtigungen für Organisationen verfügen. Authentifizierte Benutzer*innen müssen über Administratorzugriff auf Repositorys oder Organisationen oder auf den `manage_runners:enterprise`-Bereich für Unternehmen verfügen, um diese API zu verwenden.
