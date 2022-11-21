---
title: Selbstgehostete Runnergruppen
intro: Mit der API für selbstgehostete Runnergruppen kannst du selbstgehostete Runnergruppen verwalten.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064370'
---
## Informationen zur API für selbstgehostete Runnergruppen

Mit dieser API kannst du selbstgehostete Runnergruppen verwalten. Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} müssen über die `administration`-Berechtigung für Repositorys oder `organization_self_hosted_runners`-Berechtigungen für Organisationen verfügen. Authentifizierte Benutzer*innen müssen über Administratorzugriff auf Repositorys oder Organisationen oder auf den `manage_runners:enterprise`-Bereich für Unternehmen verfügen, um diese API zu verwenden.
